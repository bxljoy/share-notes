import { Document } from "mongoose";
import { IUser } from "@/interfaces/user";

export interface INote extends Document {
  creator: IUser["_id"];
  note: string;
  userId: string;
  tag: string;
}
