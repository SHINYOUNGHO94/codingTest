# codingTest

프론트엔드, 백엔드, 풀스택 엔지니어 이직 과정의 코딩테스트를 준비하기 위한
문제집이다.

처음 문제를 풀 때는 `START-HERE.md`부터 읽는다.

## 사용 언어

- TypeScript
- Python

언어마다 자주 출제되는 내용과 평가 방식이 다르므로 문제를 분리하여 관리한다.
각 언어 안에서도 프론트엔드, 백엔드, 풀스택 직무별로 문제를 나눈다.

## AI 협업 방식

- 사용자가 Claude Code에게 문제 생성을 지시한다.
- Claude Code가 학습 계획, 문제, 테스트, 정답, 해설을 만든다.
- Codex가 Claude Code의 결과를 독립적으로 검토하고 보완한다.
- 사용자가 `solutions/user/` 아래에서 문제를 직접 푼다.
- Claude Code와 Codex가 사용자 풀이를 분석하고 상세 리뷰를 제공한다.

사용자가 먼저 문제를 풀 수 있도록 정답, 해설, 숨겨진 테스트는 공개 문제와
분리한다.

## 폴더 구조

```text
codingTest/
  AGENTS.md
  CLAUDE.md
  GPT.md
  README.md
  docs/
    study-plan.md
    progress.md
    mistakes.md
    claude-workbook-prompt.md
    fullstack-tasktree-baseline.md
  exercises/
    typescript/
      frontend/
      backend/
      fullstack/
    python/
      frontend/
      backend/
      fullstack/
  solutions/
    user/
      typescript/
      python/
  .authoring/
    solutions/
      reference/
        typescript/
        python/
    explanations/
      typescript/
      python/
    hidden-tests/
      typescript/
      python/
```

각 언어 아래의 문제 경로는 다음 형식을 따른다.

```text
{language}/{role}/day-NN/NN-slug/
```

첫날 문제는 아직 만들지 않았다. Claude Code에게 문제 생성을 지시하기 전에
`docs/study-plan.md`와 폴더 구조를 먼저 검토한다.

풀스택 트랙은 TaskTree 포트폴리오의 기술과 리뷰 관점을 일반화하여 활용한다.
세부 기준은 `docs/fullstack-tasktree-baseline.md`에 정리되어 있다.

## 학습량 조절

처음에는 한 번에 1~2문제만 풀고 상세 리뷰를 받는다. 기본 개념, 복잡도,
엣지 케이스 설명이 안정되면 2~3문제, 3~5문제로 점차 늘린다. 8~12문제는
실제 시험에 가까운 모의 테스트 단계의 목표다.

## 문제 푸는 방법

1. `exercises/` 아래에서 현재 학습일의 `README.md`를 먼저 읽는다.
2. 각 문제 폴더의 `README.md`에서 요구사항과 테스트 명령을 확인한다.
3. `solutions/user/` 아래의 대응하는 `solution.ts` 또는 `solution.py`만 직접
   수정한다.
4. 공개 테스트를 실행한다.
5. 풀이가 끝나면 AI에게 리뷰를 요청하고 복잡도와 엣지 케이스를 설명한다.

정답, 해설, 숨겨진 테스트는 풀이 전에 열지 않는다.

`.authoring/`은 Claude Code와 Codex가 사용하는 출제자 전용 폴더다. 문제를
풀 때는 열지 않아도 된다.

## 검증

첫 문제 세트와 함께 언어별 최소 실행 환경을 추가한다. 이후 문제를 변경할
때마다 가능한 검증을 실행한다.

TypeScript:

```text
type-check
lint
test
```

Python:

```text
lint
test
```

최소 실행 환경을 도입할 때 실제 명령도 함께 문서화한다.
