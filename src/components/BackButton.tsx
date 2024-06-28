import { useNavigate } from "react-router-dom";
import BackArrowImage from "../assets/BackArrow.svg";
import sound from "../assets/click1.mp3";
const BackButton = () => {
  const navigate = useNavigate();
  function play() {
    new Audio(sound).play();
  }
  const handleHome = () => {
    navigate(-1);
    play();
  };
  return (
    <img
      className="w-[50%] h-[50%]   cursor-pointer"
      src={BackArrowImage}
      alt="NextImage"
      onClick={handleHome}
    />
  );
};

export default BackButton;
