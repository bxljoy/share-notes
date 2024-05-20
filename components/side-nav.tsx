import Link from "next/link";
import { dancingScript } from "@/styles/fonts";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col bg-blue-600 md:px-2">
      <Link className="m-6" href="/">
        <div className={`${dancingScript.className} text-white text-3xl`}>
          Share Notes
        </div>
      </Link>
    </div>
  );
}
