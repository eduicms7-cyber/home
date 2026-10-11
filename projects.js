// 새 프로젝트나 작업일지를 추가할 때 이 목록을 편집하세요.
window.siteProjects = [
  {
    id: "naru",
    name: "Naru",
    category: "persona",
    categoryLabel: "PERSONA",
    description: "일상과 아이디어를 기록하고, 나만의 생각을 차곡차곡 정리하는 도구.",
    status: "계속 다듬는 중",
    url: "https://naru.vercel.app",
    repository: "https://github.com/eduicms7-cyber/naru",
    visual: "visual-naru",
    symbol: "✳",
    logs: [
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
  }
];
