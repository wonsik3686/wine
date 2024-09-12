export type User = {
  image: string | null; // URL 형식, nullable: true
  updatedAt: string; // ISO 8601 날짜 시간 형식
  createdAt: string; // ISO 8601 날짜 시간 형식
  teamId: string;
  email: string;
  nickname: string; // 닉네임, 최소 길이 1, 최대 길이 30
  id: number; // 최소값 1
};
