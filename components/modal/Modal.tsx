'use client';

import { useEffect } from 'react';

type ModalProps = {
  /**
   * 모달의 열림 상태를 결정하는 boolean 값.
   * `true`일 경우 모달이 열리고, `false`일 경우 모달이 닫힘.
   * state로 isOpen값을 관리하고 클릭 이벤트 핸들러로 조정하면 편리하게 사용
   */
  isOpen: boolean;

  /**
   * 모달을 닫기 위한 함수.
   * 배경 오버레이를 클릭했을 때 호출됨. 나중에 닫기나 취소버튼을 만들 경우에도 활용 가능
   */
  onClose: () => void;

  /**
   * 모달 내부에 렌더링할 자식 요소
   */
  children: React.ReactNode;

  /**
   * 반응형 디자인 등을 추가하기 위한 속성
   */
  className?: string;
};

/**
 * 화면의 중앙에 자식 요소를 표시하는 모달 컴포넌트
 *
 * @param {ModalProps} props - 모달에 전달되는 속성입니다.
 * @param {boolean} props.isOpen - 모달의 열림 상태를 결정합니다.
 * @param {() => void} props.onClose - 모달을 닫기 위한 함수입니다.
 * @param {React.ReactNode} props.children - 모달 내부에 표시할 자식 요소입니다.
 * @param {string} [props.className] - 모달의 추가적인 스타일을 지정할 수 있는 클래스 이름입니다.
 *
 * @returns {JSX.Element | null} - `isOpen`이 `true`일 때 모달을 렌더링하고, `false`일 때는 `null`을 반환하여 모달을 숨깁니다.
 * @example 'use client';
```tsx
import { useState } from 'react';
import Modal from './Modal';

export default function TestPage() {
  const [isOpen, setIsOpen] = useState(false);

  //모달의 열림과 닫힘 상태를 전환하는 함수
  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleClick}>모달열기</button>
      <Modal isOpen={isOpen} onClose={handleClick} className="bg-red-100">
        모달
      </Modal>
    </>
  );
}
```
 */

function Modal({ isOpen, onClose, children, className }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      // 모달이 열렸을 때 스크롤 방지
      document.body.style.overflow = 'hidden';
    } else {
      // 모달이 닫혔을 때 스크롤 복구
      document.body.style.overflow = '';
    }

    // 컴포넌트가 언마운트되거나 모달이 닫힐 때 원래 상태로 복구
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <div
        className={`${className} relative z-10 w-full max-w-lg rounded-lg bg-white p-8 shadow-lg`}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
