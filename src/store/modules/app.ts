import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule,
} from "vuex-module-decorators";
import { IUser } from "../../../core/model/User";
import { UserService } from "../../../core/services/UserService";

import store from "@/store";
import Vue from "vue";

export interface IAppState {
  user: IUser | null;
}

@Module({ dynamic: true, store, name: "app" })
class App extends VuexModule implements IAppState {
  public user: IUser | null = null;

  @Mutation
  private SET_USER(user: IUser): void {
    this.user = user;
  }

  @Action
  public async LogIn(user: IUser): Promise<void> {
    const userExists = await UserService.loginUser(user);

    if (userExists) {
      this.SET_USER(userExists);
    }
  }
}

export const AppModule = getModule<App>(App);
