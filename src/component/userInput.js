import React, { useState } from "react";

export const userInput = () => {
  const [userGuessNumber, setUserGuessNumber] = useState("");

  return (
    <div className="user-guess-number">
      <input
        type="number"
        value={userGuessNumber}
        placeholder="Guess the secret number"
      />
    </div>
  );
};
