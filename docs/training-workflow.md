# Training Workflow

이 문서는 codingTest 저장소의 학습 운영 방식을 정의한다.

회사 노트북, 집 데스크톱, Claude Code, Codex/GPT는 서로 대화 기억을 공유하지 않는다. 따라서 중요한 운영 방식과 결정은 반드시 Git에 올라가는 문서로 기록한다.

## 기본 운영 원칙

1. 전체 30문제 목차를 먼저 작성한다.
2. 실제 문제 파일은 3일 단위로 생성한다.
3. 사용자가 푼 결과를 보고 다음 3일치 문제의 난이도와 주제를 조정한다.
4. 대화에서 정한 중요한 운영 방식은 반드시 docs에 기록한다.
5. docs에 없는 결정은 다른 AI가 알 수 없다고 간주한다.

## 현재 상태

현재 TypeScript fullstack 트랙의 Day 1 문제 파일이 생성되어 있다.

```text
exercises/typescript/fullstack/day-01/
  01-group-by-status/
  02-api-owner-check/

solutions/user/typescript/fullstack/day-01/
  01-group-by-status/
  02-api-owner-check/
```

다음 문제 생성 시에는 Day 2~3을 우선 생성해 첫 3일치 세트를 완성한다.

## 문제 생성 단위

문제는 한 번에 전부 파일로 만들지 않는다.

권장 흐름:

1. `docs/problem-roadmap.md`로 전체 30문제 방향을 확인한다.
2. 현재 진행 중인 day를 확인한다.
3. 다음 3일치 문제만 실제 파일로 생성한다.
4. 사용자가 풀이를 완료하면 Claude가 리뷰 초안을 작성한다.
5. Codex/GPT가 리뷰와 테스트를 검증한다.
6. `docs/mistakes.md`와 `docs/progress.md`를 갱신한다.
7. 다음 3일치 문제를 오답 기록에 맞춰 조정한다.

## 역할 분담

### Claude Code

Claude Code는 문제 제작 주 담당자다.

- 문제 초안 작성
- starter code 작성
- public test 작성
- hidden test 방향 작성
- reference solution 작성
- explanation 작성
- 사용자 풀이 리뷰 초안 작성

### Codex/GPT

Codex/GPT는 Claude 결과 검증 담당자다.

- 문제 요구사항 검토
- 테스트 품질 검토
- 정답 코드 검증
- 난이도 조정 의견 제시
- 사용자 풀이 리뷰 누락 확인
- 다음 문제 방향 제안

### 사용자

사용자는 직접 풀이한다.

- `solutions/user/` 아래 풀이 파일만 수정한다.
- 정답과 hidden test를 먼저 보지 않는다.
- 풀이 후 공개 테스트를 실행한다.
- 풀이 의도, 시간 복잡도, 공간 복잡도, 엣지 케이스를 설명한다.

## 문제 수 조절 기준

초기에는 한 번에 1~2문제를 푼다. 풀이 설명, 복잡도 설명, 엣지 케이스 대응이 안정되면 문제 수를 늘린다.

| 단계 | 한 번에 푸는 문제 수 | 기준 |
| --- | ---: | --- |
| 입문 | 1~2 | 기본 개념 확인 단계 |
| 기초 | 2~3 | 기본 구현과 설명이 안정된 단계 |
| 중급 | 3~5 | 반복 실수가 줄어든 단계 |
| 실전 | 6~8 | 제한 시간 연습 단계 |
| 모의 테스트 | 8~12 | 실제 시험 대비 단계 |

## 다음 AI에게 이어받게 하는 방법

다른 PC 또는 다른 AI에서 이어갈 때는 다음처럼 지시한다.

```text
AGENTS.md를 읽고, docs/training-workflow.md, docs/problem-roadmap.md,
docs/claude-problem-authoring.md, docs/progress.md, docs/mistakes.md를 읽은 뒤
현재 진행 상황을 파악해.
```

Claude에게 문제 생성을 맡길 때는 다음처럼 지시한다.

```text
CLAUDE.md와 docs/claude-problem-authoring.md를 읽고 작업해.
전체 30문제 로드맵은 docs/problem-roadmap.md를 기준으로 하고,
실제 문제 파일은 다음 3일치만 생성해.
사용자 풀이 결과와 docs/mistakes.md를 반영해 난이도를 조정해.
```
