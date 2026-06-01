# 01. 상태별 항목 그룹화

## 먼저 확인하세요

이 문제에서는 상태값에 따라 항목을 묶는 `groupByStatus` 함수를 구현한다.

직접 수정할 파일:

```text
solutions/user/typescript/fullstack/day-01/01-group-by-status/solution.ts
```

`starter.ts`는 문제에 필요한 타입과 함수 형태를 보여 주는 참고 파일이다.
직접 수정하지 않는다.

- 언어: TypeScript
- 직무: fullstack
- 난이도: 초급
- 예상 풀이 시간: 15–20분
- 대비 유형: 풀스택 코딩테스트 — 데이터 가공
- 참고 범위: 배열 변환, 타입 유니온, 중복 제거, 불변성

## 학습 목표

`Item[]`을 상태별로 분류하고, 중복 `id`를 처리하며, 항상 세 개의 키를 반환하는 함수를 구현한다.

## 요구사항

`groupByStatus(items: Item[]): GroupedItems` 함수를 구현하세요.

1. 세 개의 키 `todo`, `in_progress`, `done`이 반환 객체에 항상 존재해야 합니다.
2. 항목이 없는 상태는 빈 배열 `[]`을 반환합니다.
3. `id`가 중복되면 처음 등장한 항목만 유지합니다.
4. 각 그룹 안의 순서는 원래 배열의 순서를 따릅니다.
5. 원본 배열 `items`를 변경하지 않습니다.

## 타입

```typescript
type Status = 'todo' | 'in_progress' | 'done';

interface Item {
  id: string;
  label: string;
  status: Status;
}

interface GroupedItems {
  todo: Item[];
  in_progress: Item[];
  done: Item[];
}
```

## 예시

```typescript
const items = [
  { id: 'a', label: 'A 작업', status: 'todo' },
  { id: 'b', label: 'B 작업', status: 'done' },
  { id: 'a', label: 'A 중복', status: 'done' }, // id 'a' 중복 → 무시
];

groupByStatus(items);
// {
//   todo: [{ id: 'a', label: 'A 작업', status: 'todo' }],
//   in_progress: [],
//   done: [{ id: 'b', label: 'B 작업', status: 'done' }],
// }
```

## 제약 조건

- `items` 길이: 0 이상
- `id`는 비어 있지 않은 문자열
- `status`는 `'todo' | 'in_progress' | 'done'` 중 하나

## 완료 조건

공개 테스트 전체 통과:

```
npx vitest run exercises/typescript/fullstack/day-01/01-group-by-status/public.test.ts
```

## 복잡도 질문 (풀이 후 스스로 답하세요)

1. 이 함수의 시간 복잡도는 무엇인가요? (`n = items.length` 기준)
2. 공간 복잡도는 무엇인가요?
3. 원본 배열을 변경하지 않았다고 어떻게 확신할 수 있나요?
