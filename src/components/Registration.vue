<template>
  <div>
    <b-form @submit="onLogin" v-if="Show">
      <b-form-group
        id="login"
        label="User login:"
        description="Could you please input your login"
      >
        <b-form-input
          placeholder="Enter your login"
          required
          v-model="UserLogin"
        >
        </b-form-input>
        <b-form-input
          placeholder="Enter your password"
          type="password"
          required
          v-model="UserPassword"
        >
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IUser } from "../../core/model/User";
import { AppModule } from "../store/modules/app";

@Component({
  name: "Registraion",
})
export default class Registration extends Vue {
  public UserLogin = "";
  public UserPassword = "";
  public Show = true;

  public async onLogin():Promise<void> {
    const user = {name:this.UserLogin,password:this.UserPassword} as IUser;
    await AppModule.LogIn(user);
  }
}
</script>
