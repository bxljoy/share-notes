import { connectDatabase } from "@/utils/database";
import Note from "@/models/note";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    const { id } = params;
    await connectDatabase();

    const note = await Note.findById(id).populate("creator");
    if (!note) return new Response("Note Not Found", { status: 404 });
    return new Response(JSON.stringify(note), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error fetching note created by user", {
      status: 500,
    });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    const { id } = params;
    const data = (await request.json()) as { note: string; tag: string };

    await connectDatabase();

    const note = await Note.findByIdAndUpdate(id, data, { new: true });
    if (!note) return new Response("Note Not Found", { status: 404 });

    return new Response(JSON.stringify(note), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error updating note", { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    const { id } = params;
    await connectDatabase();

    const note = await Note.findByIdAndDelete(id);
    if (!note) return new Response("Note Not Found", { status: 404 });

    return new Response(JSON.stringify(note), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error deleting note", { status: 500 });
  }
}
