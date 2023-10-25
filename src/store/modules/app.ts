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
  private SET_USER(user: User): void {
    this.user = user;
  }

  @Mutation
  private SET_TOPICS(topics: Topic[]): void {
    this.allTopics = topics;
  }

  @Mutation
  private SET_TOPICS_PROMISE(promise: Promise<void> | null): void {
    this.allTopicsPromise = promise;
  }

  @Action({ rawError: true })
  public async LogIn(user: User): Promise<boolean> {
    const userExists = await UserService.loginUser(user);

    if (userExists) {
      AppModule.SET_USER(userExists);
      this.isSignedIn = true;
      return true;
    }

    return false;
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
}

export const AppModule = getModule<App>(App);
