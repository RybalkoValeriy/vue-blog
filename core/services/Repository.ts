import axios, { AxiosResponse } from "axios";
import { Article } from "../models/Article";
import { Topic } from "../models/Topic";
import { Guid } from "guid-typescript";

export class Repository {
  public static async GetAllTopics(): Promise<Topic[]> {
    const url = "query/api/v1/topics";
    const response = await axios.get<Array<Topic>>(url);

    return response.data;
  }

  public static async GetArticleByTopicId(topicId: string): Promise<Article[]> {
    const url = `query/api/v1/articles/${topicId}`;
    const response = await axios.get<Article[]>(url);

    return response.data;
  }

  public static async GetTopicById(topicId: Guid): Promise<Topic> {
    const url = `query/api/v1/topics/${topicId}`;
    const response = await axios.get<Topic>(url);

    return response.data;
  }

  public static async CreateTopic(topic: Topic): Promise<AxiosResponse> {
    const url = "command/api/v1/newtopic";

    const response =  await axios.post(url, {
      id: topic.id.toString(),
      name: topic.name,
      authorId: topic.authorId.toString(),
    });

    return response;
  }
}
