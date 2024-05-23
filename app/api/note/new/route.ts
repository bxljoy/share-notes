import { Note } from "@/utils/definitions";
import { connectDatabase } from "@/utils/database";
import NoteModel from "@/models/note";

interface RequestData {
  note: Note;
  tag: string;
  userId: string;
}

export async function POST(request: Request): Promise<void> {
  const data = (await request.json()) as RequestData;
  const { note, tag, userId } = data;

  try {
    await connectDatabase();

    await NoteModel.create({
      note,
      tag,
      userId,
    });
  } catch (error) {
    console.error(error);
  }
}
