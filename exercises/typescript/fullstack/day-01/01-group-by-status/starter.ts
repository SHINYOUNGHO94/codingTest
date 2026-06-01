export type Status = 'todo' | 'in_progress' | 'done';

export interface Item {
  id: string;
  label: string;
  status: Status;
}

export interface GroupedItems {
  todo: Item[];
  in_progress: Item[];
  done: Item[];
}

/**
 * items를 status 값별로 분류하여 반환합니다.
 *
 * - 세 개의 키(todo, in_progress, done)는 항상 존재해야 합니다.
 * - id가 중복되면 처음 등장한 항목만 유지합니다.
 * - 원본 배열을 변경하지 않습니다.
 */
export function groupByStatus(items: Item[]): GroupedItems {
  // TODO: 구현하세요
  throw new Error('Not implemented');
}
