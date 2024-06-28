import React from "react";

interface ProgressBarProps {
  progress: number;
  totalSteps: number;
  yellowBananaImage: string;
  greyBananaImage: string;
}

const ProgressBar = ({
  progress,
  totalSteps,
  yellowBananaImage,
  greyBananaImage,
}: ProgressBarProps): React.ReactElement => {
  const percentage = (progress / totalSteps) * 100;

  return (
    <div className="w-64 h-8 bg-gray-200 rounded-full overflow-hidden relative">
      <div
        className="h-full bg-yellow-400 transition-all duration-300 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
      <img
        src={progress === totalSteps ? yellowBananaImage : greyBananaImage}
        alt="Banana"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-8"
      />
    </div>
  );
};

export default ProgressBar;
