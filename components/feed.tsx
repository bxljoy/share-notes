"use client";

import NoteCard from "./note-card";
import { useState, useEffect } from "react";
import { NoteContent, NoteCardListProps } from "@/utils/definitions";

const NoteCardList = ({ data, handleTagClick }: NoteCardListProps) => {
  return (
    <div className="mt-16 ">
      {data.map((note: NoteContent) => (
        <NoteCard
          key={note._id}
          note={note}
          handleTagClick={handleTagClick}
          handleEdit={() => {}}
          handleDelete={() => {}}
        />
      ))}
    </div>
  );
};

export default function Feed() {
  const [allNotes, setAllNotes] = useState([]);
  const [searchedResults, setSearchedResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchNotes = async () => {
    const response = await fetch("/api/note");
    const data = await response.json();
    console.log(data);
    setAllNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleTagClick = (tag: string) => {
    setSearchText(tag);
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

      {/* All Notes */}
      {searchText ? (
        <NoteCardList data={searchedResults} handleTagClick={handleTagClick} />
      ) : (
        <NoteCardList data={allNotes} handleTagClick={handleTagClick} />
      )}
    </section>
  );
}
