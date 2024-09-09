/* eslint-disable import/no-cycle */
import { Aroma } from './wine.types';

// 리뷰 작성자 정보
export type ReviewUser = {
  id: number;
  nickname: string;
  image: string | null; // nullable true
};

// 리뷰 리스트 항목
export type ReviewListType = {
  id: number;
  rating: number;
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
  aroma: Aroma[]; // Aroma Enum 사용
  content: string;
  createdAt: string; // 날짜 시간 형식
  updatedAt: string; // 날짜 시간 형식
  user: ReviewUser;
};

// 리뷰 상세 정보 타입
export type ReviewDetailType = {
  id: number;
  rating: number;
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
  aroma: Aroma[]; // Aroma Enum 배열
  content: string;
  createdAt: string; // ISO 8601 날짜 시간 형식
  updatedAt: string; // ISO 8601 날짜 시간 형식
  user: ReviewUser;
  wineId: number;
  teamId: string;
};

// 평균 평점 정보
export type AvgRatings = {
  [key: string]: number; // 동적 속성 이름에 대한 숫자 값
};

// 최근 리뷰 타입
export type RecentReview = {
  id: number;
  rating: number;
  lightBold?: number;
  smoothTannic?: number;
  drySweet?: number;
  softAcidic?: number;
  aroma: Aroma[]; // Aroma Enum 배열
  content: string;
  createdAt: string; // ISO 8601 날짜 시간 형식
  updatedAt: string; // ISO 8601 날짜 시간 형식
  user: ReviewUser;
};

export type WineTastes = {
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
};
