<template>
  <div>
    <h2>Articles {{ topicId == "" ? "" : "for topic: " + topicId }}</h2>
    <BSpinner v-if="isLoading" variant="success"></BSpinner>
    
    <div>
      <BFormCheckbox
      v-if="isSignedUser"
      :change = "myArticles"
      >
       Show only my articles
    </BFormCheckbox>
    </div>
    
    <BListGroup v-for="article in articles" :key="article.id">
      <BListGroupItem>
        {{ article.name }}
      </BListGroupItem>
    </BListGroup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Article } from "../../core/models/Article";
import { AppModule } from '../store/modules/app';
import { BFormCheckbox } from "bootstrap-vue";

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

  public get myArticles() {
    return AppModule.isSignedIn
    ? this.articles.filter(x => x.authorId === AppModule.user?.id)
    : this.articles;
  }

  public get isSignedUser(){
    return AppModule.isSignedIn;
  }

}
</script>

<style scoped lang="scss"></style>
