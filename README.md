# 박동민 포트폴리오

서울사이버대학교 'GitHub 포트폴리오' 과목의 개인 사이트입니다. 직접 만든 서비스 3개(TeraB, recordWEB, comax)를 사례로 정리했습니다.

- 사이트: <https://idenn207.github.io/>
- 이전 Code Editor 페이지: 태그 `legacy-code-editor`

## 구조

빌드, 의존성, 프레임워크 없이 HTML, CSS, JS만 씁니다.

```
index.html                   홈
projects/terab/index.html    TeraB 사례
projects/recordweb/index.html  recordWEB 사례
projects/comax/index.html    comax 사례
plan/index.html              제작 계획
404.html                     없는 페이지
css/style.css                공통 스타일
js/main.js                   모바일 메뉴, 목차 활성화
assets/                      캡처, 디자인 시안, 공유 이미지, 글꼴, 파비콘
robots.txt, sitemap.xml      검색 정보
.nojekyll                    Pages의 Jekyll 처리 끔
```

공통 머리글과 바닥글은 각 HTML에 그대로 들어 있습니다. 바꿀 때는 모든 HTML을 함께 고칩니다.

TeraB와 comax 이미지는 실제 화면이 아니라 디자인 시안이므로 캡션에 "디자인 시안"으로 표기합니다. recordWEB 이미지는 실제 화면을 데모 데이터로 캡처했습니다.

`assets/fonts`의 Gothic A1은 SIL OFL 글꼴(`OFL.txt`)이며 ASCII와 KS X 1001 한글 2,350자로 줄였습니다. 이 범위 밖의 글자를 쓰면 대체 글꼴로 보입니다.

## 로컬 실행

경로가 `/`에서 시작하므로 저장소 루트에서 정적 서버를 띄웁니다.

```bash
python -m http.server 8000
```

<http://localhost:8000/> 을 엽니다. 이 서버는 `404.html`을 자동으로 보여 주지 않으므로 직접 주소로 확인합니다.

## 배포

`main` 브랜치 루트를 GitHub Pages로 배포합니다. Settings > Pages에서 Source를 `Deploy from a branch`, 브랜치를 `main`, 폴더를 `/ (root)`로 둡니다. `main`에 push하면 반영됩니다.

## 버전 규칙

버전은 `Major.Minor.Patch` 형식이며 변경은 `/plan/`의 변경 기록에도 적습니다. 발견된 버그는 issue로 관리합니다.

- `Major`: 사이트 전체 구조나 디자인을 바꿀 때
- `Minor`: 페이지나 절을 추가할 때
- `Patch`: 문구와 오류를 고칠 때

커밋 메시지는 Conventional Commits 형식에 한국어로 쓰고, 본문에 바꾼 이유를 적습니다.
