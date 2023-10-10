import React, { useState } from "react";

export default function IncreaseBudgetForm({setBudget}) {
    const [formText, setFormText] = useState(0);

    return (
        <form id="budget-form" onSubmit={event => {
            event.preventDefault();
            setBudget(budget => parseInt(budget) + parseInt(formText));
        }}>
            <label for="budget-input">Increase Budget By: </label>
            <input id="budget-input" type="number" value={formText} onChange={event => event.target.value.startsWith("-") ? null : setFormText(event.target.value)} />
            <input type="submit" value="Submit" />
        </form>
    )
}