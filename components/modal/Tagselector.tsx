'use client';

import { useState } from 'react';
import Chip from '../common/Chip';

export default function TagSelector() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const tags = [
    '체리',
    '베리',
    '오크',
    '바닐라',
    '후추',
    '제빵',
    '풀',
    '사과',
    '복숭아',
    '시트러스',
    '트로피컬',
    '미네랄',
    '꽃',
    '담뱃잎',
    '흙',
    '초콜릿',
    '스파이스',
    '카라멜',
    '가죽',
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Chip
          key={tag}
          label={tag}
          selected={selectedTags.includes(tag)}
          onClick={() => handleTagClick(tag)}
          isDisabled={false}
        />
      ))}
    </div>
  );
}
