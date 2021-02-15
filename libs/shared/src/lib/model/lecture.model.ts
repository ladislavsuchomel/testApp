export interface LectureModel {
  course: Course;
  screens: Array<Screen>
}

export interface Course {
  name: string;
  number: number;
}

export interface Screen {
  screenType: ScreenType;
  backgroundColor: string;
  screenData: IntroScreenData | FunFactData
}

export type ScreenType = 'INTRO' | 'FUN_FACT' | 'QUIZ' | 'GRID' | 'ROUND' | 'OUTRO' | 'SELECT_CORRECT';

export type InputType = 'number' | 'string';

export interface BackgroundGraphics {
  imageSrc: string;
  animationName: string;
}

export interface IntroScreenData {
  course: Course;
}

export interface FunFactData {
  funFacts: Array<FunFact>;
}

export interface FunFact {
  question: string;
  answer: string | number;
  answerSuffix: string | null;
  answerType: InputType,
  backgroundGraphics: BackgroundGraphics
}
