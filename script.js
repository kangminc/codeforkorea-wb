// ─── Translations ────────────────────────────────────────────────────────────

const translations = {
    en: {
        'nav.about': 'About',
        'nav.activities': 'Events',
        'nav.projects': 'Projects',
        'nav.join': 'Get Involved',

        'hero.title': 'Civic Technology<br>for a Better Society',
        'hero.subtitle': 'Code for Korea starts with citizens\' questions, and builds a better society through data and technology.',
        'hero.btn.join': 'Get Involved',
        'hero.btn.projects': 'View Projects',

        'about.title': 'About Code for Korea',
        'about.p1': 'Code for Korea is a community of citizens engaged in civic hacking and open data activities in South Korea. We aspire to be a network of citizens and institutions creating technology for the public good.',
        'about.p2': 'Code for Korea began in 2020 with 17 citizens who gathered to demand COVID-19 public data from the government. The 200+ civic hackers who joined forces built an app showing mask stock at pharmacies. Code for Korea continues this spirit, contributing to a safer and more trustworthy society.',
        'about.card1.title': 'Governance',
        'about.card1.text': 'The General Assembly, which convenes with a majority of registered members present, serves as the highest decision-making body. Organizers hold biweekly meetings to discuss and decide on key issues, and all participate on a voluntary basis.',
        'about.card2.title': 'Why Civic Hacking?',
        'about.card2.text': 'We believe citizens can directly identify social problems and build solutions through technology and collaboration.',
        'about.card3.title': 'Who Joins Us',
        'about.card3.text': 'Developers, designers, planners, researchers, journalists, activists, public officials, and students come together to make better society.',
        'about.card4.title': 'How We Work',
        'about.card4.text': 'Civic hackers participate voluntarily and collaborate on a project basis. Outputs are shared as open source. We pursue the values of transparent community governance.',

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


        'activities.title': 'Key Events',
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
        'btn.more': 'See More',
        'btn.less': 'Close',

        'proj1.tag': '#Civic Tech Records',
        'proj1.title': 'Civic Tech Project Archive',
        'proj1.desc': 'An archive documenting civic tech projects in Korea.',
        'proj1.detail': 'By compiling the outcomes and lessons learned from civic technology projects in Korea, we help new participants build on existing experience.',
        'proj1.btn': 'View Archive',
        'proj2.tag': '#Government Oversight',
        'proj2.title': 'Official Gazette Map',
        'proj2.desc': 'A project examining the accessibility of electronic public bulletins across Korean municipalities',
        'proj2.detail': 'Publishing bulletins is the baseline — they must be findable and usable by citizens.',
        'proj2.btn': 'View Map',
        'proj3.tag': '#Local Economy',
        'proj3.title': 'Local Pay',
        'proj3.desc': 'A data-driven look at changes in local currency policy nationwide',
        'proj3.detail': 'We collect policy data from over 200 municipalities to provide citizens with the information they need to evaluate their local programs.',
        'proj3.btn': 'View Project',
        'proj4.tag': '#Disaster Safety',
        'proj4.title': 'Ansimi: Disaster Safety for Everyone',
        'proj4.desc': "A project that re-reads disaster safety information from a citizen's perspective",
        'proj4.detail': "We improve public data from a citizen's viewpoint to help everyone prepare for disasters.",
        'proj4.btn': 'View Project',

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
        'join1.title': 'Join Discord',
        'join1.text': 'Check in on projects and events in our online community.',
        'join2.title': 'Attend Meet & Hack',
        'join2.text': 'Discuss and work on social issues you care about.',
        'join3.title': 'Join a Project or Pitch Yours',
        'join3.text': 'You can contribute through development, design, planning, research, and more — or bring your own idea.',
        'join5.title': 'Become a Registered Member',
        'join5.text': 'Get more deeply involved in community operations and decision-making.',

        'footer.tagline': 'A citizen community solving social problems through technology',
        'footer.links': 'Key Links',
        'footer.main': 'Main Site',
        'footer.archive': 'Project Archive',
        'footer.coc': 'Code of Conduct',
        'footer.contact': 'Contact Organizers',
        'footer.connect': 'Connect',
        'footer.copyright': '© 2025 CODE FOR KOREA. All rights reserved.',
    },

    zh: {
        'nav.about': '關於我們',
        'nav.activities': '活動',
        'nav.projects': '計畫',
        'nav.join': '加入我們',

        'hero.title': '公民科技<br>共創更美好的社會',
        'hero.subtitle': '從公民的提問出發，<br>用數據與技術打造更美好的社會。',
        'hero.btn.join': '加入我們',
        'hero.btn.projects': '查看計畫',

        'about.title': 'Code for Korea',
        'about.p1': 'Code for Korea 是韓國的公民科技社群，致力於公民黑客與公益數據活動。我們以打造促進社會公益的技術為目標，凝聚公民與機構的網絡。',
        'about.p2': 'Code for Korea 起源於 2020 年，17 位公民聚集，要求政府公開 COVID-19 公共數據。超過 200 名公民黑客攜手合作，開發了顯示藥局公共口罩庫存的應用程式。Code for Korea 延續這段精神，持續為打造更安全、更值得信賴的社會而努力。',
        'about.card1.title': '治理',
        'about.card1.text': '以正式會員過半數出席為前提召開的大會，是最高決策機構。組織者每兩週召開會議，討論並決定重要事項，所有成員均為志願參與。',
        'about.card2.title': '為何選擇公民黑客？',
        'about.card2.text': '我們相信公民能夠親自發掘社會問題，並透過技術與協作打造解決方案。',
        'about.card3.title': '參與者',
        'about.card3.text': '開發者、設計師、規劃師、研究人員、記者、社運人士、公務員、學生等各界人士齊聚一堂，共同打造更美好的社會。',
        'about.card4.title': '工作方式',
        'about.card4.text': '公民黑客自願參與，以計畫為基礎進行協作。成果以開源方式公開。我們追求透明的社群治理。',

        'civic.title': '什麼是公民黑客？',
        'civic.highlight': '公民黑客不只是寫程式。',
        'civic.desc': '這是一種公民實踐——發現問題、解讀數據、連結人群，共同打造更好的解決方案。',
        'civic.step1.title': '發現問題',
        'civic.step1.text': '找出公民在日常生活中真正面臨的社會問題。',
        'civic.step2.title': '探索數據',
        'civic.step2.text': '共同研究公開數據與現場資訊。',
        'civic.step3.title': '應用技術與設計',
        'civic.step3.text': '打造網路服務、地圖、數據視覺化等工具。',
        'civic.step4.title': '開源公開',
        'civic.step4.text': '以任何人都能參與和改進的方式公開分享。',
        'civic.step5.title': '擴大協作',
        'civic.step5.text': '與公民、專家和機構共同拓展可能性。',

        'activities.title': '主要活動',
        'activities.intro': 'Code for Korea 透過 Meet & Hack、Facing the Ocean 及公民科技大會，為公民創造相聚、協作、延續計畫的空間。',
        'act1.title': 'Meet & Hack',
        'act1.badge': '定期活動',
        'act1.desc': '公民相聚，共同探索社會問題並建立解決方案的活動',
        'act1.detail1': '<strong>形式：</strong>黑客松、工作坊、交流、協作計畫',
        'act1.detail2': '<strong>特色：</strong>低門檻與協作文化',
        'act2.badge': '國際活動',
        'act2.desc': '連結亞洲各地公民黑客社群的國際網絡',
        'act2.detail1': '<strong>參與者：</strong>韓國、台灣、日本等',
        'act2.detail2': '<strong>文化：</strong>無競爭、無獎項——由所有人共同打造的活動',
        'act3.title': '公民科技大會',
        'act3.badge': '年度活動',
        'act3.desc': '分享公民科技計畫與社會議題的場合',
        'act3.detail1': '<strong>形式：</strong>演講、分享、交流',
        'act3.detail2': '<strong>目標：</strong>分享成果與挑戰，開啟新的協作可能性',

        'projects.title': '公民打造的計畫',
        'projects.intro': 'Code for Korea 持續推動由公民親自發掘社會問題、蒐集數據，並打造任何人都能使用工具的計畫。',
        'proj1.tag': '#公民科技記錄',
        'proj1.title': '公民科技計畫典藏庫',
        'proj1.desc': '記錄韓國公民科技計畫的典藏庫。',
        'proj1.detail': '整理韓國公民科技計畫的成果與經驗，幫助新參與者參考既有資源。',
        'proj1.btn': '查看典藏庫',
        'proj2.tag': '#政府監督',
        'proj2.title': '官方公報地圖',
        'proj2.desc': '審視韓國各地方政府電子公報可及性的計畫',
        'proj2.detail': '公開公報是基本要求——公民必須能夠找到並使用它。',
        'proj2.btn': '查看地圖',
        'proj3.tag': '#地方經濟',
        'proj3.title': '地方貨幣計畫',
        'proj3.desc': '以數據審視全國地方貨幣政策變化的計畫',
        'proj3.detail': '蒐集全國 200 多個地方政府的政策數據，為公民提供評估當地計畫所需的資訊。',
        'proj3.btn': '查看計畫',
        'proj4.tag': '#災難安全',
        'proj4.title': 'Ansimi：全民災難安全',
        'proj4.desc': '從公民視角重新解讀災難安全資訊的計畫',
        'proj4.detail': '從公民觀點改善公共數據，幫助所有人做好災難準備。',
        'proj4.btn': '查看計畫',

        'howprojects.title': 'Code for Korea 的計畫如何誕生',
        'howprojects.intro': 'Code for Korea 的計畫不從現成答案出發。<br>它始於公民的提問、公開數據與多元專業的交匯。',
        'wf1.title': '發現問題',
        'wf1.text': '公民提出日常生活中遇到的不便、資訊落差與公共議題。',
        'wf2.title': '蒐集數據',
        'wf2.text': '透過公共數據、資訊公開申請、實地調查與公民意見蒐集證據。',
        'wf3.title': '共同詮釋',
        'wf3.text': '開發者、設計師、規劃師、研究人員和社運人士從各自的視角解讀問題。',
        'wf4.title': '打造工具',
        'wf4.text': '製作公民能夠實際使用的地圖、網站、數據視覺化、典藏庫和指南。',
        'wf5.title': '公開並持續改進',
        'wf5.text': '公開我們的成果，蒐集回饋，並延續至下一個活動。',

        'howwework.title': 'Code for Korea 的運作方式',
        'howwework.intro': '我們是一個永續社群，而不只是活動主辦方。',
        'p1.title': '公民主導',
        'p1.text': '親身面對問題的公民直接提問並參與。',
        'p2.title': '開源',
        'p2.text': '我們公開成果，讓任何人都能改進。',
        'p3.title': '跨領域協作',
        'p3.text': '不只是開發者——各領域專家共同合作。',
        'p4.title': '持續參與',
        'p4.text': '有多種參與方式：活動、線上和計畫。',
        'p5.title': '公共利益與信任',
        'p5.text': '我們共同思考技術如何為社會做出貢獻。',

        'futureplan.title': '2026 年方向',
        'futureplan.intro': '以新確立的方向與治理為基礎，Code for Korea 致力於同步提升活動的量與質。',
        'plan1.title': '治理改善',
        'plan1.text': '透過正式會員制度與大會運作，建立更透明的決策結構',
        'plan2.title': 'FtO 首爾',
        'plan2.text': '以青年參與為核心，擴大亞洲公民黑客網絡',
        'plan3.title': '強化計畫支援',
        'plan3.text': '支援計畫團隊，讓想法真正轉化為成果',
        'plan4.title': '公民科技典藏庫重啟',
        'plan4.text': '記錄公民科技的成果與學習',
        'plan5.title': '以計畫為核心的大會',
        'plan5.text': '分享全年計畫的成果與學習',
        'plan6.title': 'Meet & Hack 提升',
        'plan6.text': '降低參與門檻，同時提升產出構想的水準',
        'futureplan.msg': '作為連結技術與公益的代表性公民科技社群，<br>我們將均衡推進內部深化運營與外部擴展。',

        'join.title': '加入 Code for Korea',
        'join1.title': '加入 Discord',
        'join1.text': '在線上社群關注計畫與活動訊息。',
        'join2.title': '參加 Meet & Hack',
        'join2.text': '討論並投入您關心的社會議題。',
        'join3.title': '加入計畫或提出您的構想',
        'join3.text': '您可以透過開發、設計、規劃、研究等方式貢獻——或帶來您自己的構想。',
        'join5.title': '成為正式會員',
        'join5.text': '更深入地參與社群運營與決策。',

        'footer.tagline': '用技術共同解決社會問題的公民社群',
        'footer.links': '重要連結',
        'footer.main': '主網站',
        'footer.archive': '計畫典藏庫',
        'footer.coc': '行為準則',
        'footer.contact': '聯絡組織者',
        'footer.connect': '聯絡方式',
        'footer.copyright': '© 2025 CODE FOR KOREA. 版權所有。',

        'btn.more': '查看更多',
        'btn.less': '收起',
    },

    ko: {
        'nav.about': '소개',
        'nav.activities': '행사',
        'nav.projects': '프로젝트',
        'nav.join': '참여',

        'hero.title': '기술로 사회 문제를<br>함께 해결하는 시민들의 커뮤니티',
        'hero.subtitle': '코드포코리아는 시민의 질문에서 시작해,<br>데이터와 기술로 더 나은 사회를 만듭니다.',
        'hero.btn.join': '함께하기',
        'hero.btn.projects': '프로젝트 보기',

        'about.title': '코드포코리아',
        'about.p1': '코드포코리아는 대한민국에서 시빅해킹과 공익데이터 활동을 하는 시민들의 커뮤니티입니다. 사회에 기여하는 기술을 만드는 시민과 기관의 네트워크를 지향합니다.',
        'about.p2': '코드포코리아는 2020년 정부에 코로나19 공공데이터를 요구하기 위해 모인 17명의 시민들로부터 시작되었습니다. 이를 계기로 모인 200여 명의 시빅해커들은 힘을 합쳐 정부가 제공하는 \'공공 마스크\'의 재고를 보여주는 앱을 만들었습니다. 코드포코리아는 이 경험을 이어가며 안전하고 신뢰할 수 있는 사회를 만드는 데 기여하고자 합니다.',
        'about.card1.title': '거버넌스',
        'about.card1.text': '정회원 과반의 출석으로 성립되는 총회를 최고 의사결정기구로 둡니다. 오거나이저는 격주로 회의를 열어 주요 안건을 토론하고 결정하며, 자원봉사로 참여하고 있습니다.',
        'about.card2.title': '왜 시빅해킹인가',
        'about.card2.text': '시민이 직접 사회 문제를 발견하고, 기술과 협업으로 해결책을 만들고자 합니다.',
        'about.card3.title': '함께하는 사람들',
        'about.card3.text': '개발자, 디자이너, 기획자, 연구자, 기자, 활동가, 공무원, 학생 등 다양한 사람들이 더 나은 사회를 만들기 위해 함께합니다.',
        'about.card4.title': '어떻게 일하는가',
        'about.card4.text': '자발적으로 참여하는 시빅해커들은 프로젝트에 기반해 협업합니다. 결과물은 오픈소스로 공개합니다. 투명한 커뮤니티 거버넌스의 가치를 추구합니다.',

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


        'activities.title': '주요 행사',
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
        'btn.more': '더보기',
        'btn.less': '접기',

        'proj1.tag': '#시빅테크 기록',
        'proj1.title': '시빅테크 프로젝트 아카이브',
        'proj1.desc': '한국의 시빅테크 프로젝트를 모아 기록하는 아카이브입니다.',
        'proj1.detail': '한국에서 진행된 시민기술 프로젝트들의 성과와 시행착오를 정리하여, 새로운 참여자들이 기존 경험을 참고할 수 있도록 돕습니다.',
        'proj1.btn': '아카이브 보기',
        'proj2.tag': '#행정 감시',
        'proj2.title': '전국공보지도',
        'proj2.desc': '전국 지자체 전자공보 접근성을 살펴보는 프로젝트',
        'proj2.detail': '공보의 공개는 기본, 시민이 찾을 수 있고 활용할 수 있어야 합니다.',
        'proj2.btn': '지도 보기',
        'proj3.tag': '#지역경제',
        'proj3.title': '지역화폐로 할게요',
        'proj3.desc': '전국 지역화폐 정책 변화를 데이터로 살펴보는 프로젝트',
        'proj3.detail': '200여 개 지자체의 정책 현황을 수집하여 시민이 판단할 수 있는 데이터를 제공합니다.',
        'proj3.btn': '프로젝트 보기',
        'proj4.tag': '#재난안전',
        'proj4.title': '안심이',
        'proj4.desc': '재난 안전 정보를 시민의 눈높이에서 다시 읽는 프로젝트',
        'proj4.detail': '공공데이터를 시민 관점에서 개선하여 모두를 위한 재난 대비를 돕습니다.',
        'proj4.btn': '프로젝트 보기',

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
        'join1.title': '디스코드 참여',
        'join1.text': '온라인 커뮤니티에서 프로젝트와 행사 소식을 확인하세요.',
        'join2.title': '밋앤핵 참가',
        'join2.text': '관심 있는 사회문제를 함께 논의하고 작업해 보세요.',
        'join3.title': '프로젝트 참여 또는 제안',
        'join3.text': '개발, 디자인, 기획, 리서치 등으로 기여하거나, 직접 아이디어를 가져오세요.',
        'join5.title': '정회원 가입',
        'join5.text': '커뮤니티 운영과 의사결정에 더 깊이 참여할 수 있습니다.',

        'footer.tagline': '기술로 사회 문제를 함께 해결하는 시민들의 커뮤니티',
        'footer.links': '주요 링크',
        'footer.main': '메인 사이트',
        'footer.archive': '프로젝트 아카이브',
        'footer.coc': '행동강령',
        'footer.contact': '오거나이저 문의',
        'footer.connect': '연결하기',
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
        : lang === 'zh'
        ? 'Code for Korea — 公民科技社群'
        : 'Code for Korea — Civic Tech Community';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = lang === 'ko'
            ? '기술로 사회 문제를 함께 해결하는 시민들의 커뮤니티, 코드포코리아'
            : lang === 'zh'
            ? 'Code for Korea — 韓國公民科技社群，透過公民黑客與開放數據打造更美好的社會。'
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

// ─── Project toggle ───────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.project-card');
            const label = btn.querySelector('.toggle-label');
            const isExpanded = card.classList.toggle('expanded');
            const lang = document.documentElement.lang || 'en';
            const t = translations[lang] || translations.en;

            if (isExpanded) {
                label.dataset.i18n = 'btn.less';
                label.textContent = t['btn.less'];
            } else {
                label.dataset.i18n = 'btn.more';
                label.textContent = t['btn.more'];
            }
        });
    });
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
