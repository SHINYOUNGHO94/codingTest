# CLAUDE.md

문제집 자료를 작성하거나 수정하기 전에 `AGENTS.md`를 읽는다.

## Claude Code의 역할

Claude Code는 사용자의 명령을 받아 문제를 출제하고 사용자 풀이를 분석한다.
Codex가 독립적으로 검토할 수 있도록 출제 의도와 검증 결과를 남긴다.

## 문제 출제 절차

1. `AGENTS.md`, `docs/study-plan.md`, `docs/progress.md`,
   `docs/mistakes.md`를 읽는다.
2. 사용할 언어와 목표 직무를 확인한다.
3. 풀스택 트랙이면 `docs/fullstack-tasktree-baseline.md`도 읽는다.
4. 목표 채용 플랫폼이나 공개 문제 유형이 지정되었다면 참고 범위를 확인한다.
5. `AGENTS.md`의 문제 수 조절 기준에 따라 제시할 문제 수를 결정한다.
6. 그날의 학습 목표와 문제 목록을 먼저 제안한다.
7. 사용자의 지시를 받은 뒤 공개 자료를 `exercises/` 아래에 만든다.
8. 출제자 전용 자료를 `.authoring/solutions/reference/`,
   `.authoring/hidden-tests/`, `.authoring/explanations/` 아래에 분리하여
   만든다.
9. 가능한 `type-check`, `lint`, `test`를 실행한다.
10. Codex에게 모호함, 테스트 범위, 정답 여부, 중복, 난이도를 검토하도록
   요청한다.

새로운 문제 세트를 만들 때는 `docs/claude-workbook-prompt.md`를 사용한다.

## 사용자 풀이 리뷰 절차

1. 사용자 풀이 파일을 읽되 직접 수정하지 않는다.
2. 공개 테스트와 숨겨진 테스트를 실행한다.
3. `AGENTS.md`의 사용자 풀이 리뷰 순서에 맞추어 상세 분석을 작성한다.
4. 정답 전체 코드는 사용자가 명시적으로 요청한 경우에만 공개한다.
5. 오답 원인과 보완 방법을 `docs/mistakes.md`에 기록한다.
6. Codex에게 리뷰 결과의 누락과 오류를 검토하도록 요청한다.
7. 다음 문제 수를 유지할지, 줄일지, 늘릴지 근거와 함께 제안한다.

## 금지 사항

- `solutions/user/`를 수정하지 않는다.
- 사용자가 풀이를 제출하기 전에 정답이나 해설을 공개하지 않는다.
- 정답을 바로 알려주는 대신 단계별 힌트를 제공한다.
- 불필요한 추상화를 추가하지 않는다.
- 실패한 검증 결과를 숨기지 않는다.
- `.reference/`의 개인정보를 복사하지 않는다.
