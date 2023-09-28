import "./App.css";
import { allHeroes } from "./heroData";
import { useState } from "react";

function App() {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (heroName) => {
    let newFavArr = [...favourites];
    if (newFavArr.indexOf(heroName) === -1) {
      newFavArr.push(heroName);
      setFavourites(newFavArr);
    }
  };
  const removeFavourite = (splicedIndex) => {
    let newFavArr = [...favourites];
    newFavArr.splice(splicedIndex, 1);
    setFavourites(newFavArr);
  };
  return (
    <div className="App">
      <h1>Hero Wiki</h1>

      <h1>Favourite Heroes</h1>
      
      {favourites.map((heroName, index) => {
        return (
          <div key={index}>
            <p>{heroName}</p>
            <button onClick={() => removeFavourite(index)}>X</button>
          </div>
        );
      })}

      {allHeroes.map((heroObject, index) => {
        return (
          <HeroCard
            key={index}
            heroInfo={heroObject}
            favFunc={addToFavourites}
          />
        );
      })}
    </div>
  );
}

const HeroCard = ({ heroInfo, favFunc }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <h2> Hero: {heroInfo.hero}</h2>
      {toggle && (
        <>
          <p>Info: {heroInfo.info}</p>
          <p>villain: {heroInfo.villain}</p>
        </>
      )}

      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Hide info" : "Show Info"}
      </button>
      <button onClick={() => favFunc(heroInfo.hero)}>Add to Favourites</button>
    </div>
  );
};

export default App;
