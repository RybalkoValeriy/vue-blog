<template>
  <div>
    <h2>Topics:</h2>
    <div>
      <BListGroup v-for="(topic, index) in topics" :key="index">
        <BListGroupItem :to="'/topic/' + topic.id + '/articles'">
          {{ topic.name }}
        </BListGroupItem>
      </BListGroup>
    </div>
    <div>
      <b-button 
        to = "/createTopic" 
        variant="outline-primary">Create a new Topic</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { AppModule } from "@/store/modules/app";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Topics",
})
export default class Topics extends Vue {
  public get topics() {
    return AppModule.allTopics;
  }
}
</script>
