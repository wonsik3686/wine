/* eslint-disable import/no-cycle */

import { useReviewModalStore } from '@/store/useReviewModalStore';
import { Aroma } from '@/types/wine.types';
import translateAromaToKorean from '@/utils/translate/TranslateAromaToKorean';
import Chip from '../../common/Chip';

const englishTags: Aroma[] = Object.values(Aroma);
const koreanTags = translateAromaToKorean(englishTags);

export default function TagSelector() {
  const { selectedTags, setSelectedTags } = useReviewModalStore();

  const handleTagClick = (tag: Aroma) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="flex flex-wrap gap-[15px] mob:gap-[10px]">
      {koreanTags.map((tag, index) => (
        <Chip
          key={englishTags[index]} // 영어 태그를 키로 사용
          label={tag}
          selected={selectedTags.includes(englishTags[index])} // 선택된 태그가 영어로 저장됨
          onClick={() => handleTagClick(englishTags[index])} // 클릭 시 영어 태그로 처리
          isDisabled={false}
        />
      ))}
    </div>
  );
}
