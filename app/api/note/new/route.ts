import { connectDatabase } from "@/utils/database";
import Note from "@/models/note";

interface RequestData {
  note: string;
  tag: string;
  userId: string;
}

export async function POST(request: Request): Promise<Response> {
  const data = (await request.json()) as RequestData;
  const { note, tag, userId } = data;

  try {
    await connectDatabase();

    const newNote = new Note({
      creator: userId,
      note,
      tag,
    });
    await newNote.save();

    return new Response(JSON.stringify(newNote), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Error creating note", { status: 500 });
  }
}
