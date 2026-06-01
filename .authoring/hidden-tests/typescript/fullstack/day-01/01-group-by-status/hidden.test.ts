import { describe, it, expect } from 'vitest';
import { groupByStatus } from '../../../../../../solutions/user/typescript/fullstack/day-01/01-group-by-status/solution';

describe('groupByStatus - edge cases (hidden)', () => {
  it('빈 배열을 받으면 세 키 모두 빈 배열을 반환한다', () => {
    expect(groupByStatus([])).toEqual({ todo: [], in_progress: [], done: [] });
  });

  it('같은 id가 같은 상태에 중복되면 첫 번째만 유지한다', () => {
    const items = [
      { id: 'dup', label: '첫 번째', status: 'todo' as const },
      { id: 'dup', label: '두 번째', status: 'todo' as const },
    ];
    const result = groupByStatus(items);
    expect(result.todo).toHaveLength(1);
    expect(result.todo[0].label).toBe('첫 번째');
  });

  it('같은 id가 다른 상태에 중복되면 첫 번째만 유지한다', () => {
    const items = [
      { id: 'x', label: 'todo 버전', status: 'todo' as const },
      { id: 'x', label: 'done 버전', status: 'done' as const },
    ];
    const result = groupByStatus(items);
    expect(result.todo).toHaveLength(1);
    expect(result.done).toHaveLength(0);
    expect(result.todo[0].label).toBe('todo 버전');
  });

  it('모든 항목이 같은 상태여도 나머지 키는 빈 배열이다', () => {
    const items = [
      { id: 'a', label: 'A', status: 'done' as const },
      { id: 'b', label: 'B', status: 'done' as const },
    ];
    const result = groupByStatus(items);
    expect(result.done).toHaveLength(2);
    expect(result.todo).toEqual([]);
    expect(result.in_progress).toEqual([]);
  });

  it('원본 배열을 변경하지 않는다', () => {
    const items = [
      { id: 'a', label: 'A', status: 'todo' as const },
      { id: 'b', label: 'B', status: 'done' as const },
    ];
    const snapshot = items.map((i) => ({ ...i }));
    groupByStatus(items);
    expect(items).toEqual(snapshot);
  });
});
