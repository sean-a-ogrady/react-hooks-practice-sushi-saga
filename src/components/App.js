import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import IncreaseBudgetForm from "./IncreaseBudgetForm";

const API = "http://localhost:3001/sushis";

/*
HEIRARCHY
---------
App
| SushiContainer
| | Sushi
| | MoreButton
| Table

DELIVERABLES
------------
- [x] GET the sushi list and display
- [x] Only 4 sushi are rendered at a time
- [x] Clicking the "More Sushi" button shows the next 4 sushi, loop back around
- [x] Clicking a sushi will eat the sushi, causing it to be removed from the plate, empty plate appears
- [x] Whenever a sushi is eaten, customers should be charged, developer decides budget
- [x] Customers cannot eat any sushi that exceeds the amount of money remaining in their balance

BONUS DELIVERABLES
------------------
- [x] Add a form for customers to add more money to their balance
- [x] Return to the beginning of conveyer belt when the end of the sushi line is reached
- [ ] Anything else

BRAINSTORMING
-------------
- When do SushiContainer and Table need to communicate?
  - Sushi eaten event
    - Set empty plate for that sushi
    - Set empty plate on the table
    - Reduce budget inside Table
*/

function App() {

  const [emptyPlates, setEmptyPlates] = useState(0);
  const [budget, setBudget] = useState(100);

  return (
    <div className="app">
      <IncreaseBudgetForm setBudget={setBudget} />
      <SushiContainer setEmptyPlates={setEmptyPlates} setBudget={setBudget} budget={budget} />
      <Table budget={budget} emptyPlates={emptyPlates} />
    </div>
  );
}

export default App;
