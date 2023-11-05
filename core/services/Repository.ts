import axios from "axios";
import { Article } from "../models/Article";
import { Topic } from "../models/Topic";

export class Repository {
  public static async GetAllTopics(): Promise<Topic[]> {
    const url = "/api/v1/topics";
    const response = await axios.get<Array<Topic>>(url);
    
    return response.data;
  }

  public static async GetArticleByTopicId(topicId: string): Promise<Article[]> {
    const url = `/api/v1/articles/${topicId}`;
    const response = await axios.get<Article[]>(url);
    
    return response.data;
  }
}
