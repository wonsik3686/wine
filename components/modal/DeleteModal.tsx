'use client';

import Button from '../common/Button';

type DdeleteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
};

export default function DeleteModal() {
  return (
    <Modal>
      <h1>정말 삭제하시겠습니까?</h1>
      <Button />
      <Button />
    </Modal>
  );
}
