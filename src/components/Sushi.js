import React, { useState } from "react";

function Sushi({id, name, price, image, setEmptyPlates, setBudget, budget, isEaten, setSushiList}) {

  function eatSushi() {
    if (isEaten) return;
    if (budget - price < 0){
      window.alert("You don't have enough left in your budget for that sushi!");
      return;
    }
    setEmptyPlates(emptyPlates => emptyPlates + 1);
    setBudget(budget - price);
    setSushiList(sushiList => sushiList.map(sushi => sushi.id === id ? {...sushi, isEaten: true} : sushi))
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={eatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
