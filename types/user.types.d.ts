type User = {
  id: number; // 최소값 1
  email: string;
  nickname: string; // 닉네임, 최소 길이 1, 최대 길이 30
  image: string | null; // URL 형식, nullable: true
  teamId: string;
  createdAt: string; // ISO 8601 날짜 시간 형식
  updatedAt: string; // ISO 8601 날짜 시간 형식
};

type Login = {
  user: User;
  accessToken: string;
  refreshToken: string;
};

type Params = {
  limit: number;
  cursor: number;
};

type Reviews = {
  list: [
    {
      id: number;
      rating: number;
      lightBold: number;
      smoothTannic: number;
      drySweet: number;
      softAcidic: number;
      aroma: [
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
    },
  ];
  totalCount: number;
  nextCursor: number | null;
};

type Wines = {
  list: [
    {
      id: number;
      name: string;
      region: string;
      image: string;
      price: number;
      avgRating: number;
      reviewCount: number;
      recentReview: null;
      userId: number;
    },
  ];
  totalCount: number;
  nextCursor: null;
};
