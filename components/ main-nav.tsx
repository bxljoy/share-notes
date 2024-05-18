import Link from "next/link";
import { SquarePen } from "lucide-react";

export default function NavBar() {
  return (
    <Link
      href="/create-note"
      className="dropdown_link p-2 hover:bg-slate-200 rounded-md"
    >
      <SquarePen />
    </Link>
  );
}
