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
