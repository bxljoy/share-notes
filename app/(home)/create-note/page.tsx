"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@/components/form";
import { NoteContent } from "@/utils/definitions";

export default function CreateNote() {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [note, setNote] = useState({
    note: "",
    tag: "",
  } as NoteContent);

  const createNote = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/note/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          note: note.note,
          tag: note.tag,
          userId: session?.user?.id,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      note={note}
      setNote={setNote}
      submitting={submitting}
      handleSubmit={createNote}
    />
  );
}
