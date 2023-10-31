<template>
  <div>
    <h2>Articles {{ topicId == '' ? '':'for topic: '+ topicId }}</h2>
    <ul>
      <li v-for="article in articles" :key="article.Id">
        {{ article.Name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Article } from "../../core/models/Article";
import { Repository } from '../../core/services/Repository';
import { AppModule } from '../store/modules/app';

@Component({
  name: "Articles",
})
export default class Articles extends Vue {
  public topicId = '';
  public articles: Article[] = [];

  public async created() {
    const segments = this.$route.path.split("/");

    if (segments.length >= 3) {
      this.topicId = segments[2];
      this.articles = await AppModule.getArticlesForTenant(this.topicId);
    }

    
  }
}
</script>

<style scoped lang="scss"></style>
