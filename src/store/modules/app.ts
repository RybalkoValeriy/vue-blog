/* eslint-disable no-async-promise-executor */
import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule,
} from "vuex-module-decorators";
import { User } from "../../../core/models/User";
import { Topic } from "../../../core/models/Topic";
import { UserService } from "../../../core/services/UserService";
import { Repository } from "../../../core/services/Repository";

import store from "@/store";
import { Article } from "core/models/Article";

export interface IAppState {
  user: User | null;
  isSignedIn: boolean | false;
}

@Module({ dynamic: true, store: store, name: "app" })
class App extends VuexModule implements IAppState {
  public user: User | null = null;
  public isSignedIn: boolean | false = false;
  public allTopics: Topic[] = [];
  private allTopicsPromise: Promise<void> | null = null;

  @Mutation
  private SET_USER(user: User | null): void {
    this.user = user;
  }

  @Mutation
  private SET_IS_SIGNED_IN(isSignedIn: boolean): void {
    this.isSignedIn = isSignedIn;
  }

  @Mutation
  private SET_TOPICS(topics: Topic[]): void {
    this.allTopics = topics;
  }

  @Mutation
  private SET_TOPICS_PROMISE(promise: Promise<void> | null): void {
    this.allTopicsPromise = promise;
  }

  // @Mutation
  // private SET_ARTICLE_FOR_TOPIC(articles: Article[]): void {
  //   this.articles = articles;
  // }

  @Action({ rawError: true })
  public async LogIn(user: User): Promise<void> {
    const userExists = await UserService.loginUser(user);

    if (userExists) {
      AppModule.SET_USER(userExists);
      AppModule.SET_IS_SIGNED_IN(true);
    }
  }

  @Action({ rawError: true })
  public LogOut() {
    AppModule.SET_USER(null);
    AppModule.SET_IS_SIGNED_IN(false);
  }

  @Action({ rawError: true })
  public async loadCommon(): Promise<void> {
    await this.loadTopics();
  }

  @Action({ rawError: true })
  public async loadTopics(): Promise<void> {
    if (this.allTopics.length > 0) {
      return;
    }
    const promise = new Promise<void>(async (resolve, reject) => {
      const topics = await Repository.GetAllTopics();

      console.log(topics);
      console.log(typeof(topics));
      console.log(topics[0])

      this.SET_TOPICS(topics);

      resolve();
    });

    await promise;
  }

  @Action({ rawError: true })
  public async getArticlesForTenant(topicId: string): Promise<Article[]> {
    return Repository.GetArticleByTopicId(topicId);
  }
}

export const AppModule = getModule<App>(App);
