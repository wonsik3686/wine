import { ReactNode } from 'react';

export type CommonTypes = {
  children: ReactNode;
  label: string;
  errorMessage: string;
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  e: React.MouseEvent<HTMLElement, MouseEvent>;
};
