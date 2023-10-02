<template>
  <div>
    <b-form @submit="onLogin" v-if="Show">
      <b-form-group
        label="User login:"
        description="Could you please input your login"
      >
        <b-from-input 
        placeholder="Enter your login" 
        required> </b-from-input>
        <b-from-input
          placeholder="Enter your password"
          type="password"
          required
        >
        </b-from-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "Registraion",
  // components:{
  //     some my components that imported
  // }
})
export default class Registration extends Vue {
  @Prop() public UserLogin: string = "";
  @Prop() public UserPassword: string = "";
  @Prop() public Show: boolean = true;

  public onLogin() {
    console.log("onLogin");
  }
}
</script>
