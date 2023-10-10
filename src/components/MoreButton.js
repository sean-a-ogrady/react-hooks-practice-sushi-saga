import React from "react";

function MoreButton({ sushiList, setDisplayedSushi }) {
  function moveConveyerBelt() {
    setDisplayedSushi(displayedSushi =>
      displayedSushi[0] + 4 >= sushiList.length ?
      [0, 4] :
      [displayedSushi[0] + 4, displayedSushi[1] + 4]
      )
  }
  return <button onClick={moveConveyerBelt}>More sushi!</button>;
}

export default MoreButton;
