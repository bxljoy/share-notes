import Link from "next/link";
import { SquarePen } from "lucide-react";

export default function NavBar() {
  return (
    <div className="flex flex-row items-center justify-between gap-10 lg:pr-40">
      <Link
        href="/create-note"
        className="dropdown_link p-2 hover:bg-slate-200 rounded-md"
      >
        <SquarePen />
      </Link>
      <Link href="/server" className="text-2xl font-bold hover:opacity-60">
        Server
      </Link>
      <Link
        href="/middleware-example"
        className="text-2xl font-bold hover:opacity-60"
      >
        Middleware Example
      </Link>
    </div>
  );
}
