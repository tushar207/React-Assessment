import React, { useState, useContext } from "react";

// Create context
const ChecklistContext = React.createContext();

// Create provider component
export function ChecklistProvider({ children }) {
  // Create React state to track checkbox value
  const [checkedItems, setCheckedItems] = useState({
    option1: false,
    option2: false,
  });

  // Function to update checkbox value based on event.target.checked
  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  // Create provider value
  const value = {
    checkedItems,
    handleChange,
  };

  // Provide the value
  return (
    <ChecklistContext.Provider value={value}>
      {children}
    </ChecklistContext.Provider>
  );
}

// Checklist component
export function Checklist() {
  // Use useContext hook to access context
  const { checkedItems, handleChange } = useContext(ChecklistContext);

  return (
    <div style={{ textAlign: "center" }} className="mt-5 pt-5">
      {/* Dynamically display selected options */}
      <ul>
        {Object.entries(checkedItems).map(([key, value]) => (
          <h4 key={key}>
            <span>
              {/* Content for the span tag can be different for each option */}
              {key === "option1" && "Are you a Citizen : "}
              {key === "option2" && "Are you over 21 : "}
            </span>
            {value ? "Yes" : "No"}
          </h4>
        ))}
      </ul>
      <form>
        {/* Add checkbox input element to JSX code with onChange function */}
        <label>
          Are you a Citizen ? {"  "}
          <input
            type="checkbox"
            name="option1"
            checked={checkedItems["option1"]}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Are you over 21 ? {"  "}
          <input
            type="checkbox"
            name="option2"
            checked={checkedItems["option2"]}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}