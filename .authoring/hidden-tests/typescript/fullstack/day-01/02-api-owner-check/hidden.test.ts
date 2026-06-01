import { describe, it, expect } from 'vitest';
import { updateNote, type Note } from '../../../../../../solutions/user/typescript/fullstack/day-01/02-api-owner-check/solution';

const mockNote: Note = { id: 'note-1', ownerId: 'user-A', content: 'original' };
const findNote = (id: string): Note | undefined =>
  id === 'note-1' ? mockNote : undefined;
const saveNote = (note: Note): Note => ({ ...note });

describe('updateNote - 보안 검증 (hidden)', () => {
  it('다른 사용자가 body.userId를 위조해도 수정이 거부된다', () => {
    const result = updateNote(
      { noteId: 'note-1', userId: 'user-A', content: 'hacked' },
      { id: 'user-B' },
      findNote,
      saveNote,
    );
    expect(result.ok).toBe(false);
    expect(result.error).toBe('forbidden');
  });

  it('인증된 사용자 id가 소유자와 일치하면 수정된다', () => {
    const result = updateNote(
      { noteId: 'note-1', userId: 'user-A', content: 'legit update' },
      { id: 'user-A' },
      findNote,
      saveNote,
    );
    expect(result.ok).toBe(true);
    expect(result.data?.content).toBe('legit update');
  });

  it('소유자가 요청하면 body.userId가 다른 값이어도 수정된다', () => {
    const result = updateNote(
      { noteId: 'note-1', userId: 'user-B', content: 'body userId is ignored' },
      { id: 'user-A' },
      findNote,
      saveNote,
    );
    expect(result.ok).toBe(true);
  });
});
