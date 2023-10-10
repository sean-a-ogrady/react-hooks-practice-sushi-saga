import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({setEmptyPlates, setBudget, budget}) {
  const url = "http://localhost:3001/sushis/";

  const [sushiList, setSushiList] = useState([]);
  const [displayedSushi, setDisplayedSushi] = useState([0, 4]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setSushiList(data.map(sushi => {return {...sushi, isEaten: false}})));
  }, [])

  return (
    <div className="belt">
      {sushiList.slice(displayedSushi[0], displayedSushi[1]).map(sushi =>
        <Sushi
          key={sushi.id}
          id={sushi.id}
          name={sushi.name}
          price={sushi.price}
          image={sushi.img_url}
          setEmptyPlates={setEmptyPlates}
          setBudget={setBudget}
          budget={budget}
          isEaten={sushi.isEaten}
          setSushiList={setSushiList}
        />)}
      <MoreButton sushiList={sushiList} setDisplayedSushi={setDisplayedSushi} />
    </div>
  );
}

export default SushiContainer;
