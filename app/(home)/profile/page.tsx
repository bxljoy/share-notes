"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Profile from "@/components/profile";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Profile
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Notes</span>
      </h1>
      <div className="desc text-center">
        <Profile name={session?.user?.name} />
      </div>
    </section>
  );
}
