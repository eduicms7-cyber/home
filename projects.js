// 새 프로젝트나 작업일지를 추가할 때 이 목록을 편집하세요.
window.siteProjects = [
  {
    id: "naru",
    name: "Naru",
    category: "persona",
    categoryLabel: "PERSONA",
    description: "일상과 아이디어를 기록하고, 나만의 생각을 차곡차곡 정리하는 도구.",
    status: "계속 다듬는 중",
    url: "https://naru-jaby.vercel.app",
    repository: "https://github.com/eduicms7-cyber/naru",
    workLogUrl: "https://github.com/eduicms7-cyber/naru/blob/master/docs/%EC%9E%91%EC%97%85%EC%9D%BC%EC%A7%80.md",
    visual: "visual-naru",
    symbol: "✳",
    logs: [
      {
        date: "2026.10.15",
        title: "로그인 계정 표시와 v1.0.28",
        description: "지금 로그인한 계정의 이메일을 PC·웹에서는 사이드바 아래에, 휴대폰에서는 오늘 탭 위쪽에 보여 주도록 했습니다. 이 변경을 담은 클라우드 앱 v1.0.28을 내놓았습니다."
      },
      {
        date: "2026.08.23",
        title: "할 일과 지식 보관함, 이미지 첨부 개선",
        description: "할 일과 지식창고 보관함을 추가하고, 다른 탭에서 이미지 드래그 앤 드롭이 동작하지 않던 문제를 수정했습니다."
      },
      {
        date: "2026.08.19",
        title: "노트 저장 기준 개선",
        description: "저장할 때 마지막으로 선택한 탭이 아니라 실제 작성한 내용을 기준으로 노트 유형을 정하도록 수정했습니다."
      },
      {
        date: "2026.08.19",
        title: "클라우드 및 로컬 버전 업데이트",
        description: "Naru 클라우드 v1.0.25와 Naru Local v1.0.13 릴리스를 준비했습니다."
      }
    ]
  },
  {
    id: "ent-tool",
    name: "ent-tool",
    category: "education",
    categoryLabel: "EDUCATION",
    description: "학생 프로젝트와 수업을 연결해 창업체험교육을 돕는 AI 디자인씽킹 도구.",
    status: "기능을 확장하는 중",
    url: "https://ent-tool.vercel.app",
    repository: "https://github.com/eduicms7-cyber/ent-tool",
    workLogUrl: "https://github.com/eduicms7-cyber/ent-tool/blob/main/docs/%EC%9E%91%EC%97%85%EC%9D%BC%EC%A7%80.md",
    visual: "visual-education",
    symbol: "↗",
    logs: [
      {
        date: "2026.10.11",
        title: "수업 기능과 학교 관리, 새 컴퓨터 안내 정리",
        description: "수업·학생 관리 기능을 확장하고 학교 정보를 파일로 관리할 수 있게 했습니다. 다른 컴퓨터에서 작업을 이어가는 방법과 작업 규칙도 문서로 정리했습니다."
      },
      {
        date: "2026.10.10",
        title: "학생 회원 관리와 수업 기능 시작",
        description: "학생·교사 가입과 승인, 학교 밖 학생 지원을 추가하고 수업과 모둠 설계 기능을 시작했습니다."
      }
    ]
  },
  {
    id: "togather-3c",
    name: "togather-3c",
    category: "education",
    categoryLabel: "EDUCATION",
    description: "XY 게임 수업을 운영하는 프로그램, 함께의 기술 3C.",
    status: "기능을 확장하는 중",
    url: "https://togather-3c.vercel.app",
    repository: "https://github.com/eduicms7-cyber/togather-3c",
    workLogUrl: "https://github.com/eduicms7-cyber/togather-3c/tree/main/docs/worklog",
    visual: "visual-education",
    symbol: "◎",
    logs: [
      {
        date: "2026.10.11",
        title: "교사 구글 로그인과 공유 데이터베이스 구조",
        description: "교사 구글 로그인과 인증 후 앱으로 돌아오는 경로를 추가하고, 교육용 앱들이 함께 쓰는 Supabase 프로젝트에 로그인만 공유하는 구조로 바꿨습니다."
      },
      {
        date: "2026.09.27",
        title: "교사용 사용 설명서와 교실 점검표",
        description: "교사용 사용 설명서와 휴대폰·교실 점검표를 만들고 빌드를 확인했습니다."
      }
    ]
  },
  {
    id: "moa",
    name: "Moa",
    category: "education",
    categoryLabel: "EDUCATION",
    description: "togather-3c와 ent-tool의 회원 관리·수업·활동·모둠 기능을 하나로 모은 교실 수업 통합 프로그램.",
    status: "배포를 시작한 단계",
    url: "https://moa7.vercel.app",
    repository: "https://github.com/eduicms7-cyber/moa",
    workLogUrl: "https://github.com/eduicms7-cyber/moa/tree/main/docs/worklog",
    visual: "visual-education",
    symbol: "✦",
    logs: [
      {
        date: "2026.10.25",
        title: "왼쪽 메뉴와 과정 틀 3개",
        description: "선생님 화면에 왼쪽 메뉴와 현재 위치 표시를 넣어 수업 화면을 메뉴별로 나눴습니다. 과정 틀을 창업체험교육·함께의 기술 3C·디자인씽킹교육 세 가지로 늘리고, 생활 속 문제해결용 디자인씽킹 과정을 실제 사례와 방법 카드 36개로 새로 짰습니다."
      },
      {
        date: "2026.10.19",
        title: "새 모둠 활동 「왜? 다섯 번」",
        description: "문제의 원인을 '왜?'라고 다섯 번 물으며 찾아 내려가는 모둠 활동을 만들었습니다. 어느 단계에서나 고를 수 있고, 활동 기록은 학생 포트폴리오에도 남습니다."
      },
      {
        date: "2026.10.18",
        title: "수업 설계표, 활동 카드, 학생 포트폴리오",
        description: "교사가 창업체험 8단계의 활동 카드를 골라 차시별로 수업을 설계하는 기능을 만들었습니다. 수업마다 학생별 포트폴리오와 관찰 메모, 세특 초안을 쓰는 화면도 더했습니다."
      },
      {
        date: "2026.10.16",
        title: "늦게 들어온 학생의 모둠 참여 문제 해결",
        description: "활동을 시작한 뒤 모둠이 새로 생기면 그 모둠 학생들이 활동에 들어가지 못하던 문제를 고쳤습니다. 이제 새 모둠도 1단계부터 함께할 수 있습니다."
      },
      {
        date: "2026.10.13",
        title: "배포와 약관·개인정보 동의, 비밀번호 찾기",
        description: "moa7.vercel.app에 배포하고, 이용약관·개인정보 처리방침 동의 화면과 비밀번호 찾기·바꾸기를 추가했습니다. 3C(XY 게임)와 창업체험 7단계 모듈도 옮겨 왔습니다."
      },
      {
        date: "2026.10.12",
        title: "두 앱을 합친 통합 설계와 공통 기능",
        description: "두 앱을 비교해 통합 설계안을 만들고, 로그인·교사 승인·학생 가입, 수업과 1분마다 바뀌는 참여 코드, 모둠 편성, 활동 열고 닫기 기능을 만들었습니다."
      }
    ]
  }
];
