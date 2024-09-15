import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function useLoginConfrimModal() {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleConfirmOpenClick = () => {
    setIsConfirmOpen(false);
    router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
  };

  const handleConfirmClick = () => {
    setIsConfirmOpen(false);
    router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
  };

  return {
    isConfirmOpen,
    setIsConfirmOpen,
    handleConfirmOpenClick,
    handleConfirmClick,
  };
}
