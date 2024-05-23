import { model, models, Schema } from "mongoose";
import { INote } from "@/interfaces/note";

const noteSchema = new Schema<INote>({
  creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
  note: { type: String, required: [true, "Note is required."] },
  userId: { type: String, required: true },
  tag: { type: String, required: true },
});

const NoteModel = model<INote>("Note", noteSchema);

export default NoteModel;
