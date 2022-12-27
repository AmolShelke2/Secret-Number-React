import React, { useState } from "react";

const secretNumber = Math.ceil(Math.random() * 100);

const UserInput = () => {
  const [userGuessNumber, setUserGuessNumber] = useState("");
  // const [secretNumber, setSecretNumber] = useState("");

  const onChangeHanlder = (e) => {
    setUserGuessNumber(+e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setUserGuessNumber("");
  };

  console.log(userGuessNumber);
  return (
    <div className="user-guess-number">
      <form onSubmit={submitHandler}>
        <input
          type="number"
          value={userGuessNumber}
          onChange={onChangeHanlder}
          placeholder="Guess the secret number"
        />
        <button type="submit" onSubmit={submitHandler}>
          Check
        </button>
      </form>
    </div>
  );
};

export default UserInput;
