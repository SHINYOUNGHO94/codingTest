export interface AuthUser {
  id: string;
}

export interface Note {
  id: string;
  ownerId: string;
  content: string;
}

export interface UpdateNoteBody {
  noteId: string;
  userId: string;
  content: string;
}

export type FindNote = (id: string) => Note | undefined;
export type SaveNote = (note: Note) => Note;

export interface ApiResult {
  ok: boolean;
  data?: Note;
  error?: string;
}

// TODO: starter.ts의 updateNote 버그를 찾아 여기에서 수정하세요.
export function updateNote(
  body: UpdateNoteBody,
  authUser: AuthUser,
  findNote: FindNote,
  saveNote: SaveNote,
): ApiResult {
  throw new Error('Not implemented');
}
