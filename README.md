# Wine
- 와인은 사용자가 다양한 와인을 검색하고 평가할 수 있는 와인 리뷰 플랫폼으로, 사용자가 직접 와인에 대한 정보를 작성하고, 다른 사용자들이 그 정보를 기반으로 리뷰를 남기는 서비스입니다. 
- DEMO : [Wine](https://wine-cdi.vercel.app/)

## 개발 기간
- 2024.08.30 ~ 2024.09.16 (2주)

## 팀원
| [![프로필 사진](https://github.com/wonsik3686.png)](https://github.com/wonsik3686) | [![프로필 사진](https://github.com/choi-youngsun.png)](https://github.com/choi-youngsun) | [![프로필 사진](https://github.com/gjrefa9139.png)](https://github.com/gjrefa9139) | [![프로필 사진](https://github.com/ayoooyh.png)](https://github.com/ayoooyh) | [![프로필 사진](https://github.com/KorpoQ.png)](https://github.com/KorpoQ) |
| :-------: | :-------: | :-------: | :-------: | :-------: |
| [정원식](https://github.com/wonsik3686) | [최영선](https://github.com/choi-youngsun) | [조규진](https://github.com/gjrefa9139) | [신윤하](https://github.com/ayoooyh) | [임귀태](https://github.com/KorpoQ) |
| 와인 상세 페이지 | 모달 | 마이 페이지 | 로그인, 회원가입 | 와인 목록 페이지 |

## 미리보기
![2024-09-19_142724](https://github.com/user-attachments/assets/c56676c9-4f5e-4f22-946e-ffb9adf28d79)


## 기술스택
![image](https://github.com/user-attachments/assets/1672842f-ca36-4a1a-a945-bdf8e4bbf33a)


## 프로젝트 구조
![image](https://github.com/user-attachments/assets/385fa739-4f2e-4673-a287-7f8932755b2c)

```
📦 src
├── 📂 apis               # API 계층
│   ├── 📜 axiosInstance.ts
│   ├── 📜 auth.api.ts
│   ├── 📜 wines.api.ts
│   ├── 📜 imageuplode.api.ts
│   ├── 📜 reviews.api.ts
│
├── 📂 queries            # 서버 측 상태(쿼리)
│   ├── 📜 auth.queries.ts
│   ├── 📜 users.queries.ts
│   ├── 📜 wines.queries.ts
│   └── 📜 reviews.queries.ts
│
├── 📂 store              # 클라이언트 측 상태(스토어)
│   ├── 📜 useAuthStore.ts
│   └── 📜 useReviewStore.ts
│
├── 📂 hooks              # 컨트롤러(훅)
│   ├── 📜 useAuth.ts
│   ├── 📜 useLoginConfirmModal.ts
│   ├── 📜 useLogout.ts
│   ├── 📜 useWineActions.ts
│   ├── 📜 useWineFilters.ts
│   ├── 📜 useReviewActions.ts
│   └── 📜 useReviewModal.ts
│
├── 📂 utils              # 유틸리티 함수
│   ├── 📜 convertToAroma.ts
│   ├── 📜 FormatDistanceToNow.ts
│   ├── 📜 KaKaoScript.ts
│   ├── 📜 TranslateAromaToKorean.ts
│   ├── 📜 NullablePick.ts
│   ├── 📜 OptionalPick.ts
│   └── 📜 debouce.ts
│
└── 📂 types              # 공통 타입 정의 폴더
│   ├── 📜 common.types.ts
│   ├── 📜 auth.types.ts
│   ├── 📜 wine.types.ts
│   └── 📜 review.types.ts
│
├── 📂 components         # 프레젠테이션(뷰)
│   ├── 📂 common         # 공통 컴포넌트 (Button, Modal, 헤더, 푸터, ..)
│   ├── 📂 auth           # 로그인/회원가입/마이페이지 관련 컴포넌트
│   ├── 📂 wine           # 와인 목록, 와인 상세, 와인 등록 컴포넌트
│   │   ├── 📜 WineList.tsx
│   │   ├── 📜 WineDetails.tsx
│   │   ├── 📜 WineRegisterForm.tsx
│   │   └── 📂 reviews    # 와인 상세 페이지 하위 리뷰 컴포넌트
│   │       ├── 📜 ReviewList.tsx
│   │       ├── 📜 ReviewItem.tsx
│   │       └── 📜 ReviewForm.tsx
│   └── 📂 modal 
│
├── 📂 app                # Next.js App Router를 사용하는 라우트 폴더
│   ├── 📂 (auth)           # 인증 관련 페이지
│   │   ├── 📂 login
│   │   │   └── 📜 page.tsx
│   │   ├── 📂 register
│   │   │   └── 📜 page.tsx
│   │    ├── 📜 error.tsx 
│   ├── 📂 (home) 
│   │   ├── 📂 wine           # 와인 관련 페이지
│   │   │   ├── 📂 register
│   │   │   │   └── 📜 page.tsx  # 와인 등록 페이지
│   │   │   ├── 📜 page.tsx       # 와인 목록 페이지
│   │   │   └── 📂 [id]          # 동적 라우트 (와인 상세 페이지)
│   │   │       └── 📜 page.tsx
│   │   ├── 📂 myprofile         # SNS 공유 관련 페이지
│   │   │       └── 📜 page.tsx
│   │   ├── 📜 error.tsx      # 앱 전체 레이아웃
│   │   ├── 📜 page.tsx        # 메인 페이지
│   │   └── 📜 layout.tsx 
│   ├── 📜 layout.tsx      # 앱 전체 레이아웃
│   ├── 📜 page.tsx        # 메인 페이지
│   └── 📜 global.css      # 글로벌 스타일 (Tailwind 사용 시)
```



## 회고
![image](https://github.com/user-attachments/assets/83084921-fb30-42fc-880b-21c8d08c361a)
