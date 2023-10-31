<template>
  <h2>This is profile of user: {{ getCurrentUser()?.name }}</h2>
</template>

<script lang="ts">
import { AppModule } from "@/store/modules/app";
import { User } from "core/models/User";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Profile extends Vue {
  public getCurrentUser(): User | null {
    return AppModule.user;
  }
}
</script>
