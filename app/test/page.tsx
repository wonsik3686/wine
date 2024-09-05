'use client';

import { PriceBox, RatingBox } from '@/components/common/Boxes';
import AddWineModal from '@/components/modal/AddWineModal';
import { useState } from 'react';

function Test() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else setIsOpen(false);
  };

  const initialWineValue = {
    name: '',
    price: '',
    origin: '',
    type: 'Red',
    imgFile: null,
  };

  return (
    <main className="grid grid-cols-3 gap-8 bg-white p-8">
      <PriceBox price={50000} />
      <RatingBox rating={3} />
      <button type="button" onClick={handleClick}>
        모달열기
      </button>
      <AddWineModal
        isOpen={isOpen}
        onClick={handleClick}
        initialFormValue={initialWineValue}
      />
    </main>
  );
}

export default Test;
