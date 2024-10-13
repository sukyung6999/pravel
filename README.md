# P’ravel

![표지](https://github.com/user-attachments/assets/12dcea26-e2ab-4853-8c87-93b3491b7905)


- 배포 URL: https://pravel.site/
- Test ID : [test@testmail.com](mailto:test@testmail.com)
- Test PW : qwerasdf1!

<br>

실행 방법
```
yarn install
yarn dev
```

<br>

## 프로젝트 소개

**“여행 당일, 뭐하지?”**

최근 MBTI로 사람 성향을 구분하곤 합니다. 계획을 치밀하게 세우는 사람이 있는 반면,

구체적인 계획 없이 흘러가는 대로 움직이는 성향의 사람이 있습니다.

치밀하고 계획된 여행보단 자신만의 즉흥 여행을 만들어가길 원하는 사람들을 위한 서비스를 기획했습니다.

<br>

## 팀원 구성

| 팀원 | 이수경 | 정예은 | 김문성 |
| --- | --- | --- | --- |
| Github Link | @sukyung6999 | @yennnny | @suld2495 |
<br>
## 1. 개발 환경

- Front : Typescript, Nextjs, React, Zustand, React Query
- Back-end : Spring Boot, Spring Security, JPA, Postgresql
- 버전 및 이슈관리 : Github, Jira
- 협업 툴 : Gather town, Notion, Github
- 배포 : Cloud Type, Vercel
- 디자인: Figma

<br>

## 2. 채택한 개발 기술과 브랜치 전략

### Next.js

- App 라우터를 사용하여 기존의 페이지 라우터보다 유연하며 동적 라우팅 설정 시 코드의 가독성과 유지보수성을 향상시켰습니다.
- 서버 컴포넌트와 클라이언트 컴포넌트를 각 페이지별 상황에 맞추어 제작하여 성능을 최적화하였습니다.

### Tailwind CSS

- 디자인 시스템에 정의된 theme color를 사용하여 일괄적이고 효율적인 UI를 개발했습니다.
- 사전 정의된 유틸리티 클래스로 개발 속도를 높이고, 커스텀 설정을 통해 프로젝트에 최적화된 스타일을 적용했습니다.

### **eslint, prettier**

- 정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 코드의 일관성을 유지하고자 했습니다.
- 코드 품질 관리는 eslint에, 코드 포맷팅은 prettier에 일임해 사용했습니다.
- naver의 코딩 컨벤션을 참고해 사용했고, 예외 규칙은 팀원들과 협의했습니다.

### Zustand

- 복잡한 상태 관리가 크게 필요하지 않은 상황에서, Redux나 Recoil과 같은 무거운 라이브러리 대신 Zustand를 선택함으로써 앱의 로딩 시간을 단축하고 전반적인 성능을 개선할 수 있었습니다.
- React hooks와의 호환성으로 현대적인 React 개발 패턴을 쉽게 적용할 수 있었습니다.

### Tanstack Query

- 서버로부터 받아온 데이터에 대한 상태관리를 하기 위해 사용하게 되었습니다.
- Tanstack Query의 캐싱 기능을 활용하여 변경 빈도가 낮은 데이터를 효율적으로 저장함으로써 애플리케이션의 성능을 최적화했습니다.

### 브랜치 전략

- main, develop, Feat 브랜치로 나누어 개발을 하였습니다.
    - **main** 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
    - **develop** 브랜치는 master로 머지전 충돌을 점검하는 브랜치입니다.
    - **Feat** 브랜치는 jira에서 기능 단위로 브랜치로 생성하여 작업하고, 스프린트 회의에서 진행한 코드리뷰까지 반영한후 develop 브랜치로 머지해주었습니다.

<br>

## 3. 역할 분담
| 담당자 | 역할(페이지) |
| --- | --- |
| 이수경 | 장소탐색<br>-키워드 검색<br>-검색결과 (리스트)<br>-검색결과 (카카오지도)<br>-상세 페이지 |
| 김문성 | - 마이페이지<br>- 과거 여행 기록 카드 <br>- 로그인 / 회원가입<br>- 현재 장소의 퀘스트 팝업 |
| 정예은 | - 메인페이지<br>- 온보딩 페이지<br>- 여행관리 페이지 |

<br>

## 4. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024.03.26 ~ 진행중

### 작업 관리

- 매주 토요일 진행사항을 공유 및 코드리뷰를 진행하였습니다.
- 다음 주 작업 예정을 스프린트로 관리하기 위해 JIRA를 사용하였습니다.

<br>

## 5. 프로젝트 구조
```
📦src
 ┣ 📂app
 ┃ ┣ 📂(auth)
 ┃ ┃ ┣ 📂join
 ┃ ┃ ┗ 📂login
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┗ 📂[...nextauth]
 ┃ ┃ ┗ 📂token
 ┃ ┣ 📂manage
 ┃ ┣ 📂mypage
 ┃ ┃ ┣ 📂@modal
 ┃ ┃ ┣ 📂energy-history
 ┃ ┃ ┣ 📂password-change
 ┃ ┃ ┣ 📂reward-history
 ┃ ┃ ┣ 📂reward-slot
 ┃ ┃ ┣ 📂update
 ┃ ┣ 📂onboarding
 ┃ ┣ 📂search
 ┃ ┃ ┣ 📂(withoutTabs)
 ┃ ┃ ┃ ┗ 📂[tab]
 ┃ ┃ ┃ ┃ ┗ 📂detail
 ┃ ┃ ┃ ┃ ┃ ┗ 📂[id]
 ┃ ┃ ┣ 📂(withTabs)
 ┃ ┃ ┃ ┗ 📂[tab]
 ┃ ┃ ┃ ┃ ┣ 📂@tabContent
 ┃ ┃ ┃ ┃ ┣ 📂@tabList
 ┃ ┣ 📂test
 ┃ ┣ 📂travel-record
 ┃ ┃ ┣ 📂@modal
 ┃ ┃ ┃ ┣ 📂(.)[id]
 ┃ ┃ ┣ 📂[id]
 ┃ ┣ 📜icon.png
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜loading.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📂auth
 ┃ ┣ 📂button
 ┃ ┣ 📂common
 ┃ ┣ 📂form
 ┃ ┣ 📂main
 ┃ ┣ 📂map
 ┃ ┣ 📂mypage
 ┃ ┣ 📂onboarding
 ┃ ┣ 📂quest
 ┃ ┣ 📂record
 ┃ ┣ 📂search
 ┃ ┣ 📂svg
 ┃ ┗ 📂tab
 ┣ 📂data
 ┣ 📂fonts
 ┣ 📂hook
 ┣ 📂layout
 ┣ 📂lib
 ┣ 📂provider
 ┣ 📂services
 ┃ ┣ 📂api
 ┃ ┗ 📂key
 ┣ 📂store
 ┣ 📂styles
 ┣ 📂types
 ┣ 📂utils
 ┣ 📜auth.ts
 ┗ 📜middleware.ts
```
