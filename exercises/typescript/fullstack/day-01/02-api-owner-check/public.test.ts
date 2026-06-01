import { describe, it, expect } from 'vitest';
import {
  updateNote,
  type Note,
} from '../../../../../solutions/user/typescript/fullstack/day-01/02-api-owner-check/solution';

const mockNote: Note = { id: 'note-1', ownerId: 'user-A', content: 'original' };
const findNote = (id: string): Note | undefined =>
  id === 'note-1' ? mockNote : undefined;
const saveNote = (note: Note): Note => ({ ...note });

describe('updateNote', () => {
  it('소유자가 자신의 노트를 수정할 수 있다', () => {
    const result = updateNote(
      { noteId: 'note-1', userId: 'user-A', content: 'updated' },
      { id: 'user-A' },
      findNote,
      saveNote,
    );
    expect(result.ok).toBe(true);
    expect(result.data?.content).toBe('updated');
  });

  it('존재하지 않는 노트는 not_found를 반환한다', () => {
    const result = updateNote(
      { noteId: 'missing', userId: 'user-A', content: 'x' },
      { id: 'user-A' },
      findNote,
      saveNote,
    );
    expect(result.ok).toBe(false);
    expect(result.error).toBe('not_found');
  });
});
