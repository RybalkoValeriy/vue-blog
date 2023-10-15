import axios from "axios";
import { User } from "../models/User";
import { Article } from "../models/Article";

export class UserService {
  public static async loginUser(user: User): Promise<User> {
    const url = "/api/login";
    const response = await axios.post(url, user);

    return response.data;
  }

  public static async getUserArticles(userId: string): Promise<Article[]> {
    const url = `/api/articles/${userId}`;
    const response = await axios.get(url);

    return response.data;
  }
}
