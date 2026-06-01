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

export function updateNote(
  body: UpdateNoteBody,
  authUser: AuthUser,
  findNote: FindNote,
  saveNote: SaveNote,
): ApiResult {
  const note = findNote(body.noteId);
  if (!note) {
    return { ok: false, error: 'not_found' };
  }
  if (note.ownerId !== authUser.id) {
    return { ok: false, error: 'forbidden' };
  }
  const updated = saveNote({ ...note, content: body.content });
  return { ok: true, data: updated };
}
