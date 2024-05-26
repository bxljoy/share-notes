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
  image?: string;
};

export interface NoteCardListProps {
  data: Array<NoteContent>;
  handleTagClick: (tag: string) => void;
}

export interface NoteCardProps {
  note: NoteContent;
  handleTagClick: (tag: string) => void;
  handleEdit: (note: NoteContent) => void;
  handleDelete: (note: NoteContent) => void;
}
