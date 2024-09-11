/* eslint-disable import/no-cycle */

import { ReviewModalProps } from '@/components/modal/reviewmodal/AddReviewModal';
import { create } from 'zustand';

type ReviewState = {
  id: number;
  content: string;
  selectedTags: string[];
  tasteValues: number[];
  rating: number;
  reviewModalMode: ReviewModalProps['mode'];
  selectedReviewToUpdateId: number;
  setId: (id: number) => void;
  setContent: (content: string) => void;
  setSelectedTags: (tags: string[]) => void;
  setTasteValues: (values: number[]) => void;
  setRating: (rating: number) => void;
  setReviewState: (review: {
    content: string;
    selectedTags: string[];
    tasteValues: number[];
    rating: number;
  }) => void;
  resetReview: () => void;
  setReviewModalMode: (mode: ReviewModalProps['mode']) => void;
  setSelectedReviewToUpdateId: (id: number) => void;
};

export const useReviewModalStore = create<ReviewState>((set) => ({
  id: 0,
  content: '',
  selectedTags: [],
  tasteValues: [5, 5, 5, 5],
  rating: 0,
  reviewModalMode: 'add',
  selectedReviewToUpdateId: 0,
  setId: (id) => set({ id }),
  setContent: (content) => set({ content }),
  setSelectedTags: (tags) => set({ selectedTags: tags }),
  setTasteValues: (values) => set({ tasteValues: values }),
  setRating: (rating) => set({ rating }),
  setReviewState: ({ content, selectedTags, tasteValues, rating }) =>
    set({ content, selectedTags, tasteValues, rating }),
  resetReview: () =>
    set({
      content: '',
      selectedTags: [],
      tasteValues: [5, 5, 5, 5],
      rating: 0,
    }),
  setReviewModalMode: (mode: ReviewModalProps['mode']) =>
    set({ reviewModalMode: mode }),
  setSelectedReviewToUpdateId: (id: number) =>
    set({ selectedReviewToUpdateId: id }),
}));
