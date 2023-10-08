<template>
  <div>
    <b-form @submit="onLogin" v-if="Show" inline>
      <b-form-group
        id="login"
        label="User login:"
        description="Could you please input your login"
      >
        <b-form-input
          placeholder="Enter your login"
          required
          v-model="UserLogin"
          class="mb-2 mr-sm-2 mb-sm-0"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group
        id="password"
        label="User password:"
        description="Could you please input your password"
      >
        <b-form-input
          placeholder="Enter your password"
          type="password"
          required
          v-model="UserPassword"
          class="mb-2 mr-sm-2 mb-sm-0"
        >
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import { AxiosError } from "axios";
import { Component, Vue } from "vue-property-decorator";
import { IUser } from "../../core/model/User";
import { AppModule } from "../store/modules/app";

@Component({
  name: "Login",
})
export default class Login extends Vue {
  public UserLogin = "";
  public UserPassword = "";
  public Show = true;

  public async onLogin() {
    try {
      const user = {
        name: this.UserLogin,
        password: this.UserPassword,
      } as IUser;
      await AppModule.LogIn(user);
    } catch (error: Error | any) {
      this.reset();

      // todo: continue exception handling
      this.$bvToast.toast(`${AxiosError}.`, {
        title: "Error",
        appendToast: true,
        autoHideDelay: 4000,
        variant: "danger",
      });
    }
  }

  private reset() {
    this.UserLogin = "";
    this.UserPassword = "";
    this.Show = true;
  }
}
</script>
