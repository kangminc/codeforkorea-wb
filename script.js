// ─── Translations ────────────────────────────────────────────────────────────

const translations = {
    en: {
        'nav.about': 'About',
        'nav.activities': 'Activities',
        'nav.projects': 'Projects',
        'nav.join': 'Get Involved',

        'hero.title': 'Civic Technology<br>for a Better Society',
        'hero.subtitle': 'Code for Korea is a civic tech network building a safer and more trustworthy society through civic hacking and open data.',
        'hero.btn.join': 'Get Involved',
        'hero.btn.projects': 'View Projects',

        'about.title': 'About Code for Korea',
        'about.p1': 'Code for Korea is a community of citizens engaged in civic hacking and public interest data activities in South Korea.',
        'about.p2': 'Developers, designers, planners, researchers, journalists, activists, public officials, and students come together to identify social problems, explore data, and build tools that anyone can use.',
        'about.card1.title': 'Who We Are',
        'about.card1.text': 'A citizen community in South Korea dedicated to civic hacking and open data for the public good',
        'about.card2.title': 'Why We Act',
        'about.card2.text': 'To empower citizens to directly identify social problems and create solutions through technology and collaboration',
        'about.card3.title': 'Who We Work With',
        'about.card3.text': 'Developers, designers, planners, journalists, civil society activists, public officials, and students',
        'about.card4.title': 'How We Work',
        'about.card4.text': 'Open source, voluntary participation, project-based collaboration, and community governance',

        'civic.title': 'What is Civic Hacking?',
        'civic.highlight': 'Civic hacking is not just about coding.',
        'civic.desc': 'It is a civic practice of identifying problems, reading data, connecting people, and building better solutions together.',
        'civic.step1.title': 'Identify Problems',
        'civic.step1.text': 'Find the real social problems that citizens face.',
        'civic.step2.title': 'Explore Data',
        'civic.step2.text': 'Examine public data and on-the-ground information together.',
        'civic.step3.title': 'Apply Technology & Design',
        'civic.step3.text': 'Build web services, maps, data visualizations, and more.',
        'civic.step4.title': 'Open Source Release',
        'civic.step4.text': 'Share openly so anyone can participate and improve.',
        'civic.step5.title': 'Expand Collaboration',
        'civic.step5.text': 'Broaden possibilities together with citizens, experts, and institutions.',

        'impact.title': '2025 Impact',
        'impact.discord': 'Discord Members',
        'impact.organizers': 'Organizers',
        'impact.events': 'Official Events',
        'impact.attendees': 'Event Attendees',
        'impact.fto': 'FtO Korea Participants',
        'impact.founded': 'Founded',

        'activities.title': 'Key Activities',
        'activities.intro': 'Code for Korea creates spaces for citizens to meet, collaborate, and continue projects through Meet & Hack, Facing the Ocean, and the Civic Tech Conference.',
        'act1.title': 'Meet & Hack',
        'act1.badge': 'Regular Event',
        'act1.desc': 'An event where citizens meet to explore social problems and build solutions together',
        'act1.detail1': '<strong>Format:</strong> Hackathon, workshop, networking, collaborative project work',
        'act1.detail2': '<strong>Feature:</strong> Low barrier to entry and a culture of collaboration',
        'act2.badge': 'International Event',
        'act2.desc': 'An international network connecting civic hacking communities across Asia',
        'act2.detail1': '<strong>Participants:</strong> Korea, Taiwan, Japan, and more',
        'act2.detail2': '<strong>Culture:</strong> No competition, no prizes — an event built together by all',
        'act3.title': 'Civic Tech Conference',
        'act3.badge': 'Annual Event',
        'act3.desc': 'A gathering to share civic tech projects and social issues',
        'act3.detail1': '<strong>Format:</strong> Presentations, talks, networking',
        'act3.detail2': '<strong>Goal:</strong> Share outcomes and challenges, and open new possibilities for collaboration',

        'projects.title': 'Projects Built by Citizens',
        'projects.intro': 'Code for Korea has a history of projects where citizens identify social problems, collect data, and build tools that anyone can use.',
        'proj1.tag': 'Civic Tech Records',
        'proj1.title': 'Civic Tech Project Archive',
        'proj1.desc': 'An archive documenting civic tech projects in Korea.',
        'proj1.detail': 'By compiling the outcomes and lessons learned from civic technology projects in Korea, we help new participants build on existing experience.',
        'proj1.btn': 'View Archive',
        'proj2.tag': 'Government Oversight',
        'proj2.title': 'Public Bulletin Map',
        'proj2.desc': 'A project examining the accessibility of electronic public bulletins across Korean municipalities',
        'proj2.detail': 'Publishing bulletins is the baseline — they must be findable and usable by citizens.',
        'proj2.btn': 'View Map',
        'proj3.tag': 'Local Economy',
        'proj3.title': "Let's Use Local Currency",
        'proj3.desc': 'A data-driven look at changes in local currency policy nationwide',
        'proj3.detail': 'We collect policy data from over 200 municipalities to provide citizens with the information they need to evaluate their local programs.',
        'proj3.btn': 'View Project',
        'proj4.tag': 'Disaster Safety',
        'proj4.title': 'Ansimi',
        'proj4.desc': "A project that re-reads disaster safety information from a citizen's perspective",
        'proj4.detail': "We improve public data from a citizen's viewpoint to help everyone prepare for disasters.",
        'proj4.btn': 'View Project',

        'timeline.title': 'Project Timeline',
        'tl.2020.p1': '<strong>Public Mask App</strong><br>Provided pharmacy mask stock information during COVID-19',
        'tl.2020.p2': '<strong>Personal Safety Number</strong><br>A system to prevent personal information exposure',
        'tl.2022.p1': '<strong>Public Bulletin Map</strong> (2022)',
        'tl.2022.p2': "<strong>Let's Use Local Currency</strong> (2023)",
        'tl.2024.p1': '<strong>Civic Tech Project Archive</strong> (2024)',
        'tl.2024.p2': '<strong>Ansimi</strong> (2025)',
        'tl.2024.p3': '<strong>New Projects Expanding</strong> (2026)',

        'howprojects.title': 'How Code for Korea Projects Are Made',
        'howprojects.intro': "Code for Korea projects don't start with a finished answer.<br>They begin where citizens' questions, open data, and diverse expertise meet.",
        'wf1.title': 'We Find the Problem',
        'wf1.text': 'Citizens surface inconveniences, information gaps, and public issues they encounter in daily life.',
        'wf2.title': 'We Gather Data',
        'wf2.text': 'We collect evidence through public data, FOIA requests, field research, and citizen input.',
        'wf3.title': 'We Interpret Together',
        'wf3.text': 'Developers, designers, planners, researchers, and activists read the problem through their own lens.',
        'wf4.title': 'We Build Tools',
        'wf4.text': 'We create maps, websites, data visualizations, archives, and guides that citizens can actually use.',
        'wf5.title': 'We Share & Improve',
        'wf5.text': 'We publish our work, gather feedback, and carry it forward into the next activity.',

        'howwework.title': 'How Code for Korea Works',
        'howwework.intro': 'We are a sustainable community, not just an event organizer.',
        'p1.title': 'Citizen-Led',
        'p1.text': 'Citizens who face the problems themselves ask questions and participate directly.',
        'p2.title': 'Open Source',
        'p2.text': 'We publish our work openly so anyone can improve it.',
        'p3.title': 'Multidisciplinary',
        'p3.text': 'Not just developers — experts from all fields work together.',
        'p4.title': 'Continuous Participation',
        'p4.text': 'There are many ways to get involved: events, online, and projects.',
        'p5.title': 'Public Good & Trust',
        'p5.text': 'We think together about how technology can contribute to society.',
        'governance.title': 'Governance',
        'governance.text': 'Code for Korea is an unregistered association. The General Assembly, which convenes with a majority of full members present, serves as the highest decision-making body. Organizers hold biweekly meetings to discuss and decide on key issues, and all participate on a voluntary basis.',

        'futureplan.title': '2026 Direction',
        'futureplan.intro': 'Building on our newly established direction and governance, Code for Korea aims to improve both the quantity and quality of our activities.',
        'plan1.title': 'Governance Improvements',
        'plan1.text': 'Establishing a more transparent decision-making structure through full membership and general assembly operations',
        'plan2.title': 'FtO Seoul',
        'plan2.text': 'Expanding the Asian civic hacking network with youth participation at its center',
        'plan3.title': 'Stronger Project Support',
        'plan3.text': 'Supporting project teams so ideas actually turn into results',
        'plan4.title': 'Civic Tech Archive Relaunch',
        'plan4.text': 'Documenting the outcomes and lessons of civic technology',
        'plan5.title': 'Project-Centered Conference',
        'plan5.text': 'Sharing the results and learnings from projects conducted throughout the year',
        'plan6.title': 'Meet & Hack Enhancement',
        'plan6.text': 'Lower the barrier to entry while raising the quality of ideas produced',
        'futureplan.msg': 'As a leading civic technology community connecting technology and the public good,<br>we will pursue both deepening our operations and expanding our reach in a balanced way.',

        'join.title': 'Get Involved with Code for Korea',
        'join.intro': 'There are many ways to participate in Code for Korea.',
        'join1.title': 'Join Discord',
        'join1.text': 'Check in on projects and events in our online community.',
        'join2.title': 'Attend Meet & Hack',
        'join2.text': 'Discuss and work on social issues you care about.',
        'join3.title': 'Join a Project',
        'join3.text': 'You can contribute through development, design, planning, research, and more.',
        'join4.title': 'Present at Events & Propose Collaboration',
        'join4.text': 'Share your civic tech work and propose new collaborations.',
        'join5.title': 'Become a Member or Organizer',
        'join5.text': 'Get more deeply involved in community operations and decision-making.',
        'cta.text': 'Participate in civic technology<br>in the way that works for you.',
        'cta.discord': 'Join Discord',
        'cta.contact': 'Contact Us',

        'footer.tagline': 'A citizen community solving social problems through technology',
        'footer.connect': 'Connect',
        'footer.links': 'Key Links',
        'footer.main': 'Main Site',
        'footer.archive': 'Project Archive',
        'footer.coc': 'Code of Conduct',
        'footer.contact': 'Contact',
        'footer.copyright': '© 2025 CODE FOR KOREA. All rights reserved.',
    },

    ko: {
        'nav.about': '소개',
        'nav.activities': '활동',
        'nav.projects': '프로젝트',
        'nav.join': '참여',

        'hero.title': '기술로 사회 문제를<br>함께 해결하는 시민들의 커뮤니티',
        'hero.subtitle': '코드포코리아는 시빅해킹과 공익데이터 활동을 통해 안전하고 신뢰할 수 있는 사회를 만드는 시민 기술 네트워크입니다.',
        'hero.btn.join': '함께하기',
        'hero.btn.projects': '프로젝트 보기',

        'about.title': '코드포코리아 소개',
        'about.p1': '코드포코리아는 대한민국에서 시빅해킹과 공익데이터 활동을 하는 시민들의 커뮤니티입니다.',
        'about.p2': '개발자, 디자이너, 기획자, 연구자, 기자, 활동가, 공무원, 학생 등 다양한 사람들이 모여 사회 문제를 발견하고, 데이터를 탐색하고, 누구나 활용할 수 있는 도구를 만들어 공개합니다.',
        'about.card1.title': '우리는 누구인가',
        'about.card1.text': '대한민국에서 시빅해킹과 공익데이터 활동을 하는 시민 커뮤니티',
        'about.card2.title': '왜 활동하는가',
        'about.card2.text': '시민이 직접 사회 문제를 발견하고, 기술과 협업으로 해결책을 만들기 위해',
        'about.card3.title': '누구와 함께하는가',
        'about.card3.text': '개발자, 디자이너, 기획자, 기자, 시민사회 활동가, 공무원, 대학생 등',
        'about.card4.title': '어떻게 일하는가',
        'about.card4.text': '오픈소스, 자발적 참여, 프로젝트 기반 협업, 커뮤니티 거버넌스',

        'civic.title': '시빅해킹이란?',
        'civic.highlight': '시빅해킹은 코딩만을 의미하지 않습니다.',
        'civic.desc': '문제를 발견하고, 데이터를 읽고, 사람을 연결하고, 더 나은 해결책을 함께 만드는 시민적 실천입니다.',
        'civic.step1.title': '문제 발견',
        'civic.step1.text': '시민이 실제로 겪는 사회 문제를 찾습니다.',
        'civic.step2.title': '데이터 탐색',
        'civic.step2.text': '공공데이터와 현장 정보를 함께 살펴봅니다.',
        'civic.step3.title': '기술·디자인 적용',
        'civic.step3.text': '웹서비스, 지도, 데이터 시각화 등을 만듭니다.',
        'civic.step4.title': '오픈소스 공개',
        'civic.step4.text': '누구나 참여하고 개선할 수 있도록 공유합니다.',
        'civic.step5.title': '협업 확장',
        'civic.step5.text': '시민, 전문가, 기관과 함께 가능성을 넓힙니다.',

        'impact.title': '2025년 활동 성과',
        'impact.discord': '디스코드 멤버',
        'impact.organizers': '오거나이저',
        'impact.events': '공식 행사',
        'impact.attendees': '행사 참가자',
        'impact.fto': 'FtO 한국 참가자',
        'impact.founded': '시작 연도',

        'activities.title': '주요 활동',
        'activities.intro': '코드포코리아는 밋앤핵, Facing the Ocean, 시빅테크 컨퍼런스를 통해 시민들이 만나고, 협업하고, 프로젝트를 이어갈 수 있는 장을 만듭니다.',
        'act1.title': '밋앤핵',
        'act1.badge': '정기 행사',
        'act1.desc': '시민들이 만나 사회문제를 함께 탐색하고 해결책을 만드는 행사',
        'act1.detail1': '<strong>형식:</strong> 해커톤, 워크숍, 네트워킹, 프로젝트 공동작업',
        'act1.detail2': '<strong>특징:</strong> 낮은 진입장벽과 협업 문화',
        'act2.badge': '국제 행사',
        'act2.desc': '아시아 시빅해킹 커뮤니티와 함께하는 국제 네트워크',
        'act2.detail1': '<strong>참여:</strong> 한국, 대만, 일본 등',
        'act2.detail2': '<strong>문화:</strong> 경쟁 없음, 상 없음, 모두가 함께 만들어가는 행사',
        'act3.title': '시빅테크 컨퍼런스',
        'act3.badge': '연례 행사',
        'act3.desc': '시민기술 프로젝트와 사회적 이슈를 공유하는 자리',
        'act3.detail1': '<strong>구성:</strong> 발표, 토크, 네트워킹',
        'act3.detail2': '<strong>목표:</strong> 성과와 고민을 나누고 새로운 협업 가능성 열기',

        'projects.title': '시민이 만드는 프로젝트',
        'projects.intro': '코드포코리아는 시민이 직접 사회 문제를 발견하고, 데이터를 모으고, 누구나 활용할 수 있는 도구를 만드는 프로젝트를 이어왔습니다.',
        'proj1.tag': '시빅테크 기록',
        'proj1.title': '시빅테크 프로젝트 아카이브',
        'proj1.desc': '한국의 시빅테크 프로젝트를 모아 기록하는 아카이브입니다.',
        'proj1.detail': '한국에서 진행된 시민기술 프로젝트들의 성과와 시행착오를 정리하여, 새로운 참여자들이 기존 경험을 참고할 수 있도록 돕습니다.',
        'proj1.btn': '아카이브 보기',
        'proj2.tag': '행정 감시',
        'proj2.title': '전국공보지도',
        'proj2.desc': '전국 지자체 전자공보 접근성을 살펴보는 프로젝트',
        'proj2.detail': '공보의 공개는 기본, 시민이 찾을 수 있고 활용할 수 있어야 합니다.',
        'proj2.btn': '지도 보기',
        'proj3.tag': '지역경제',
        'proj3.title': '지역화폐로 할게요',
        'proj3.desc': '전국 지역화폐 정책 변화를 데이터로 살펴보는 프로젝트',
        'proj3.detail': '200여 개 지자체의 정책 현황을 수집하여 시민이 판단할 수 있는 데이터를 제공합니다.',
        'proj3.btn': '프로젝트 보기',
        'proj4.tag': '재난안전',
        'proj4.title': '안심이',
        'proj4.desc': '재난 안전 정보를 시민의 눈높이에서 다시 읽는 프로젝트',
        'proj4.detail': '공공데이터를 시민 관점에서 개선하여 모두를 위한 재난 대비를 돕습니다.',
        'proj4.btn': '프로젝트 보기',

        'timeline.title': '프로젝트 타임라인',
        'tl.2020.p1': '<strong>공적마스크 앱</strong><br>코로나19 시기 약국 마스크 재고 정보 제공',
        'tl.2020.p2': '<strong>개인안심번호</strong><br>개인정보 노출 방지 방안',
        'tl.2022.p1': '<strong>전국공보지도</strong> (2022)',
        'tl.2022.p2': '<strong>지역화폐로 할게요</strong> (2023)',
        'tl.2024.p1': '<strong>시빅테크 프로젝트 아카이브</strong> (2024)',
        'tl.2024.p2': '<strong>안심이</strong> (2025)',
        'tl.2024.p3': '<strong>신규 프로젝트 확장</strong> (2026)',

        'howprojects.title': '코드포코리아의 프로젝트는 이렇게 만들어집니다',
        'howprojects.intro': '코드포코리아의 프로젝트는 완성된 정답에서 출발하지 않습니다.<br>시민의 질문, 공개된 데이터, 서로 다른 전문성이 만나는 과정에서 시작됩니다.',
        'wf1.title': '문제를 발견합니다',
        'wf1.text': '시민이 일상에서 마주한 불편, 정보 격차, 공공문제를 질문으로 꺼냅니다.',
        'wf2.title': '데이터를 모읍니다',
        'wf2.text': '공공데이터, 정보공개청구, 현장 조사, 시민 의견을 통해 근거를 수집합니다.',
        'wf3.title': '함께 해석합니다',
        'wf3.text': '개발자, 디자이너, 기획자, 연구자, 활동가가 각자의 관점으로 문제를 읽습니다.',
        'wf4.title': '도구를 만듭니다',
        'wf4.text': '지도, 웹사이트, 데이터 시각화, 아카이브, 가이드 등 시민이 활용할 수 있는 결과물을 만듭니다.',
        'wf5.title': '공개하고 개선합니다',
        'wf5.text': '결과물을 공유하고, 피드백을 받아 다음 활동으로 이어갑니다.',

        'howwework.title': '코드포코리아의 일하는 방식',
        'howwework.intro': '단순 행사 단체가 아니라 지속 가능한 커뮤니티입니다.',
        'p1.title': '시민 주도',
        'p1.text': '문제를 겪는 시민이 직접 질문하고 참여합니다.',
        'p2.title': '오픈소스',
        'p2.text': '결과물을 공개하고 누구나 개선할 수 있게 합니다.',
        'p3.title': '다학제 협업',
        'p3.text': '개발자뿐 아니라 다양한 전문가가 함께합니다.',
        'p4.title': '지속적 참여',
        'p4.text': '행사, 온라인, 프로젝트로 다양한 방식으로 참여할 수 있습니다.',
        'p5.title': '공공성과 신뢰',
        'p5.text': '기술이 사회에 기여할 수 있는 방향을 함께 고민합니다.',
        'governance.title': '거버넌스',
        'governance.text': '코드포코리아는 임의단체로, 정회원 과반의 출석으로 성립되는 총회를 최고 의사결정기구로 둡니다. 오거나이저는 격주로 회의를 열어 주요 안건을 토론하고 결정하며, 자원봉사로 참여하고 있습니다.',

        'futureplan.title': '2026년 방향',
        'futureplan.intro': '코드포코리아는 새롭게 확립한 방향성과 거버넌스를 바탕으로, 활동의 양과 질을 동시에 끌어올리고자 합니다.',
        'plan1.title': '거버넌스 개선',
        'plan1.text': '정회원 제도와 총회 운영을 통해 더 투명한 의사결정 구조 마련',
        'plan2.title': 'FtO 서울 개최',
        'plan2.text': '청년 참여를 중심으로 아시아 시빅해킹 네트워크 확장',
        'plan3.title': '프로젝트 지원 강화',
        'plan3.text': '아이디어가 실제 결과물로 이어지도록 프로젝트팀 지원',
        'plan4.title': '시빅테크 아카이브 재가동',
        'plan4.text': '시민기술의 성과와 시행착오를 기록',
        'plan5.title': '프로젝트 중심 컨퍼런스',
        'plan5.text': '한 해 동안 진행된 프로젝트의 결과와 배움을 공유',
        'plan6.title': '밋앤핵 고도화',
        'plan6.text': '참여 문턱은 낮추되, 도출되는 아이디어의 수준은 높이기',
        'futureplan.msg': '기술과 공익을 연결하는 대표적인 시민 기술 커뮤니티로서,<br>내실 있는 운영과 외연의 확장을 균형 있게 추진해 나가겠습니다.',

        'join.title': '코드포코리아에 함께하기',
        'join.intro': '코드포코리아에는 다양한 방식으로 참여할 수 있습니다.',
        'join1.title': '디스코드 참여',
        'join1.text': '온라인 커뮤니티에서 프로젝트와 행사 소식을 확인하세요.',
        'join2.title': '밋앤핵 참가',
        'join2.text': '관심 있는 사회문제를 함께 논의하고 작업해 보세요.',
        'join3.title': '프로젝트 참여',
        'join3.text': '개발, 디자인, 기획, 리서치 등으로 기여할 수 있습니다.',
        'join4.title': '행사 발표·협업 제안',
        'join4.text': '시민기술 관련 활동을 공유하고 협업을 제안해 보세요.',
        'join5.title': '정회원·오거나이저 참여',
        'join5.text': '커뮤니티 운영과 의사결정에 더 깊이 참여할 수 있습니다.',
        'cta.text': '내가 할 수 있는 방식으로<br>시민기술에 참여해 보세요.',
        'cta.discord': '디스코드 참여',
        'cta.contact': '문의하기',

        'footer.tagline': '기술로 사회 문제를 함께 해결하는 시민들의 커뮤니티',
        'footer.connect': '연결하기',
        'footer.links': '주요 링크',
        'footer.main': '메인 사이트',
        'footer.archive': '프로젝트 아카이브',
        'footer.coc': '행동강령',
        'footer.contact': '문의',
        'footer.copyright': '© 2025 CODE FOR KOREA. All rights reserved.',
    },
};

// ─── Language switcher ────────────────────────────────────────────────────────

function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.dataset.i18nHtml;
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.title = lang === 'ko'
        ? '코드포코리아 — 시민 기술 커뮤니티'
        : 'Code for Korea — Civic Tech Community';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = lang === 'ko'
            ? '기술로 사회 문제를 함께 해결하는 시민들의 커뮤니티, 코드포코리아'
            : 'Code for Korea — A civic tech network building a better society through civic hacking and open data.';
    }

    localStorage.setItem('lang', lang);
}

// ─── Boot ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    applyLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });
});

// ─── Smooth scroll ────────────────────────────────────────────────────────────

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ─── Navbar shadow on scroll ──────────────────────────────────────────────────

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
});

// ─── Card entrance animation ──────────────────────────────────────────────────

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.about-card, .activity-card, .project-card, .stat-card, .principle-card, .plan-card, .join-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
});

// ─── Counter animation ────────────────────────────────────────────────────────

const animateCounters = () => {
    document.querySelectorAll('.stat-number').forEach(card => {
        const target = parseInt(card.textContent);
        if (isNaN(target)) return;

        let current = 0;
        const increment = target / 50;

        const updateCount = () => {
            if (current < target) {
                current += increment;
                card.textContent = Math.floor(current);
                setTimeout(updateCount, 30);
            } else {
                card.textContent = target;
            }
        };

        const cardObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCount();
                cardObserver.unobserve(card);
            }
        }, { threshold: 0.5 });

        cardObserver.observe(card);
    });
};

window.addEventListener('load', animateCounters);

// ─── Mobile menu ──────────────────────────────────────────────────────────────

const hamburger = document.getElementById('hamburger');
const navbarRight = document.querySelector('.navbar-right');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navbarRight.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('open');
        navbarRight?.classList.remove('open');
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        hamburger?.classList.remove('open');
        navbarRight?.classList.remove('open');
    }
});

// ─── Lazy load images ─────────────────────────────────────────────────────────

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                obs.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

console.log('CODE FOR KOREA Web Brochure — Loaded');
