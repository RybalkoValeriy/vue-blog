<template>
  <div>
    <h2>Topics:</h2>
    <div>
      <ul>
        <li v-for="(topic, index) in topics" :key="index">
          {{ index }}{{ topic.id }} {{ topic.name }}
        </li>
      </ul>
      <button @click="click">button</button>
    </div>
  </div>
</template>

<script lang="ts">
import { AppModule } from "@/store/modules/app";
import { Repository } from "core/services/Repository";
import { Component, Prop, Vue } from "vue-property-decorator";
import { Topic } from "../../core/models/Topic";

@Component({
  name: "Topics",
})
export default class Topics extends Vue {
  public topics: Topic[] = [];

  public created() {
    this.topics = AppModule.allTopics;
    console.log(this.topics);
  }

  public async click() {
    const t = await AppModule.GetT();
    this.topics = t;
    console.log(this.topics);
  }
}
</script>
