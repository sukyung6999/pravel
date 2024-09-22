import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type StepState = {
  step: number;
};

type StepAction = {
  moveToIntro: () => void;
  prevStep: () => void;
  nextStep: () => void;
};

export const useOnboardingStepStore = create<StepState & StepAction>((set) => ({
  step: 0,
  moveToIntro: () => set(() => ({ step: 0 })),
  prevStep: () => set(({ step }) => ({ step: step - 1 })),
  nextStep: () => set(({ step }) => ({ step: step + 1 })),
}));

type StateState = {
  location: string;
  title: string;
  adult: number;
  child: number;
  startDate?: Date;
  endDate?: Date;
  startPoint: string;
  endPoint: string;
};

type StateAction = {
  onChange: <K extends keyof StateState>(key: K, value: StateState[K]) => void;
  onChangeFn: <K extends keyof StateState>(
    key: K,
    value: (value: StateState[K]) => StateState[K],
  ) => void;
};

export const useOnboardingStateStore = create<StateState & StateAction>()(
  devtools(
    (set) => ({
      location: '',
      title: '',
      adult: 1,
      child: 0,
      startDate: undefined,
      endDate: undefined,
      startPoint: '',
      endPoint: '',
      onChange: (key, value) => set((state) => ({ ...state, [key]: value })),
      onChangeFn: (key, fn) =>
        set((state) => ({ ...state, [key]: fn(state[key]) })),
    }),
    {
      name: 'onboarding-store',
    },
  ),
);
