import NextImage from "../assets/NextImage.svg";
import { NextButtonProps } from "../types/types";
const NextButton = ({ handleNextMove }: NextButtonProps) => {
  return (
    <div className="absolute bottom-1 left-3/4 transform -translate-y-1/2">
      <img
        className="w-[70%] h-[50%] hover:scale-110"
        src={NextImage}
        alt="NextImage"
        onClick={handleNextMove}
      />
    </div>
  );
};

export default NextButton;
