import { NoteCardProps } from "@/utils/definitions";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function NoteCard({
  note,
  handleTagClick,
  handleEdit,
  handleDelete,
}: NoteCardProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const pathName = usePathname();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    console.log(note);

    if (note.creator._id === session?.user?.id) return router.push("/profile");

    router.push(`/profile/${note.creator._id}?name=${note.creator.username}`);
  };

  const handleCopy = () => {
    setCopied(note.note);
    navigator.clipboard.writeText(note.note);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <div className="note_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          <Image
            src={note.creator.image || "/assets/icons/user.svg"}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {note.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {note.creator.email}
            </p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === note.note
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt={copied === note.note ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700 text-wrap overflow-hidden">
        {note.note}
      </p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(note.tag)}
      >
        {note.tag}
      </p>

      {session?.user?.id === note.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={() => handleEdit(note)}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={() => handleDelete(note)}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
}
