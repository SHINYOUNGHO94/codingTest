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

export function groupByStatus(items: Item[]): GroupedItems {
  // TODO: 구현하세요
  throw new Error('Not implemented');
}
