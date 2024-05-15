import { auth } from "@/auth";
import { SignIn, SignOut } from "./auth-components";
import Image from "next/image";

export default async function UserButton() {
  const session = await auth();
  if (!session?.user) return <SignIn />;
  return (
    <div className="flex gap-2 items-center">
      <span className="hidden text-sm sm:inline-flex">
        {session.user.email}
      </span>
      <div>
        <Image
          src={
            session.user.image ?? "https://source.boringavatars.com/marble/120"
          }
          alt={session.user.name ?? ""}
          width={30}
          height={30}
        />
      </div>
      <div>{session.user.name ?? ""}</div>
      <div>
        <SignOut />
      </div>
    </div>
  );
}
