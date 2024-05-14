import { signIn, signOut } from "@/auth";

export function SignIn({ provider }: { provider?: string }) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <button
        type="button"
        onClick={() => signIn(provider)}
        className="black_btn"
      >
        Sign In
      </button>
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
      <button type="button" onClick={() => signOut()} className="black_btn">
        Sign Out
      </button>
    </form>
  );
}
