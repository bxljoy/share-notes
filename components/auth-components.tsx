import { signIn, signOut } from "@/auth";
import { Button } from "./ui/button";

export function SignIn({ provider }: { provider?: string }) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <Button className="hover:opacity-70">Log In</Button>
    </form>
  );
}

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="w-full"
    >
      <Button className="black_btn">Sign Out</Button>
    </form>
  );
}
