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
  const seen = new Set<string>();
  const result: GroupedItems = { todo: [], in_progress: [], done: [] };
  for (const item of items) {
    if (seen.has(item.id)) continue;
    seen.add(item.id);
    result[item.status].push(item);
  }
  return result;
}
