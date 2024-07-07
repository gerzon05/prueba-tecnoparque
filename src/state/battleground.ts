import { create } from 'zustand';

interface BearState {
  bears: number;
  increase: (by: number) => void;
}
interface BearState2 {
  bears: number;
  increaseAuto: (by: number) => void;
}

export const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by }))
}));

export const useBearStore2 = create<BearState2>()((set) => ({
  bears: 0,
  increaseAuto: (by) => set((state) => ({ bears: state.bears + by }))
}));
