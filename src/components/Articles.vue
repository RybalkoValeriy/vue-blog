<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article.Id">
        {{ article.Name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Article } from '../../core/models/Article';

@Component({
  name:"Articles"
})
export default class Articles extends Vue {
  public articles: Article[] = [];
}
</script>

<style scoped lang="scss"></style>
