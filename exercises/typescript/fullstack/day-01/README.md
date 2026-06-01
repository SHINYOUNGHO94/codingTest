# Day 01: TypeScript 풀스택 입문

## 오늘 할 일

두 문제를 순서대로 푼다. 각 문제 폴더의 `README.md`를 먼저 읽고,
`solutions/user/` 아래의 대응하는 풀이 파일만 직접 수정한다.

| 순서 | 문제 | 학습 목표 | 문제 설명 | 수정할 파일 |
| --- | --- | --- | --- | --- |
| 1 | 상태별 항목 그룹화 | 배열과 객체 데이터 가공 | `01-group-by-status/README.md` | `solutions/user/typescript/fullstack/day-01/01-group-by-status/solution.ts` |
| 2 | API 소유자 검증 버그 수정 | 인증값과 클라이언트 입력값 구분 | `02-api-owner-check/README.md` | `solutions/user/typescript/fullstack/day-01/02-api-owner-check/solution.ts` |

## 공개 테스트 실행

두 문제를 모두 확인:

```text
npm test
```

한 문제만 확인:

```text
npx vitest run exercises/typescript/fullstack/day-01/01-group-by-status/public.test.ts
npx vitest run exercises/typescript/fullstack/day-01/02-api-owner-check/public.test.ts
```

## 풀이 후 설명할 내용

- 어떤 방식으로 풀었는가
- 시간 복잡도와 공간 복잡도는 무엇인가
- 어떤 엣지 케이스를 고려했는가
- 2번 문제의 보안 버그는 왜 발생했는가

