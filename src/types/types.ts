export interface ProgressBarProps {
  progress: number;
  totalSteps: number;
  yellowBananaImage: string;
  greyBananaImage: string;
}

export interface FruitCard {
  id: number;
  name: string;
  flipped: boolean;
  matched: boolean;
}

export interface WrongMovesDisplayProps {
  wrongMoves: number;
}

export const fruits = ["Apple", "Banana", "Orange", "Grape", "Mango", "Peach"];
export interface GameEndPopupProps {
  handleTryAgain: () => void;
  handleCancel: () => void;
}
export interface NextButtonProps {
  handleNextMove: () => void;
}
export interface MatchedBoxProps {
  currentMatch: {
    fruit: string;
    letter: string;
  } | null;
}
