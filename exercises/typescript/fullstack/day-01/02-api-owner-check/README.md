# 02. API 핸들러 소유자 검증 버그 수정

## 먼저 확인하세요

이 문제에서는 `starter.ts`에 있는 취약한 `updateNote` 함수를 읽고, 보안
버그를 수정한 함수를 직접 작성한다.

직접 수정할 파일:

```text
solutions/user/typescript/fullstack/day-01/02-api-owner-check/solution.ts
```

`starter.ts`는 의도적으로 버그가 포함된 분석 대상이다. 직접 수정하지 않는다.

- 언어: TypeScript
- 직무: fullstack
- 난이도: 초급
- 예상 풀이 시간: 15–20분
- 대비 유형: 풀스택 코딩테스트 — 버그 수정, 코드 리뷰
- 참고 범위: 인증 vs 인가, API 입력 신뢰 범위

## 학습 목표

API 핸들러에서 클라이언트가 보낸 값과 서버가 검증한 값을 구분하고, 소유자 확인 로직의 보안 결함을 찾아 수정한다.

## 배경

`authUser`는 **인증 미들웨어**가 토큰을 검증한 뒤 주입하는 객체입니다.
`body`는 클라이언트가 HTTP 요청 본문에 포함한 데이터입니다.

## 요구사항

`starter.ts`의 `updateNote` 함수에는 보안 버그가 있습니다.

1. 버그가 무엇인지 파악하세요.
2. `solutions/user/.../solution.ts`에 버그를 수정한 함수를 작성하세요.
3. 풀이를 제출할 때 버그의 원인과 어떻게 악용될 수 있는지 설명하세요.

## 함수 시그니처

```typescript
function updateNote(
  body: UpdateNoteBody,
  authUser: AuthUser,
  findNote: FindNote,
  saveNote: SaveNote,
): ApiResult
```

## 정상 동작 예시

```typescript
// 소유자가 자신의 노트를 수정하는 경우
updateNote(
  { noteId: 'n1', userId: 'user-A', content: '수정된 내용' },
  { id: 'user-A' },   // 인증 미들웨어가 주입한 실제 사용자
  findNote,
  saveNote,
);
// { ok: true, data: { id: 'n1', ownerId: 'user-A', content: '수정된 내용' } }
```

## 완료 조건

공개 테스트 전체 통과:

```
npx vitest run exercises/typescript/fullstack/day-01/02-api-owner-check/public.test.ts
```

## 제출 시 설명하세요

1. 버그는 어느 줄에 있나요?
2. 공격자가 이 버그를 어떻게 악용할 수 있나요?
3. 수정 후 어떤 값을 기준으로 소유자를 확인해야 하나요?
