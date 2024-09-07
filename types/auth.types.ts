// OauthProvider Enum 정의
export enum OauthProvider {
  GOOGLE = 'GOOGLE',
  NAVER = 'NAVER',
  KAKAO = 'KAKAO',
}

// OauthApp 타입 정의
export type OauthApp = {
  createdAt: string; // ISO 8601 날짜 시간 형식
  updatedAt: string; // ISO 8601 날짜 시간 형식
  appSecret: string | null; // 간편 로그인을 위한 비밀 키, nullable true
  appKey: string; // 간편 로그인을 위한 인증 키
  provider: OauthProvider; // OauthProvider Enum 사용
  teamId: string;
  id: number; // 최소값 1
};
