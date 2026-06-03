# Claude Problem Authoring Guide

이 문서는 Claude Code가 codingTest 문제를 만들 때 반드시 따라야 하는 규칙이다.

## 먼저 읽을 문서

Claude Code는 문제를 만들기 전에 다음 문서를 읽는다.

- `AGENTS.md`
- `CLAUDE.md`
- `docs/training-workflow.md`
- `docs/problem-roadmap.md`
- `docs/study-plan.md`
- `docs/progress.md`
- `docs/mistakes.md`
- `docs/fullstack-tasktree-baseline.md`

## Claude의 역할

Claude는 문제 제작 주 담당자다.

담당 범위:

- 문제 설명 작성
- starter code 작성
- public test 작성
- hidden test 방향 작성
- reference solution 작성
- explanation 작성
- 사용자 풀이 리뷰 초안 작성

단, Claude 결과는 Codex/GPT가 반드시 검증한다.

## 문제 생성 원칙

- 전체 30문제 목차는 `docs/problem-roadmap.md`를 따른다.
- 실제 문제 파일은 3일 단위로만 생성한다.
- 현재는 Day 1이 생성되어 있으므로, 다음 생성 대상은 Day 2~3이다.
- 사용자의 오답 기록이 있으면 `docs/mistakes.md`를 우선 반영한다.
- 문제는 TaskTree v2 개발에 필요한 사고력을 강화해야 한다.
- 단순 알고리즘만이 아니라 TypeScript, API, 권한, 데이터 변환, 테스트 사고를 포함한다.

## 생성해야 하는 공개 파일

각 문제는 다음 공개 파일을 가진다.

```text
exercises/{language}/{role}/day-NN/NN-slug/
  README.md
  starter.ts 또는 starter.py
  public.test.ts 또는 test_public.py

solutions/user/{language}/{role}/day-NN/NN-slug/
  solution.ts 또는 solution.py
```

사용자 풀이 파일은 starter code와 동일한 형태로 두되, 정답을 포함해서는 안 된다.

## 생성해야 하는 출제자 전용 파일

정답, 해설, hidden test는 `.authoring/` 아래에 분리한다.

```text
.authoring/solutions/reference/{language}/{role}/day-NN/NN-slug/
  solution.ts 또는 solution.py

.authoring/explanations/{language}/{role}/day-NN/NN-slug/
  README.md

.authoring/hidden-tests/{language}/{role}/day-NN/NN-slug/
  hidden.test.ts 또는 test_hidden.py
```

사용자가 문제를 풀기 전에는 `.authoring/` 내용을 공개하지 않는다.

## 문제 README 필수 항목

각 문제 README에는 다음을 포함한다.

```text
- 언어
- 직무 트랙
- 난이도
- 예상 풀이 시간
- 목표
- 요구사항
- 입력/출력 타입
- 예시
- 금지사항
- 테스트 실행 명령
- 힌트는 최소한만
```

## public test 규칙

public test는 요구사항을 설명하는 역할을 한다.

- 핵심 동작을 검증한다.
- 너무 많은 hidden edge를 공개하지 않는다.
- 정답 코드를 import하지 않는다.
- 테스트 이름은 사용자가 이해할 수 있게 작성한다.
- 원본 배열/객체 변경 여부를 가능한 경우 검증한다.

## hidden test 방향

hidden test는 출제자 전용이다.

- public test가 놓친 edge case를 검증한다.
- 빈 입력, 잘못된 입력, 중복 데이터, 권한 경계, 날짜 경계 등을 포함한다.
- 문제 요구사항 밖의 과도한 조건을 추가하지 않는다.
- 문제 오류가 생기지 않도록 reference solution으로 검증한다.

## 난이도 조절

Claude는 다음 기준으로 난이도를 조절한다.

낮출 경우:

- 사용자가 같은 실수를 반복한다.
- 타입 오류와 요구사항 누락이 많다.
- 복잡도 설명이 불안정하다.

올릴 경우:

- 사용자가 빠르게 통과한다.
- 엣지 케이스를 스스로 설명한다.
- 불변성과 타입 안정성을 유지한다.

## Codex/GPT에게 검증 요청할 내용

문제 생성 후 Claude는 Codex/GPT에게 다음 검증을 요청한다.

- 요구사항이 명확한가
- 테스트가 요구사항을 충분히 검증하는가
- hidden test가 부당하지 않은가
- reference solution이 올바른가
- 사용자 풀이 파일에 정답이 새지 않았는가
- 난이도가 현재 단계에 맞는가
- TaskTree v2 학습 목적과 연결되는가

## 금지 사항

- 한 번에 30문제 파일을 전부 생성하지 않는다.
- 사용자 풀이 파일에 정답을 넣지 않는다.
- public test에 정답 구현을 노출하지 않는다.
- 오답을 무조건 사용자 실수로 판단하지 않는다.
- 문제 오류 가능성을 숨기지 않는다.
- TaskTree 원본 코드를 그대로 복제하지 않는다.
