import { WineDetailType } from '@/types/wine.types';

// CreateWineBody 타입 정의
export type CreateWineRequest = Pick<
  WineDetailType,
  'name' | 'region' | 'image' | 'price' | 'type'
>;
