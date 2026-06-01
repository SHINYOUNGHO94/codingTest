# 해설: 01. 상태별 항목 그룹화

> 출제자 전용 — 사용자가 풀이를 제출하기 전에 공개하지 않는다.

## 핵심 개념

배열 순회 중 `Set`으로 이미 처리한 `id`를 추적하여 중복을 제거한다.
결과 객체를 미리 세 키로 초기화해두면 빈 상태 처리가 자연스럽게 해결된다.

## 정답 접근

```typescript
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
```

## 복잡도

- 시간: O(n) — items 배열을 한 번 순회
- 공간: O(n) — seen Set + 결과 배열에 최대 n개 항목

## 자주 나오는 실수

| 실수 | 증상 | 예방 |
|------|------|------|
| 결과 객체를 빈 객체 `{}`로 초기화 | 항목이 없는 상태 키가 누락됨 | 세 키를 명시적으로 초기화 |
| 중복 체크 없이 push | 같은 id 항목이 여러 번 들어감 | `Set`으로 방문 여부 확인 |
| `item` 객체를 직접 수정 | 원본 배열 변경 | 객체를 그대로 push (수정이 없으므로 참조만 넣어도 무방) |
| `items.filter().forEach()` 3회 | O(n)이지만 불필요하게 여러 번 순회 | 단일 for...of 사용 |

## 변형 문제 아이디어

- 각 그룹 안에서 `label` 기준 오름차순 정렬 추가 (정렬 + 그룹화)
- `status`가 확장될 때 타입을 어떻게 유지할지 논의 (제네릭 또는 Record)
- `groupBy` 함수를 `keyof Item`으로 일반화
