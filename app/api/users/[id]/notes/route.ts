import { connectDatabase } from "@/utils/database";
import Note from "@/models/note";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    const { id } = params;
    await connectDatabase();

    const notes = await Note.find({ creator: id }).populate("creator");
    return new Response(JSON.stringify(notes), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error fetching notes created by user", {
      status: 500,
    });
  }
}
