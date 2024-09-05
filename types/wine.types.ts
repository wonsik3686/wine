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
