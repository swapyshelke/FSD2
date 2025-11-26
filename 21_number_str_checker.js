// take input from user (number, string)
// check number is even or odd
// string is plaindrome is or not
// diaplay appropriate message to user




import React, { useState } from "react";

function Ass21() {
  const [no, setNo] = useState("");
  const [str, setStr] = useState("");

  // Derived results directly from number and text
  const numResult = (() => {
    const n = parseInt(no, 10);

    if (no.trim() === "") return "";  
    if (isNaN(n)) return "Enter a valid number";
    return n % 2 === 0 ? "Number is Even" : "Number is Odd";
  })();

  const strresult = (() => {
    if (str.trim() === "") return "";
    const reversed = str.split("").reverse().join("");
    return str === reversed
      ? "String is a palindrome"
      : "String is not a palindrome";
  })();

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Number & String Checker</h1>

      <input
        type="text"
        placeholder="Enter Number"
        value={no}
        onChange={(e) => setNo(e.target.value)}
      />
      <p>{numResult}</p>
      <br />
      <input
        type="text"
        placeholder="Enter String"
        value={str}
        onChange={(e) => setStr(e.target.value)}
      />
        <p>{strresult}</p>
 </div>
  );
}

export default Ass21;

