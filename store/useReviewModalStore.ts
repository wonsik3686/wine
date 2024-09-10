import { create } from 'zustand';

// 수정된 useReviewModalStore
type ReviewState = {
  content: string;
  selectedTags: string[];
  tasteValues: number[]; // 배열로 유지
  wineId: number;
  wineName: string;
  rating: number;
  setContent: (content: string) => void;
  setSelectedTags: (tags: string[]) => void;
  setTasteValues: (values: number[]) => void;
  setWineId: (id: number) => void;
  setRating: (rating: number) => void;
  resetReview: () => void;
};

// 테스트를 위한 더미 데이터
const TestWineDetail = {
  id: 3,
  name: 'Sentinel Carbernet Sauvignon 2016',
};

export const useReviewModalStore = create<ReviewState>((set) => ({
  content: '',
  selectedTags: [],
  tasteValues: [5, 5, 5, 5], // 4개의 슬라이더 값 초기화
  wineId: TestWineDetail.id,
  wineName: TestWineDetail.name,
  rating: 0,
  setContent: (content) => set({ content }),
  setSelectedTags: (tags) => set({ selectedTags: tags }),
  setTasteValues: (values) => set({ tasteValues: values }),
  setWineId: (id) => set({ wineId: id }),
  setRating: (rating) => set({ rating }),
  resetReview: () =>
    set({
      content: '',
      selectedTags: [],
      tasteValues: [5, 5, 5, 5],
    }),
}));
