import { WrongMovesDisplayProps } from "../types/types";

const WrongMovesDisplay = ({ wrongMoves }: WrongMovesDisplayProps) => {
  return (
    <div className="text-2xl font-bold mt-[20px] bg-[#11AEC6] border-4 border-white m-5 text-white py-4 px-6 rounded-lg">
      Wrong Moves : {wrongMoves}
    </div>
  );
};

export default WrongMovesDisplay;
