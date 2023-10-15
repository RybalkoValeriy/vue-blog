<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article">{{ article }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Articles extends Vue {
  public articles: string[] = [];
}
</script>

<style scoped lang="scss"></style>
