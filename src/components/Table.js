import React from "react";

function Table({budget, emptyPlates}) {
  // renders an empty plate for every element in the array
  // const emptyPlates = plates.map((_, index) => (
  //   <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  // ));
  const emptyPlatesDivs = [];
  for (let i = 0; i < emptyPlates; i++){
    emptyPlatesDivs.push(<div key={i} className="empty-plate" style={{ top: -7 * i }} />)
  }

  return (
    <>
      <h1 className="remaining">
        You have: ${budget} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlatesDivs}</div>
      </div>
    </>
  );
}

export default Table;
