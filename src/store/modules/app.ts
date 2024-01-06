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
import axios from "axios";
import { Guid } from "guid-typescript";

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
  private pollingInterval?: number;

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

  @Mutation
  private SET_INTERVAL(interval: number): void {
    this.pollingInterval = interval;
  }

  @Mutation
  private CLEAR_INTERVAL(): void {
    window.clearInterval(this.pollingInterval)
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
      this.SET_TOPICS(topics);

      resolve();
    });

    await promise;
  }

  @Action({ rawError: true })
  public async CreateTopic(topic: Topic): Promise<string> {
    const response = await Repository.CreateTopic(topic);
    if (response.status === 202) {
      console.log(response);
      this.startPulling(response.data);
    }
    return response.data;
  }

  @Action({ rawError: true })
  public async getArticlesForTopic(topicId: string): Promise<Article[]> {
    return Repository.GetArticleByTopicId(topicId);
  }

  @Action({ rawError: true })
  public async startPulling(id: string): Promise<void> {
    if (this.pollingInterval) {
      this.CLEAR_INTERVAL()
    }

    await this.SET_INTERVAL(
      window.setInterval(async () => {
        const topic = await Repository.GetTopicById(Guid.parse(id));
        if (topic) {
          console.log("Topic is created");
          if (this.pollingInterval) {
            this.CLEAR_INTERVAL()
          }
        }
        console.log("Topic is not created");
      }, 5000)
    );
  }
}

export const AppModule = getModule<App>(App);
