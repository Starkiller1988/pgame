import React, { useEffect, useState } from "react";
import "./App.css";
import IMG1 from "./images/pokemon-title.png";
import IMG2 from "./images/bisasam.png";
import IMG3 from "./images/glumanda.png";
import IMG4 from "./images/schiggy.png";
import IMG5 from "./images/pikachu.png";
import IMG6 from "./images/mewtwo.png";
import IMG7 from "./images/pummeluff.png";
import IMG8 from "./images/pokeball.png";
import IMG9 from "./images/Ash.png";
import IMG10 from "./images/Sugimori_Pokéball.png";
import IMG11 from "./images/teamrocket2.png";
import IMG12 from "./images/gsball.png";


export default function App() {
  const [openedCard, setOpenedCard] = useState([]);
  const [matched, setMatched] = useState([]);

  const pokemonArray = [
    { id: 1 ,name: "Pikachu", 
      image: IMG5
   },
    { id: 2 ,name: "Bisasam",
      image: IMG2
   },
    { id: 3 ,name: "Mewtwo", 
      image: IMG6
  },
    { id: 4 ,name: "Glumanda",
      image: IMG3
     },
    { id: 5 ,name: "Schiggy", 
      image: IMG4
  },
    { id: 6, name: "Pummeluff",
      image: IMG7
  },
  { id: 7, name: "Title",
      image: IMG1
  },
  { id: 8, name: "Ash",
      image: IMG9
  },
  { id: 9, name: "Pokéball",
  image: IMG10
},
{ id: 10, name: "TeamRocket",
  image: IMG11
},
{ id: 11, name: "GSBALL",
  image: IMG12
},
  ];

  //currently there are 4 pokemons but we need the pair

  const pairOfPokemons = [...pokemonArray, ...pokemonArray];

  function flipCard(index, image) {
    setOpenedCard((opened) => [...opened, index]);
  }

  useEffect(() => {
    if (openedCard < 2) return;

    const firstMatched = pairOfPokemons[openedCard[0]];
    const secondMatched = pairOfPokemons[openedCard[1]];

    if (secondMatched && firstMatched.image === secondMatched.image) {
      setMatched([...matched, firstMatched.image]);
    }

    if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);
  }, [openedCard]);

  return (
    <div className="App">
      <div className="cards">
        {pairOfPokemons.map((pokemonArray, index) => {
          //lets flip the card

          let isFlipped = false;

          if (openedCard.includes(index)) isFlipped = true;
          if (matched.includes(pokemonArray.image)) isFlipped = true;
          return (
            <div
              className={`pokemon-card ${isFlipped ? "flipped" : ""} `}
              key={index}
              onClick={() => flipCard(index)}
            >
              <div className="inner">
                <div className="front">
                  <img
                    src={pokemonArray.image}
                    alt="pokemon"
                    width="100"
                  />
                </div>
                <div className="outer">
                <div className="back">
                  <img src={IMG8} 
                  alt="back-card" 
                  width="100" 
                  />
                </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
