import finalBg from "../assets/finalBgscreen.svg";
import finalBadge from "../assets/finalBadge.png";
import finalMonkey from "../assets/finalMonkey.png";
import bananas from "../assets/finalBananas.png";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useEffect } from "react";
import rewardMusic from "../assets/rewardMusic.mp3";
const Reward = () => {
  const navigate = useNavigate();
  useEffect(() => {
    new Audio(rewardMusic).play();
  }, []);
  const handleInstruction = () => {
    const audio = new Audio("../assets/click2.mp3");
    audio.play();
    navigate("/instruction");
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${finalBg})` }}
    >
      <div className="absolute left-5">
        <BackButton />
      </div>
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={handleInstruction}
      >
        <img
          src={finalBadge}
          className="w-[30%] h-[30%] animate-pop-up-once cursor-pointer"
          alt="finalBadge"
        />
        <img
          src={finalMonkey}
          className="absolute w-[20%] h-[30%] mt-[150px] animate-pop-up-once cursor-pointer"
          alt="finalBadge"
        />
        <img
          src={bananas}
          className="absolute w-[80%] h-[80%] mt-[150px] animate-pop-up-once cursor-pointer"
          alt="finalBadge"
        />
      </div>
    </div>
  );
};

export default Reward;
