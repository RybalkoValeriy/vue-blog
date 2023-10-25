import axios from "axios";
import { Article } from "../models/Article";
import { Topic } from "../models/Topic";

export class Repository {
  public static async GetAllTopics(): Promise<Topic[]> {
    const url = "/api/topics";
    const response = await axios.get<Topic[]>(url);
    return response.data;
  }

  public static async GetArticleByTopicId(topicId: string): Promise<Article[]> {
    const url = `api/articles?topicId=${topicId}`;
    const response = await axios.get<Article[]>(url);
    return response.data;
  }
}
