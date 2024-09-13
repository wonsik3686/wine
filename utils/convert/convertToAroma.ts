import { Aroma } from '@/types/wine.types';

export function convertToAroma(aromas: string[]): Aroma[] {
  return aromas
    .map((aroma) => {
      if (Object.values(Aroma).includes(aroma as Aroma)) {
        return aroma as Aroma;
      }
      return null;
    })
    .filter((aroma): aroma is Aroma => aroma !== null);
}
