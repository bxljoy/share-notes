import { model, models, Schema, Model } from "mongoose";
import { INote } from "@/interfaces/note";

const noteSchema = new Schema<INote>({
  creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
  note: { type: String, required: [true, "Note is required."] },
  tag: { type: String, required: [true, "Tag is required."] },
});

const Note: Model<INote> = models.Note && model<INote>("Note", noteSchema);

export default Note;
