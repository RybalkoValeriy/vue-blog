<template>
  <div id="app">
    <Nav class="container navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href=""
        ><img ref="./../public/blog.png" /><img
      /></a>
      <BButton
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </BButton>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
          <RouterLink to="/" class="nav-item nav-link">Topics</RouterLink>
          <RouterLink to="/Articles" class="nav-item nav-link"
            >Articles</RouterLink
          >
          <RouterLink
            v-if="isLoggedIn()"
            to="/Profile"
            class="nav-item nav-link"
            >{{ getCurrentUser()?.name }}</RouterLink
          >
          <span v-if="isLoggedIn() == false">
            <RouterLink to="/Login" class="nav-link">Login</RouterLink>
          </span>
          <span v-if="isLoggedIn()">
            <BButton @click="OnLogOut()">LogOut </BButton>
          </span>
        </div>
      </div>
    </Nav>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AppModule } from "./store/modules/app";
import { User } from "core/models/User";

@Component({
  name: "App",
})
export default class App extends Vue {
  public async created() {
    await AppModule.loadCommon();
  }

  public isLoggedIn(): boolean {
    return AppModule.isSignedIn;
  }

  public getCurrentUser(): User | null {
    return AppModule.user;
  }

  public OnLogOut(): void {
    AppModule.LogOut();
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
