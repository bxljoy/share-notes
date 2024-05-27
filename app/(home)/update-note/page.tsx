"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@/components/form";
import { NoteContent } from "@/utils/definitions";

export default function UpdateNote() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const noteId = searchParams.get("id");

  const [note, setNote] = useState({ note: "", tag: "" } as NoteContent);
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getNoteDetails = async () => {
      const response = await fetch(`/api/note/${noteId}`);
      const data = await response.json();

      setNote(data);
    };

    if (noteId) getNoteDetails();
  }, [noteId]);

  const updateNote = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!noteId) return alert("Missing NoteId!");

    try {
      const response = await fetch(`/api/note/${noteId}`, {
        method: "PATCH",
        body: JSON.stringify({
          note: note.note,
          tag: note.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      note={note}
      setNote={setNote}
      submitting={submitting}
      handleSubmit={updateNote}
    />
  );
}
