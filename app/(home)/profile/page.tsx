"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { NoteContent } from "@/utils/definitions";

import Profile from "@/components/profile";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();

  const [myNotes, setMyNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch(`/api/users/${session?.user?.id}/notes`);
      const data = await response.json();

      setMyNotes(data);
    };

    if (session?.user?.id) fetchNotes();
  }, [session?.user?.id]);

  const handleEdit = (note: NoteContent) => {
    router.push(`/update-note?id=${note._id}`);
  };

  const handleDelete = async (note: NoteContent) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/note/${note._id.toString()}`, {
          method: "DELETE",
        });

        const filteredNotes = myNotes.filter(
          (item: NoteContent) => item._id !== note._id
        );

        setMyNotes(filteredNotes);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
      data={myNotes}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}
