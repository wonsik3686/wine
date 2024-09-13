export type User = {
  id: number; // 최소값 1
  email: string;
  nickname: string; // 닉네임, 최소 길이 1, 최대 길이 30
  image: string | null; // URL 형식, nullable: true
  teamId: string;
  updatedAt: string; // ISO 8601 날짜 시간 형식
  createdAt: string; // ISO 8601 날짜 시간 형식
};

export type Login = {
  user: User;
  accessToken: string;
  refreshToken: string;
};

export type Params =
  | {
      limit: number;
      cursor?: number | null;
    }
  | string;

type Aroma = [
  'CHERRY',
  'BERRY',
  'OAK',
  'VANILLA',
  'PEPPER',
  'BAKING',
  'GRASS',
  'APPLE',
  'PEACH',
  'CITRUS',
  'TROPICAL',
  'MINERAL',
  'FLOWER',
  'TOBACCO',
  'EARTH',
  'CHOCOLATE',
  'SPICE',
  'CARAMEL',
  'LEATHER',
];

export type Reviews = {
  list: {
    id: number;
    rating: number;
    lightBold: number;
    smoothTannic: number;
    drySweet: number;
    softAcidic: number;
    aroma: Aroma;
    content: string;
    createdAt: string;
    updatedAt: string;
    user: {
      id: number;
      nickname: string;
      image: string;
    };
    wine: {
      id: number;
      name: string;
      region: string;
      image: string;
      price: number;
      avgRating: number;
      type: string;
    };
  }[];
  totalCount: number;
  nextCursor: number | null;
};

export type WineList = {
  id: number;
  name: string;
  region: string;
  image: string;
  price: number;
  type: 'RED' | 'WHITE' | 'SPARKLING';
  avgRating: number;
  reviewCount: number;
  recentReview:
    | {
        user: {
          id: number;
          nickname: string;
          image: string | null;
        };
        updatedAt: string;
        createdAt: string;
        content: string;
        aroma: Aroma;
        rating: number;
        id: number;
      }[]
    | null;
  userId: number;
};

export type Wines = {
  list: WineList[];
  totalCount: number;
  nextCursor: number | null;
};
