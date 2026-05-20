# 코드포코리아 웹브로셔

기술로 사회 문제를 함께 해결하는 시민들의 커뮤니티, **코드포코리아**의 공식 웹브로셔입니다.

## 🎯 프로젝트 개요

이 프로젝트는 코드포코리아의 정체성, 활동, 프로젝트, 그리고 참여 방법을 효과적으로 전달하기 위해 만든 원페이지 웹브로셔입니다.

### 주요 특징
- ✨ 프레임워크 없이 순수 HTML/CSS/JavaScript로 구현
- 📱 완전한 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ⚡ 빠른 로딩 속도와 좋은 성능
- ♿ 접근성을 고려한 시맨틱 HTML
- 🎨 현대적이고 깔끔한 디자인
- 🚀 정적 호스팅으로 쉬운 배포

## 📁 프로젝트 구조

```
codeforkorea_wb/
├── index.html          # 메인 HTML 파일
├── styles.css          # 전체 스타일
├── script.js           # 인터랙티브 기능
├── README.md          # 이 파일
├── .gitignore         # Git 제외 설정
└── images/            # 이미지 폴더 (필요시)
```

## 🚀 시작하기

### 로컬 개발

1. 저장소 클론 또는 다운로드
```bash
cd codeforkorea_wb
```

2. 로컬 서버 실행
```bash
# Python 3
python -m http.server 8000

# 또는 Python 2
python -m SimpleHTTPServer 8000

# 또는 Node.js (http-server)
npx http-server
```

3. 브라우저에서 열기
```
http://localhost:8000
```

## 📝 주요 섹션

1. **Hero** - 메인 메시지와 CTA
2. **About** - 코드포코리아 소개
3. **Civic Hacking** - 시빅해킹 개념 설명
4. **Impact Numbers** - 2025년 활동 성과
5. **Activities** - 주요 활동 (밋앤핵, FtO, 컨퍼런스)
6. **Projects** - 대표 프로젝트 및 타임라인
7. **How Projects Work** - 프로젝트 제작 방식
8. **How We Work** - 일하는 방식 및 원칙
9. **2026 Plan** - 향후 방향
10. **Join Us** - 참여 안내 및 CTA

## 🎨 커스터마이징

### 색상 변경
`styles.css`의 CSS 변수를 수정하세요:
```css
:root {
    --primary-color: #0052cc;      /* 주색상 */
    --accent-color: #ff6b6b;       /* 강조색 */
    --text-dark: #1a1a1a;          /* 텍스트 색상 */
    /* ... 기타 색상 */
}
```

### 폰트 변경
`styles.css`의 `body` 선택자에서 font-family를 수정하세요.

### 콘텐츠 수정
`index.html`의 각 섹션 내용을 직접 편집하세요.

## 📱 반응형 디자인

- **Desktop**: 1200px 이상
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: 479px 이하

## 🌐 배포 옵션

### 1. Netlify (추천)
- [Netlify.com](https://netlify.com)에서 가입
- GitHub 저장소 연결 또는 드래그&드롭으로 배포
- 자동 HTTPS, CDN 제공

### 2. GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/codeforkorea_wb.git
git push -u origin main
```
Settings → Pages → Source: main branch 선택

### 3. Vercel
- [Vercel.com](https://vercel.com)에서 프로젝트 import
- 자동으로 배포 진행

### 4. 일반 호스팅 (AWS S3, Google Cloud Storage 등)
모든 파일을 호스팅 서비스에 업로드하면 됩니다.

## ✅ 체크리스트

배포 전에 확인하세요:

- [ ] 모든 링크가 올바르게 작동하는지 확인
- [ ] 모바일 환경에서 테스트
- [ ] 이미지 최적화
- [ ] 메타 데이터 확인 (og:image, meta description 등)
- [ ] 웹 분석 코드 추가 (Google Analytics 등)
- [ ] SEO 최적화 확인

## 🔍 SEO 최적화

기본 SEO 요소가 포함되어 있습니다:
- 의미있는 HTML 구조
- 적절한 제목과 메타 설명
- Open Graph 메타 태그 (추가 가능)

추가로 권장하는 것:
```html
<!-- meta 태그 추가 예 -->
<meta property="og:image" content="image-url">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```

## 🚀 성능 최적화

- 번들 크기: ~50KB (HTML + CSS + JS)
- 로딩 시간: 빠름 (정적 사이트)
- 라이트하우스 점수: 95+ (권장)

## 🤝 기여하기

개선 사항이나 버그 리포트는 이슈나 PR로 제출해주세요.

## 📄 라이선스

MIT License

## 📧 문의

코드포코리아 웹브로셔 관련 문의: contact@codefor.kr

---

**마지막 업데이트**: 2025년 5월 20일
