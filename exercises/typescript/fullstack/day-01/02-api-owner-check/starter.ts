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

/**
 * 노트를 수정하는 API 핸들러입니다.
 * authUser는 인증 미들웨어가 토큰을 검증한 뒤 주입한 실제 사용자 정보입니다.
 *
 * 이 함수에는 보안 버그가 있습니다. 버그를 찾아 solution.ts에서 수정하세요.
 */
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
  if (note.ownerId !== body.userId) {
    return { ok: false, error: 'forbidden' };
  }
  const updated = saveNote({ ...note, content: body.content });
  return { ok: true, data: updated };
}
