<template>
  <div>
    <b-container fluid>
      <b-row></b-row>
    </b-container>
    <b-button @click="createTopic">Create a new Topic</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Guid } from "guid-typescript";
import { Topic } from "../../core/models/Topic";
import { AppModule } from "../store/modules/app";
@Component({
  name: "CreateTopic",
})
export default class CreateTopic extends Vue {

  public async createTopic() {
    console.log('create topic');
    
    const topic = {
      id: Guid.create(),
      name: "Some name",
      authorId: Guid.parse("2713f07d-8385-4af9-9536-fd25c093c38e"),
    } as Topic;

    var topicId = await AppModule.CreateTopic(topic);

    console.log('this is result');
    console.log(topicId);
  }
}
</script>
