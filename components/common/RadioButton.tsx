'use client';

export default function RadioButton({
  isChecked = false,
  onChange,
}: {
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  const handleClick = () => {
    if (onChange) {
      onChange(!isChecked); // 체크 상태 반전
    }
  };

  return (
    <div
      onClick={handleClick}
      className="inline-flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-gray-100"
    >
      {isChecked && (
        <div className="h-[10px] w-[10px] rounded-[3px] bg-purple-100" />
      )}
    </div>
  );
}
