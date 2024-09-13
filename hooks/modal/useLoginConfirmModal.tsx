import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function useLoginConfrimModal() {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const router = useRouter();

  const handleConfirmOpenClick = () => {
    if (!isConfirmOpen) {
      setIsConfirmOpen(true);
    } else setIsConfirmOpen(false);
  };

  const handleConfirmClick = () => {
    setIsConfirmOpen(false);
    router.push('/login');
  };

  return {
    isConfirmOpen,
    setIsConfirmOpen,
    handleConfirmOpenClick,
    handleConfirmClick,
  };
}
