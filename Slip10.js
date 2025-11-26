import React, { useState } from "react";

function Slip10() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);

    // Blank input
    if (val.trim() === "") {
      setMessage("Please enter a number.");
      setSum(0);
      return;
    }

    // Not valid number (only digits allowed)
    if (!/^\d+$/.test(val)) {
      setMessage("Invalid input! Only digits allowed.");
      setSum(0);
      return;
    }

    // Valid input: calculate sum of digits
    const total = val.split("").map((d) => Number(d))  // convert to [1,2,3]
      .reduce((a, b) => a + b, 0); // sum → 6

    setMessage("Valid number!");
    setSum(total);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Number Checker</h2>

      <input
        type="text"
        placeholder="Type a number"
        value={value}
        onChange={handleChange}
        style={{ padding: "8px", width: "200px" }}
      />

      <div style={{ marginTop: "20px" }}>
        <p>{message}</p>
        {message === "Valid number!" && <p>Sum of digits: {sum}</p>}
      </div>
    </div>
  );
}

export default Slip10;
