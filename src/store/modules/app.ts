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

export interface IAppState {
  user: IUser | null;
  isSignedIn: boolean | false;
}

@Module({ dynamic: true, store: store, name: "app" })
class App extends VuexModule implements IAppState {
  public user: IUser | null = null;
  public isSignedIn: boolean | false = false;

  @Mutation
  private SET_USER(user: IUser): void {
    this.user = user;
  }

  @Action({ rawError: true })
  public async LogIn(user: IUser): Promise<boolean> {
    const userExists = await UserService.loginUser(user);

    if (userExists) {
      AppModule.SET_USER(userExists);
      this.isSignedIn = true;
      return true;
    }

    return false;
  }
}

export const AppModule = getModule<App>(App);
