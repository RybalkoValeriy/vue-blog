import { Component, Vue } from 'vue-property-decorator';
<template>
    <div>
        <h2>{{ article?.Name }}</h2>
        <b-form-textarea
        plaintext :value:="article?.Body"
        placeholder="Enter something..."
        >

        </b-form-textarea>
    </div>
</template>

<script lang="ts">
import { Article } from "core/models/Article";
import { Component } from "vue-property-decorator";
import Vue from "vue/types/umd";

@Component({
  name: "ArticleDetail",
})
export default class ArticleDetail extends Vue {
  public article: Article | null = null;
}
</script>
