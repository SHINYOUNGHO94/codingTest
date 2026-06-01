# 해설: 02. API 핸들러 소유자 검증 버그 수정

> 출제자 전용 — 사용자가 풀이를 제출하기 전에 공개하지 않는다.

## 버그 위치

```typescript
// starter.ts
if (note.ownerId !== body.userId) {  // ← 버그
```

`body.userId`는 클라이언트가 HTTP 요청 본문에 임의로 넣은 값이다.
공격자가 `body.userId = 'user-A'`로 위조하면 다른 사용자의 노트를 수정할 수 있다.

## 수정 방법

```typescript
if (note.ownerId !== authUser.id) {  // ← 수정
```

`authUser.id`는 서버의 인증 미들웨어가 JWT/세션 토큰을 검증한 뒤 주입한 값이므로
클라이언트가 임의로 변경할 수 없다.

## 공격 시나리오

1. 공격자(user-B)가 타인(user-A)의 노트 id를 획득
2. 요청 body에 `userId: 'user-A'`를 직접 설정
3. 버그 있는 코드: `note.ownerId('user-A') !== body.userId('user-A')` → false → 수정 허용
4. 결과: 공격자가 타인의 노트를 무단 수정

## 인증 vs 인가

| 개념 | 질문 | 담당 |
|------|------|------|
| 인증(Authentication) | 이 사용자가 누구인가? | 미들웨어 → `authUser` |
| 인가(Authorization) | 이 사용자가 이 리소스에 접근할 권한이 있는가? | 핸들러 내부 로직 |

소유자 확인은 인가 단계이므로 반드시 서버가 검증한 `authUser.id`를 사용해야 한다.

## 변형 문제 아이디어

- `authUser`가 `role: 'admin'`이면 모든 노트를 수정할 수 있도록 권한 확장
- 소유자뿐 아니라 공유 대상(collaborator) 목록도 확인하는 로직 추가
- `req.body`에서 다른 필드(예: `ownerId`)도 신뢰하는 버그 패턴 찾기
