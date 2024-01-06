import { Guid } from "guid-typescript";

export interface Article {
  id: Guid;
  topicId: Guid;
  authorId: Guid;
  name: string;
  body: string;
}
