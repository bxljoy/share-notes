import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignUp() {
  return (
    <Link href="/signup">
      <Button className="black_btn">Sign Up</Button>
    </Link>
  );
}
