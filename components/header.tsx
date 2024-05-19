import UserButton from "./user-button";
import NavBar from "./ main-nav";
import Link from "next/link";
import { dancingScript } from "@/styles/fonts";

export default function Header() {
  return (
    <header className=" w-screen flex justify-center p-5">
      <div className="flex items-center justify-between w-full h-16 px-4 mx-auto sm:px-6">
        <NavBar />
        <Link href="/">
          <div
            className={`${dancingScript.className} text-4xl text-black font-bold hover:cursor-pointer hover:opacity-70`}
          >
            Share Notes
          </div>
        </Link>
        <UserButton />
      </div>
    </header>
  );
}
