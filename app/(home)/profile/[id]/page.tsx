"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@/components/profile";

const UserProfile = ({ params }: { params: { id: string } }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userNotes, setUserNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch(`/api/users/${params?.id}/notes`);
      const data = await response.json();

      setUserNotes(data);
    };

    if (params?.id) fetchNotes();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional notes and be inspired by the power of their imagination`}
      data={userNotes}
    />
  );
};

export default UserProfile;
