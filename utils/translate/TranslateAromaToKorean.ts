import { Aroma, AromaKorean } from '@/types/wine.types';

export default function translateAromaToKorean(aromas: Aroma[]): string[] {
  return aromas.map((aroma) => AromaKorean[aroma]);
}
