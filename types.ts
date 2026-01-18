
export interface Question {
  id: string;
  ciclo: string;
  modalidade: string;
  modulo: string;
  tema: string;
  problema: number;
  enunciado: string;
  alternativas: string[];
  gabarito: number;
}

// Added VideoLesson interface to fix import error in PremiumView.tsx
export interface VideoLesson {
  id: string;
  title: string;
}

export interface LastWatched {
  lessonId: string;
  lessonTitle: string;
  courseName: string;
  platformId: string;
}

export interface UserStats {
  displayName: string;
  totalAnswered: number;
  totalCorrect: number;
  totalErrors: number;
  streak: number;
  points: number;
  ciclo: string;
  isPremium: boolean;
  plan: 'basic' | 'premium';
  questionsToday: number;
  lastDailyReset?: string;
  watchedLessons?: string[];
  lastWatched?: LastWatched;
}
