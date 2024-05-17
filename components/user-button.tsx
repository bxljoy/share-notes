import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { auth } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { SignIn } from "./auth-components";
import CustomLink from "./custom-link";
import { LogOut, Settings, CircleUserRound, Podcast } from "lucide-react";

export default async function UserButton() {
  const session = await auth();
  if (!session?.user) return <SignIn />;
  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="w-10 h-10 hover:cursor-pointer">
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
        <DropdownMenuContent
          className="min-w-[260px] min-h-[240px] bg-white rounded-2xl p-[5px] m-6 flex flex-col justify-between shadow-lg"
          sideOffset={5}
        >
          <DropdownMenuLabel className="font-bold text-center">
            <div className="flex flex-col space-y-1 text-violet11">
              <p className="text-sm font-medium leading-none">
                {session.user.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem className="group text-xl leading-2 text-violet11 rounded-lg flex items-center gap-3 hover:bg-violet9 hover:text-violet1 hover:rounded-lg">
            <CircleUserRound />
            <CustomLink href="/account">Account</CustomLink>
          </DropdownMenuItem>
          <DropdownMenuItem className="group text-xl leading-2 text-violet11 rounded-lg flex items-center gap-3 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 hover:rounded-lg">
            <Settings />
            <CustomLink href="/settings">Settings</CustomLink>
          </DropdownMenuItem>
          <DropdownMenuItem className="group text-xl leading-2 text-violet11 rounded-lg flex items-center gap-3 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 hover:rounded-lg">
            <Podcast />
            <CustomLink href="/subscription">Subscription</CustomLink>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="h-[1px] bg-violet6 m-[5px]" />
          <DropdownMenuItem className="group text-xl leading-2 text-violet11 rounded-lg flex items-center gap-3 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 hover:rounded-lg">
            <LogOut />
            <CustomLink href="/api/auth/signout">Sign Out</CustomLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
