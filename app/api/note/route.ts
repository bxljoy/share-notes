import { connectDatabase } from "@/utils/database";
import Note from "@/models/note";

export async function GET(request: Request): Promise<Response> {
  try {
    await connectDatabase();

    const notes = await Note.find({}).populate("creator");
    return new Response(JSON.stringify(notes), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error fetching notes", { status: 500 });
  }
}
