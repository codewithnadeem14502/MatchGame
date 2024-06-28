import finalBg from "../assets/finalBgscreen.svg";
import { useNavigate } from "react-router-dom";
import startButton from "../assets/playButton.svg";
import whiteBox from "../assets/Card.svg";
import doubleCard from "../assets/DualCard.svg";
import blueheartCard from "../assets/blueheartCard.svg";
import AppleCard from "../assets/AppleCard.svg";
import BackButton from "../components/BackButton";
import sound from "../assets/click1.mp3";
const Instruction = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    const audio = new Audio(sound);
    audio.play();
    navigate(-1);
  };

  const handleActivity = () => {
    navigate("/activity");
  };
  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${finalBg})` }}
    >
      <div
        className="absolute left-10 z-10 hover:scale-110"
        onClick={handleHome}
      >
        <BackButton />
      </div>
      <div className="flex gap-2 absolute inset-0 justify-center items-center ">
        <div className="relative w-full h-full top-44 cursor-pointer">
          <img
            className="w-[50%] h-[30%]  z-10 absolute top-5 left-1/2 transform -translate-x-1/2"
            src={AppleCard}
            alt="NextImage"
          />
          <img
            className="relative w-[70%] h-[50%] mx-auto"
            src={whiteBox}
            alt="whiteBox"
          />
          <div className="absolute top-[35%] w-full text-center">
            <p className="font-bold text-2xl text-[#11AEC6]">
              Select a pink card.
            </p>
            <p className="font-semibold text-xl text-[#A6C930]">
              {" "}
              It has images.
            </p>
          </div>
        </div>

        <div className="relative w-full h-full top-44 cursor-pointer">
          <img
            className="w-[50%] h-[30%]  z-10 absolute top-5 left-1/2 transform -translate-x-1/2"
            src={blueheartCard}
            alt="NextImage"
          />
          <img
            className="relative w-[70%] h-[50%] mx-auto"
            src={whiteBox}
            alt="whiteBox"
          />
          <div className="absolute top-[35%] w-full text-center">
            <p className="font-bold text-2xl text-[#11AEC6]">
              Select a blue card.
            </p>
            <p className="font-semibold text-xl text-[#A6C930]">
              It has alphabets.
            </p>
          </div>
        </div>

        <div className="relative w-full h-full top-44 cursor-pointer">
          <img
            className="w-[70%] h-[40%]  z-10 absolute top-5 left-1/2 transform -translate-x-1/2"
            src={doubleCard}
            alt="NextImage"
          />
          <img
            className="relative w-[70%] h-[50%] mx-auto"
            src={whiteBox}
            alt="whiteBox"
          />
          <div className="absolute top-[33%] w-full text-center">
            <p className="font-bold text-2xl text-[#11AEC6]">Its a match !</p>
            <p className="font-semibold text-lg text-[#A6C930]">
              {" "}
              If they’re same
            </p>
            <p className="font-semibold text-lg text-[#A6C930]">
              otherwise retry :
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1 left-3/4 transform -translate-y-1/2 ">
        <img
          className="w-[70%] h-[50%] hover:scale-110 cursor-pointer"
          src={startButton}
          alt="img"
          onClick={handleActivity}
        />
      </div>
    </div>
  );
};

export default Instruction;
