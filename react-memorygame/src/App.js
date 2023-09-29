import React, { useState } from "react";
import "./App.css";
import "./card.css";
import { cardsArray } from "./cards";
import cardBack from "./images/bluey-logo.png";
import ReactCardFlip from "react-card-flip";

function App() {
  const [cards, setCards] = useState(shuffleCards(cardsArray));
  const [openCards, setOpenCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [clearedCards, setClearedCards] = useState(0);
  const [win, setWin] = useState(0);
  const [bestScore, setBestScore] = useState(Infinity);

  const checkWin = () => {
    console.log(clearedCards);
    if (clearedCards === 14) {
      setWin(win + 1);
      reshuffle();
      if (bestScore > moves) {
        setBestScore(moves);
      }
    }
  };
  function shuffleCards(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      const temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  }

  const reshuffle = () => {
    let cardShuffle = [...cards];
    for (let i = 0; i < 16; i++) {
      cardShuffle[i].Flipped = false;
    }
    setCards(shuffleCards(cardShuffle));
    setClearedCards(0);
    setMoves(0);
  };

  const handleClick = (index) => {
    let cardCopy = [...cards];
    if (cardCopy[index].Flipped) return;
    cardCopy[index].Flipped = !cardCopy[index].Flipped;
    setCards(cardCopy);
    let openCopy = [...openCards];
    if (openCopy.length < 2) {
      openCopy.push(index);
      setOpenCards(openCopy);
    } else {
      if (cardCopy[openCopy[0]].type === cardCopy[openCopy[1]].type) {
        console.log("match");
        setMoves(moves + 1);
        setClearedCards(clearedCards + 2);
        openCopy = [];
      } else {
        cardCopy[openCopy[0]].Flipped = !cardCopy[openCopy[0]].Flipped;
        cardCopy[openCopy[1]].Flipped = !cardCopy[openCopy[1]].Flipped;
        setMoves(moves + 1);
        openCopy = [];
      }
      openCopy.shift();
      openCopy.push(index);
      setOpenCards(openCopy);
    }
    checkWin();
  };
  return (
    <div className="App">
      <div className="instructions">
      <h1>Bluey Card Matching Game</h1>
      <h2>Match the pairs to win!</h2>
      </div>
      <div className="scoreWindow">
        <h2>Moves : {moves}</h2>
        <h2>Best Score : {bestScore}</h2>
        <h2>Wins : {win}</h2>
      </div>
      <div className="Deck">
        {cards.map((cardObject, index) => {
          return (
            <GameCard
              key={index}
              clickFunc={() => handleClick(index)}
              cardInfo={cardObject}
            />
          );
        })}
      </div>
      <br />
      <button className="reshuffle" onClick={reshuffle}>
        Reshuffle
      </button>
    </div>
  );
}

const GameCard = ({ cardInfo, clickFunc }) => {
  return (
    <div className="scene">
      <div className="card" onClick={clickFunc}>
        <ReactCardFlip isFlipped={!cardInfo.Flipped} flipDirection="horizontal">
          <img
            className="cardFace cardFaceFront"
            src={cardInfo.Image}
            alt={cardInfo.Type}
          ></img>
          <img
            className="cardFace cardFaceBack"
            src={cardBack}
            alt="blueyLogo"
          ></img>
        </ReactCardFlip>
      </div>
    </div>
  );
};
export default App;
