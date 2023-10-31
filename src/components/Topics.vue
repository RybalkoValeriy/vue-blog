<template>
  <div>
    <h2>Topics:</h2>
    <div>
      <BListGroup v-for="(topic, index) in topics" :key="index">
        <BListGroupItem :to="'/topic/' + topic.Id + '/articles'">
          {{ topic.Name }}
        </BListGroupItem>
      </BListGroup>
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
