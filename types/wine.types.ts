/* eslint-disable import/no-cycle */
import { AvgRatings, RecentReview, ReviewListType } from './review.types';

// WineType Enum 정의
export enum WineType {
  RED = 'RED',
  WHITE = 'WHITE',
  SPARKLING = 'SPARKLING',
}

// Aroma에 대한 Enum 정의
export enum Aroma {
  CHERRY = 'CHERRY',
  BERRY = 'BERRY',
  OAK = 'OAK',
  VANILLA = 'VANILLA',
  PEPPER = 'PEPPER',
  BAKING = 'BAKING',
  GRASS = 'GRASS',
  APPLE = 'APPLE',
  PEACH = 'PEACH',
  CITRUS = 'CITRUS',
  TROPICAL = 'TROPICAL',
  MINERAL = 'MINERAL',
  FLOWER = 'FLOWER',
  TOBACCO = 'TOBACCO',
  EARTH = 'EARTH',
  CHOCOLATE = 'CHOCOLATE',
  SPICE = 'SPICE',
  CARAMEL = 'CARAMEL',
  LEATHER = 'LEATHER',
}

export enum AromaKorean {
  CHERRY = '체리',
  BERRY = '베리',
  OAK = '오크',
  VANILLA = '바닐라',
  PEPPER = '후추',
  BAKING = '베이킹',
  GRASS = '풀',
  APPLE = '사과',
  PEACH = '복숭아',
  CITRUS = '시트러스',
  TROPICAL = '열대과일',
  MINERAL = '미네랄',
  FLOWER = '꽃',
  TOBACCO = '담배',
  EARTH = '흙',
  CHOCOLATE = '초콜릿',
  SPICE = '향신료',
  CARAMEL = '카라멜',
  LEATHER = '가죽',
}

// 와인 상세 정보 타입
export type WineDetailType = {
  id: number;
  name: string;
  region: string;
  image: string;
  price: number;
  type: string;
  avgRating: number;
  reviewCount: number;
  recentReview: RecentReview | null; // nullable true
  userId: number;
  reviews: ReviewListType[];
  avgRatings: AvgRatings;
};

// 와인 리스트 정보 타입
export type WineListType = {
  id: number;
  name: string;
  region: string;
  image: string;
  price: number;
  type: string; // "RED", "WHITE", "SPARKLING" 중 하나
  avgRating: number;
  reviewCount: number;
  recentReview: RecentReview | null; // nullable true
  userId?: number;
};
