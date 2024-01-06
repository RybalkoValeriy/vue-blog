import { Guid } from "guid-typescript";

export interface Topic {
  id: Guid;
  name: string;
  authorId: Guid;
}
