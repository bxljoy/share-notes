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
  const [allNotes, setAllNotes] = useState<NoteContent[]>([]);
  const [searchedResults, setSearchedResults] = useState<NoteContent[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const fetchNotes = async () => {
    const response = await fetch("/api/note");
    const data = await response.json();
    console.log(data);
    setAllNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const filterNotes = (searchText: string) => {
    const filteredNotes = allNotes.filter((note: NoteContent) => {
      return (
        note.note.toLowerCase().includes(searchText.toLowerCase()) ||
        note.tag.toLowerCase().includes(searchText.toLowerCase()) ||
        note.creator.username
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        note.creator.email.toLowerCase().includes(searchText.toLowerCase())
      );
    });

    setSearchedResults(filteredNotes);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        filterNotes(e.target.value);
      }, 500)
    );
  };

  const handleTagClick = (tag: string) => {
    setSearchText(tag);

    filterNotes(tag);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterNotes(searchText);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a tag or a username or a note or an email"
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
