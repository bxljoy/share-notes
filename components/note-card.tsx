import { NoteCardProps } from "@/utils/definitions";

export default function NoteCard({ note, handleTagClick }: NoteCardProps) {
  return (
    <section className="w-full flex-center flex-col">
      <div>{note.note}</div>
    </section>
  );
}
