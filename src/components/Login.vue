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
import axios from "axios";
import { User } from "../../core/models/User";
import { Component, Vue } from "vue-property-decorator";
import { AppModule } from "../store/modules/app";
import { BaseApiError } from "../../core/errors/BaseApiError";

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
      } as User;

      await AppModule.LogIn(user);
      // todo: add redirect to main page?
    } catch (error: Error | any) {
      this.reset();
      // todo: add check status code
      if (
        axios.isAxiosError<BaseApiError, Record<string, unknown>>(error) &&
        error.status !== 200
      ) {
        this.$bvToast.toast(`${error.response?.data.message}.`, {
          title: "Error",
          appendToast: true,
          autoHideDelay: 4000,
          variant: "danger",
        });
      }
    }
  }

  private reset() {
    this.UserLogin = "";
    this.UserPassword = "";
    this.Show = true;
  }
}
</script>
