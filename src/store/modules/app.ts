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

  @Mutation
  private SET_USER(user: User): void {
    this.user = user;
  }

  @Mutation
  SET_TOPICS(topics: Topic[]): void {
    this.allTopics = topics;
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
  public async InitAppState(): Promise<void> {
    const topicPromise = this.loadTopics();

    await Promise.all([topicPromise]);
  }

  @Action({ rawError: true })
  public async loadTopics(): Promise<void> {
    const promise = new Promise<void>(async (resolve, reject) => {
      const topics = await Repository.GetAllTopics();
      this.SET_TOPICS(topics);

      resolve();
    });

    await promise;
  }

  public async GetT(): Promise<Topic[]> {
    const t = await Repository.GetAllTopics();
    return t;
  }
}

export const AppModule = getModule<App>(App);
