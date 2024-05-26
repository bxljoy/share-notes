export type NoteContent = {
  _id: string;
  note: string;
  tag: string;
  creator: UserContent;
};

export type UserContent = {
  _id: string;
  username: string;
  email: string;
};

export interface NoteCardListProps {
  data: Array<NoteContent>;
  handleTagClick: (tag: string) => void;
}

export interface NoteCardProps {
  note: NoteContent;
  handleTagClick: (tag: string) => void;
}
