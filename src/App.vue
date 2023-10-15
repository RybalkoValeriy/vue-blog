<template>
  <div id="app">
    <nav class="container navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href=""
        ><img ref="./../public/blog.png" /><img
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
          <router-link to="/" class="nav-item nav-link">Topics</router-link>
          <router-link to="/Articles" class="nav-item nav-link"
            >Articles</router-link
          >
          <span v-if="isLoggedIn()">
            <router-link to="/Profile" class="nav-link"
              >Profile:{{ currentUser?.name }}</router-link
            >
          </span>
          <span>
            <router-link to="/Login" class="nav-link">Login</router-link>
          </span>
        </div>
      </div>
    </nav>
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
  public currentUser: User | null = null;

  public async created() {
    this.currentUser = AppModule.user;
    await Promise.all([AppModule.InitAppState()]);
  }

  public isLoggedIn(): boolean {
    return this.currentUser !== null;
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
