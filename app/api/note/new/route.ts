import { connectDatabase } from "@/utils/database";
import Note from "@/models/note";

interface RequestData {
  note: string;
  tag: string;
  userId: string;
}

export async function POST(request: Request): Promise<void> {
  const data = (await request.json()) as RequestData;
  const { note, tag, userId } = data;

  try {
    await connectDatabase();

    await Note.create({
      note,
      tag,
    });
  } catch (error) {
    console.error(error);
  }
}
