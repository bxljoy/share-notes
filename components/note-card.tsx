import { NoteCardProps } from "@/utils/definitions";

export default function NoteCard({ note, handleTagClick }: NoteCardProps) {
  return (
    <section className="w-full flex-start flex-col">
      <div>{note.note}</div>
      <div>#{note.tag}</div>
      <div>Create By: {note.creator.username}</div>
    </section>
  );
}
