import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { auth } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { SignIn, SignOut } from "./auth-components";
import CustomLink from "./custom-link";

export default async function UserButton() {
  const session = await auth();
  if (!session?.user) return <SignIn />;
  return (
    <div className="flex gap-2 items-center">
      <span className="hidden text-sm sm:inline-flex">
        {session.user.email}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="w-8 h-8">
            <AvatarImage
              src={
                session.user.image ??
                "https://source.boringavatars.com/marble/120"
              }
              alt={session.user.name ?? ""}
            />
            <AvatarFallback className=" rounded-full bg-purple-400 font-bold">
              {session.user.name?.[0]}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session.user.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <CustomLink href="/profile">Profile</CustomLink>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CustomLink href="/profile/settings">Settings</CustomLink>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CustomLink href="/profile/subscription">Subscription</CustomLink>
          </DropdownMenuItem>
          <DropdownMenuLabel className="font-normal">Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <CustomLink href="/api/auth/signout" className="">
              Sign Out
            </CustomLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
