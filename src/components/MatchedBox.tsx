import { MatchedBoxProps } from "../types/types";

const MatchedBox = ({ currentMatch }: MatchedBoxProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full text-center">
        <span className="text-orange-500 text-5xl font-bold mb-4 block">
          It's a match!
        </span>
        {currentMatch && (
          <div className="flex items-center justify-center my-10">
            <div className="w-[200px] h-[220px] flex items-center justify-center bg-[#FF896F] text-purple-500 font-bold text-4xl mr-4  border-4 border-white rounded-lg transform rotate-[-10deg]">
              {currentMatch.fruit}
            </div>
            <div className="w-[200px] h-[220px] flex items-center justify-center bg-[#FF896F] text-purple-500 font-bold text-4xl mr-4  border-4 border-white rounded-lg transform rotate-[10deg]">
              {currentMatch.letter}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchedBox;
