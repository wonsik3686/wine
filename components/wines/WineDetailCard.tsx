import { WineDetailType } from '@/types/wine.types';
import Image from 'next/image';
import { PriceBox } from '../common/Boxes';

type WineDetailProps = { wineDetail?: WineDetailType };

export default function WineDetailCard({ wineDetail }: WineDetailProps) {
  return (
    <article className="relative mt-10 flex h-[16.25rem] w-full flex-col justify-end mob:h-[13.0625rem]">
      <div className="absolute bottom-0 h-[13.0625rem] w-[15.25rem] tab:h-[18.875rem] tab:w-[12.75rem] mob:h-[15.0625rem] mob:w-[6.12rem]">
        <Image
          src="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/243/1725533452345/Chateau_Buera_Rkatsiteli.png"
          alt="와인 이미지"
          fill
          className="object-contain"
        />
      </div>
      <div className="h-[16.25rem] w-full rounded-2xl border-[1px] border-gray-300 mob:h-[13.0625rem]">
        <div className="ml-[15.25rem] mt-2 flex h-full flex-col justify-center tab:ml-[12.75rem] mob:ml-[6.13rem]">
          <h2 className="text-h2xl mb-5 w-[18.75rem] font-sans font-semibold text-gray-800 mob:mb-3 mob:w-[12.5rem] mob:text-xl">
            Sentinel Carbernet Sauvignon 2016
          </h2>
          <p className="mb-[0.81rem] font-sans text-lg font-regular text-gray-500 mob:mb-1 mob:text-sm">
            Western Cape, South Africa
          </p>
          <PriceBox price={64990} />
        </div>
      </div>
    </article>
  );
}
