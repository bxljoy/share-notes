import SideNav from "@/components/side-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign Up Page.",
};

export default function SignUp() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-96">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <div className="w-full flex-center flex-col">
          <h1 className="head_text text-center">Sign Up</h1>
        </div>
      </div>
    </div>
  );
}
