import { GameEndPopupProps } from "../types/types";

const GameEndPopup = ({ handleTryAgain, handleCancel }: GameEndPopupProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-green-400 bg-opacity-50">
      <div className="bg-slate-100 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Game Over</h2>
        <p className="mb-4 text-[#11AEC6] text-lg font-semibold">
          You've reached the maximum number of wrong moves.
        </p>
        <div className="flex justify-center gap-5 space-x-4 ">
          <button
            className="bg-blue-500 text-white font-semibold px-4 py-3 rounded-lg hover:bg-blue-600"
            onClick={handleTryAgain}
          >
            Try Again
          </button>
          <button
            className="bg-red-500 text-white font-semibold px-4 py-3 rounded-lg hover:bg-red-600"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameEndPopup;
