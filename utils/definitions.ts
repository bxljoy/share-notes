export type NoteContent = {
  note: string;
  tag: string;
};

export interface NoteCardListProps {
  data: Array<NoteContent>;
  handleTagClick: (tag: string) => void;
}

export interface NoteCardProps {
  note: NoteContent;
  handleTagClick: (tag: string) => void;
}
