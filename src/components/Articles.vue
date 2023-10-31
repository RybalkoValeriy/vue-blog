<template>
  <div>
    <h2>Articles {{ topicId == "" ? "" : "for topic: " + topicId }}</h2>
    <BSpinner v-if="isLoading" variant="success" label="Spinning"></BSpinner>

    <BListGroup v-for="article in articles" :key="article.Id">
      <BListGroupItem>
        {{ article.Name }}
      </BListGroupItem>
    </BListGroup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Article } from "../../core/models/Article";
import { AppModule } from "../store/modules/app";

@Component({
  name: "Articles",
})
export default class Articles extends Vue {
  public topicId = "";
  public articles: Article[] = [];
  public isLoading = false;

  public async created() {
    this.isLoading = true;
    const segments = this.$route.path.split("/");

    if (segments.length >= 3) {
      this.topicId = segments[2];
      this.articles = await AppModule.getArticlesForTenant(this.topicId);
      this.isLoading = false;
    }
  }
}
</script>

<style scoped lang="scss"></style>
