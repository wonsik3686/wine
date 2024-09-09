type User = {
  id: number;
  email: string;
  nickname: string;
  image: string;
  teamId: string;
  createdAt: string;
  updatedAt: string;
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
