import { g } from "vitest/dist/suite-dWqIFb_-.js";

export type Status = "todo" | "in_progress" | "done";

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
  const groupedItem: GroupedItems = {
    todo: [],
    in_progress: [],
    done: [],
  };

  const setItem = new Set<string>();
  for (const item of items) {
    if (setItem.has(item.id)) {
      continue;
    }
    setItem.add(item.id);
    groupedItem[item.status].push(item);
  }

  return groupedItem;
}
