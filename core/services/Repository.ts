import axios from "axios";
import { Article } from "../models/Article";
import { Topic } from "../models/Topic";

export class Repository {
  public static async GetAllTopics(): Promise<Topic[]> {
    const url = "/api/topics";
    const response = await axios.get(url);
    return response.data;
  }
}
