import axios from "axios";
import { IUser } from "../model/User";

export class UserService {
  public static async loginUser(user: IUser): Promise<IUser> {
    const url = "/api/login";
    const response = await axios.post(url, user);

    return response.data;
  }
}
