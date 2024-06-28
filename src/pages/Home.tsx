import { useState } from "react";

import MonkeyImage from "../assets/monkey.svg";
import SettingImage from "../assets/setting.svg";
import StarImage from "../assets/Star.svg";
import StartImage from "../assets/startButton.svg";
import NextImage from "../assets/NextImage.svg";
import CloudImage from "../assets/cloud.svg";
import BackArrowImage from "../assets/BackArrow.svg";
import YesButtonImage from "../assets/YesImage.svg";
import finalBg from "../assets/finalBgscreen.svg";
import { useNavigate } from "react-router-dom";
import sound from "../assets/click1.mp3";
const Home = () => {
  const [showNext, setShowNext] = useState(false);
  const [showYes, setShowYes] = useState(false);
  const navigate = useNavigate();
  const handleNext = () => {
    const audio = new Audio(sound);
    audio.play();

    setShowNext(true);
  };

  const handlePrev = () => {
    const audio = new Audio(sound);
    audio.play();
    setShowNext(false);
  };

  const handleYes = () => {
    const audio = new Audio(sound);
    audio.play();
    setShowYes(true);
  };

  const handleInstruction = () => {
    const audio = new Audio(sound);
    audio.play();
    navigate("/instruction");
  };
  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${finalBg})` }}
    >
      <img
        src={MonkeyImage}
        alt="Monkey"
        className="absolute w-[40%] z-10 cursor-pointer h-[60%] mb-5 bottom-1 left-1/2 transform -translate-x-1/2 transition-transform hover:scale-110"
      />
      <div className="relative w-full h-full">
        <img
          src={CloudImage}
          className="w-[30%] h-[40%] absolute left-1/2 transform -translate-x-1/2 hover:scale-95"
          alt="Cloud"
        />
        {showNext == true && (
          <img
            className="w-[20%] h-[20%] hover:scale-110 pt-5 cursor-pointer"
            src={BackArrowImage}
            alt="NextImage"
            onClick={handlePrev}
          />
        )}
        {showNext == false ? (
          <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-2/2 text-[#11AEC6] text-3xl font-bold">
            Welcome Kiddo !
          </h1>
        ) : showYes == false ? (
          <>
            <h1 className="absolute top-10 mt-5 left-1/2 transform -translate-x-1/2 -translate-y-2/2 text-[#11AEC6] text-3xl font-bold">
              Hi , I am Mizo !
            </h1>
            <h1 className="absolute top-20 mt-5 left-1/2 transform -translate-x-1/2 -translate-y-2/2 text-[#11AEC6] text-3xl font-bold">
              and I love bananas
            </h1>
          </>
        ) : (
          <span className="absolute top-10 mt-5 left-1/2 transform -translate-x-1/2 -translate-y-2/2 text-[#11AEC6] text-3xl font-bold">
            Can you help me
            <h1 className="absolute  text-[#11AEC6] text-3xl font-bold">
              get some ? 🤔
            </h1>
          </span>
        )}
      </div>
      <div className="absolute bottom-10 left-1/4 transform -translate-x-1/2 flex space-x-4">
        <img
          className="w-16 h-10 hover:scale-110 mr-10 cursor-pointer"
          src={SettingImage}
          alt="Setting"
        />
        <img
          className="w-16 h-10 mr-10 hover:scale-110 cursor-pointer"
          src={StarImage}
          alt="Star"
        />
      </div>
      <div className="absolute bottom-1 left-3/4 transform -translate-y-1/2">
        {showNext == false ? (
          <img
            className="w-[70%] h-[50%] hover:scale-110 cursor-pointer"
            src={StartImage}
            alt="Start"
            onClick={handleNext}
          />
        ) : showYes == false ? (
          <img
            className="w-[70%] h-[50%] hover:scale-110 cursor-pointer"
            src={NextImage}
            alt="NextImage"
            onClick={handleYes}
          />
        ) : (
          <img
            className="w-[70%] h-[50%] hover:scale-110 cursor-pointer"
            src={YesButtonImage}
            alt="NextImage"
            onClick={handleInstruction}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
