import { describe, it, expect } from 'vitest';
import {
  groupByStatus,
  type Item,
} from '../../../../../solutions/user/typescript/fullstack/day-01/01-group-by-status/solution';

describe('groupByStatus', () => {
  it('항목을 상태별로 분리한다', () => {
    const items: Item[] = [
      { id: 'a', label: 'A 작업', status: 'todo' },
      { id: 'b', label: 'B 작업', status: 'done' },
      { id: 'c', label: 'C 작업', status: 'todo' },
      { id: 'd', label: 'D 작업', status: 'in_progress' },
    ];
    const result = groupByStatus(items);

    expect(result.todo).toHaveLength(2);
    expect(result.done).toHaveLength(1);
    expect(result.in_progress).toHaveLength(1);
  });

  it('항목이 없는 상태도 빈 배열로 반환한다', () => {
    const items: Item[] = [{ id: 'a', label: 'A', status: 'todo' }];
    const result = groupByStatus(items);

    expect(result).toHaveProperty('in_progress');
    expect(result).toHaveProperty('done');
    expect(result.in_progress).toEqual([]);
    expect(result.done).toEqual([]);
  });

  it('그룹 안의 순서는 원래 배열 순서를 따른다', () => {
    const items: Item[] = [
      { id: 'a', label: 'A', status: 'todo' },
      { id: 'b', label: 'B', status: 'todo' },
    ];
    const result = groupByStatus(items);

    expect(result.todo[0].id).toBe('a');
    expect(result.todo[1].id).toBe('b');
  });

  it('id가 중복되면 처음 등장한 항목만 유지한다', () => {
    const items: Item[] = [
      { id: 'a', label: '첫 번째', status: 'todo' },
      { id: 'a', label: '중복', status: 'done' },
    ];
    const result = groupByStatus(items);

    expect(result.todo).toEqual([{ id: 'a', label: '첫 번째', status: 'todo' }]);
    expect(result.done).toEqual([]);
  });

  it('원본 배열을 변경하지 않는다', () => {
    const items: Item[] = [{ id: 'a', label: 'A', status: 'todo' }];
    const snapshot = items.map((item) => ({ ...item }));

    groupByStatus(items);

    expect(items).toEqual(snapshot);
  });
});
