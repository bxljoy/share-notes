"use client";

import NoteCard from "./note-card";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Feed() {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input"
        />
      </form>
    </section>
  );
}
