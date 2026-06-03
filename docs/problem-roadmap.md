# Problem Roadmap

이 문서는 codingTest의 TypeScript fullstack 트랙 30문제 목차를 정의한다.

목표는 TaskTree v2 개발에 필요한 TypeScript, 데이터 가공, API 로직, 권한 판단, 테스트 작성 능력을 단계적으로 강화하는 것이다.

## 운영 규칙

- 전체 30문제 목차는 먼저 고정한다.
- 실제 문제 파일은 3일 단위로 생성한다.
- 사용자의 풀이 결과에 따라 다음 3일치 문제의 난이도와 세부 요구사항을 조정한다.
- 로드맵은 방향 기준이며, 오답 기록에 따라 순서와 난이도를 조정할 수 있다.

## 현재 진행 상태

Day 1은 이미 생성되어 있다.

```text
Day 1
- 01-group-by-status
- 02-api-owner-check
```

다음 생성 대상은 Day 2~3이다.

## 30문제 로드맵

### Day 1: 기본 데이터 가공과 권한 기초

1. `group-by-status`
   - 상태별 그룹화
   - 중복 id 제거
   - 원본 배열 불변성

2. `api-owner-check`
   - API 요청자와 owner 권한 확인
   - 단순 권한 guard
   - 에러 응답 모델링

### Day 2: 입력 검증과 안전한 변환

3. `normalize-signup-input`
   - 회원가입 입력 정규화
   - 빈 문자열, 공백, 선택 필드 처리
   - 타입 안전한 반환값

4. `validate-task-payload`
   - task 생성 요청 검증
   - 필수값, 날짜, enum 검증
   - 실패 사유 반환

### Day 3: 조직 계층 기본 처리

5. `build-org-path`
   - company, division, department, team 경로 생성
   - 누락된 id 처리
   - DynamoDB key 사고 연습

6. `filter-users-by-role`
   - role별 사용자 필터링
   - 정렬과 중복 제거
   - 원본 데이터 불변성

### Day 4: 계층 권한 판단

7. `can-view-task-by-scope`
   - company, division, department, team 범위 판단
   - 상위 계층 접근 권한
   - private task 처리

8. `can-edit-task`
   - 작성자, 관리자, 팀 리더 수정 권한
   - delete와 update 권한 차이
   - 실패 이유 반환

### Day 5: API 응답 설계

9. `create-api-response`
   - 일관된 statusCode/body 생성
   - error response 표준화
   - JSON 직렬화 안전성

10. `parse-api-event-body`
    - APIGateway body 파싱
    - invalid JSON 처리
    - unknown input narrowing

### Day 6: Repository 사고 연습

11. `dedupe-records-by-key`
    - DynamoDB record 중복 제거
    - 최신 데이터 선택
    - stable order 유지

12. `map-record-to-domain`
    - DB record를 domain type으로 변환
    - 누락 필드 fallback
    - 잘못된 record 제외

### Day 7: 비동기 처리

13. `fetch-with-auth-retry`
    - 인증 토큰 만료 처리
    - retry 조건 분리
    - 실패 path 테스트

14. `load-dashboard-data`
    - 여러 API 결과 합성
    - 일부 실패 처리
    - loading/error state 모델링

### Day 8: 프론트엔드 상태 갱신

15. `update-task-list`
    - create/update/delete 후 목록 갱신
    - 불변성 유지
    - status별 정렬 유지

16. `derive-empty-state`
    - 필터 결과 기반 empty state 판단
    - 검색어, 상태, 권한 조건 반영
    - UI 표시 조건 정리

### Day 9: 테스트 작성 중심

17. `write-tests-for-permission-guard`
    - 권한 함수 테스트 작성
    - 경계 케이스 설계
    - 테스트명 명확화

18. `write-tests-for-input-parser`
    - parser 테스트 작성
    - invalid input, null, array 처리
    - hidden test 관점 연습

### Day 10: 코드 리뷰 문제

19. `review-buggy-task-filter`
    - 버그 있는 필터 코드 리뷰
    - 누락 조건 찾기
    - 수정 방향 설명

20. `review-unsafe-api-handler`
    - unsafe handler 리뷰
    - 권한 검증 누락 찾기
    - 에러 처리 개선 제안

### Day 11: SQL/데이터 사고 기초

21. `aggregate-user-task-counts`
    - 사용자별 task count 집계
    - status 조건
    - SQL GROUP BY 사고 일반화

22. `find-overdue-tasks`
    - 날짜 비교
    - timezone 주의
    - 완료 상태 제외

### Day 12: 실무형 작은 기능

23. `create-invite-summary`
    - 초대 대상 요약 생성
    - role, org path 표시
    - validation 결과 포함

24. `build-organization-tree`
    - flat records를 tree로 변환
    - orphan 처리
    - 정렬과 depth 계산

### Day 13: API + UI 계약

25. `shape-dashboard-view-model`
    - API response를 UI view model로 변환
    - nullable 필드 처리
    - 표시용 label 생성

26. `merge-user-profile-and-org`
    - user profile과 org data 병합
    - 누락 데이터 fallback
    - sidebar 표시 모델 생성

### Day 14: 종합 권한/조직 문제

27. `resolve-task-access-list`
    - 사용자 role 기준 접근 가능한 task 목록 생성
    - 계층 범위 반영
    - 중복 task 제거

28. `assign-task-to-org-scope`
    - task 할당 범위 검증
    - 존재하지 않는 조직 id 처리
    - 권한 없는 할당 차단

### Day 15: 모의 실무 과제

29. `case-dashboard-mini`
    - case/task dashboard용 데이터 변환
    - 필터, 정렬, 권한 적용
    - 종합 테스트

30. `signup-company-flow-mini`
    - 회원가입 입력 기반 company 생성 흐름 모델링
    - 임시 회사명 제거
    - app/core/api 흐름 사고 연습

## 조정 규칙

다음 경우 다음 batch 난이도를 낮춘다.

- 같은 타입 오류가 반복된다.
- 요구사항 누락이 반복된다.
- 공개 테스트만 맞추고 hidden edge를 설명하지 못한다.
- 시간 복잡도와 공간 복잡도 설명이 불안정하다.

다음 경우 난이도를 올린다.

- 공개 테스트를 빠르게 통과한다.
- 엣지 케이스를 스스로 추가 설명한다.
- 불변성과 타입 안정성을 자연스럽게 지킨다.
- 리뷰에서 같은 실수가 반복되지 않는다.
