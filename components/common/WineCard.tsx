'use client';

import Dropdown from './Dropdown';

const options1 = [
  { label: 'Red', value: 'red' },
  { label: 'White', value: 'white' },
  { label: 'Sparkling', value: 'sparkling' },
];

const options2 = [
  { label: '수정하기', value: 'edit' },
  { label: '삭제하기', value: 'delete' },
];

const handleSelect = (value: string | number) => {
  console.log(`Selected value: ${value}`);
  // 여기에 원하는 액션을 추가
};

function WineCard() {
  return (
    <>
      <Dropdown
        options={options1}
        onSelect={handleSelect}
        type="select"
        width={368} // 커스텀 너비
        initialLabel="Red" // 초기 레이블 설정
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Dropdown
        options={options2}
        onSelect={(value) => console.log(value)}
        type="action"
        trigger={<span className="cursor-pointer">O</span>}
      />
    </>
  );
}

export default WineCard;
