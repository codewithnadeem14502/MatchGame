import { useState, useEffect } from "react";
import finalBg from "../assets/finalBgscreen.svg";
import { useNavigate } from "react-router-dom";
import bluecard from "../assets/blueheartCard.svg";
import redcard from "../assets/redCard.svg";
import NextImage from "../assets/NextImage.svg";
import BackButton from "../components/BackButton";
import sound from "../assets/click2.mp3";
import cardClick1 from "../assets/cardClick.mp3";
import cardClick2 from "../assets/cardClick2.mp3";
import ProgressBar from "../components/ProgressBar";
import yellowBanana from "../assets/YellowBanana.svg";
import greyBanana from "../assets/GreyBanana.svg";
interface FruitCard {
  id: number;
  name: string;
  flipped: boolean;
  matched: boolean;
}

const fruits = ["Apple", "Banana", "Orange", "Grape", "Mango", "Peach"];

const Activity: React.FC = () => {
  const navigate = useNavigate();
  const [fruitCards, setFruitCards] = useState<FruitCard[]>([]);
  const [letterCards, setLetterCards] = useState<FruitCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<FruitCard[]>([]);
  const [wrongMoves, setWrongMoves] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffledFruits = [...fruits].sort(() => Math.random() - 0.5);
    const newFruitCards = shuffledFruits.map((fruit, index) => ({
      id: index,
      name: fruit,
      flipped: false,
      matched: false,
    }));
    const newLetterCards = shuffledFruits.map((fruit, index) => ({
      id: index + 6,
      name: fruit[0].toUpperCase(),
      flipped: false,
      matched: false,
    }));
    setFruitCards(newFruitCards);
    setLetterCards(newLetterCards);
    setSelectedCards([]);
    setWrongMoves(0);
    setMatchedPairs(0);
    setShowNextButton(false);
  };

  const handleCardClick = (card: FruitCard, isFruitCard: boolean) => {
    if (
      card.matched ||
      card.flipped ||
      selectedCards.length === 2 ||
      showNextButton
    )
      return;

    const newCards = isFruitCard
      ? fruitCards.map((c) => (c.id === card.id ? { ...c, flipped: true } : c))
      : letterCards.map((c) =>
          c.id === card.id ? { ...c, flipped: true } : c
        );

    if (isFruitCard) {
      setFruitCards(newCards);
    } else {
      setLetterCards(newCards);
    }

    setSelectedCards([...selectedCards, card]);

    if (selectedCards.length === 1) {
      const [firstCard] = selectedCards;
      if (
        (isFruitCard && firstCard.name === card.name[0]) ||
        (!isFruitCard && firstCard.name[0].toUpperCase() === card.name)
      ) {
        // Match found
        setMatchedPairs((prev) => prev + 1);
        setFruitCards((prev) =>
          prev.map((c) =>
            c.name === card.name || c.id === firstCard.id
              ? { ...c, matched: true, flipped: true }
              : c
          )
        );
        setLetterCards((prev) =>
          prev.map((c) =>
            c.name === card.name || c.id === firstCard.id
              ? { ...c, matched: true, flipped: true }
              : c
          )
        );
        setShowNextButton(true);
      } else {
        // No match
        setWrongMoves((prev) => prev + 1);
        setTimeout(() => {
          setFruitCards((prev) =>
            prev.map((c) => ({ ...c, flipped: c.matched }))
          );
          setLetterCards((prev) =>
            prev.map((c) => ({ ...c, flipped: c.matched }))
          );
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  const handleNextMove = () => {
    setSelectedCards([]);
    setFruitCards((prev) => prev.map((c) => ({ ...c, flipped: false })));
    setLetterCards((prev) => prev.map((c) => ({ ...c, flipped: false })));
    setShowNextButton(false);
    const audio = new Audio(sound);
    audio.play();
    if (matchedPairs === 6) {
      navigate("/reward");
    }
  };
  const playSound1 = () => {
    const audio = new Audio(cardClick1);
    audio.play();
  };
  const playSound2 = () => {
    const audio = new Audio(cardClick2);
    audio.play();
  };
  return (
    <div
      className={`w-screen h-screen bg-cover bg-center relative flex flex-col items-center justify-center ${
        showNextButton ? "bg-black bg-opacity-50" : ""
      }`}
      style={{ backgroundImage: `url(${finalBg})` }}
    >
      {showNextButton && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 pointer-events-none">
          {showNextButton && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 pointer-events-none">
              <span className="text-orange-500 text-5xl font-bold text-border">
                it's a match!
              </span>
            </div>
          )}
        </div>
      )}

      <div className="absolute left-10 top-1 z-10 hover:scale-110 cursor-pointer">
        <BackButton />
      </div>
      <div className="top-10 absolute">
        <ProgressBar
          progress={matchedPairs}
          totalSteps={6}
          yellowBananaImage={yellowBanana}
          greyBananaImage={greyBanana}
        />
      </div>
      <div className="flex justify-center space-x-16">
        <div className="grid grid-cols-3 gap-4">
          {fruitCards.map((card) => (
            <div
              key={card.id}
              className={`w-24 h-28 ${
                card.matched ? "invisible" : ""
              } flex items-center justify-center bg-white  rounded-lg text-purple-500 text-2xl  font-bold cursor-pointer transition-transform duration-300 ${
                card.flipped ? "rotate-y-180" : ""
              }`}
              onClick={() => handleCardClick(card, true)}
            >
              {card.flipped && !card.matched ? (
                card.name
              ) : (
                <img
                  src={redcard}
                  alt="Red Card"
                  className="w-full h-full "
                  onClick={playSound1}
                />
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {letterCards.map((card) => (
            <div
              key={card.id}
              className={`w-24 h-28 ${
                card.matched ? "invisible" : ""
              } flex items-center justify-center text-purple-500 bg-white  rounded-lg  text-3xl font-bold cursor-pointer transition-transform duration-300 ${
                card.flipped ? "rotate-y-180" : ""
              }`}
              onClick={() => handleCardClick(card, false)}
            >
              {card.flipped && !card.matched ? (
                card.name
              ) : (
                <img
                  src={bluecard}
                  alt="Blue Card"
                  className="w-full h-full"
                  onClick={playSound2}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="text-2xl  font-bold mt-[20px]  bg-[#11AEC6] border-4 border-white  m-5 text-white p-5 rounded-lg">
        Wrong Moves: {wrongMoves}
      </div>

      {showNextButton && (
        <div className="absolute bottom-1 left-3/4 transform -translate-y-1/2">
          <img
            className="w-[70%] h-[50%] hover:scale-110"
            src={NextImage}
            alt="NextImage"
            onClick={handleNextMove}
          />
        </div>
      )}
    </div>
  );
};

export default Activity;
