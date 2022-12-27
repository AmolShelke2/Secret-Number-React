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

    if (userGuessNumber === "") {
      alert("Add a valid number");
      return;
    } else {
      setUserGuessNumber("");
    }

    if (userGuessNumber === secretNumber) {
      console.log("You guess the secret number");
    } else if (secretNumber < userGuessNumber) {
      console.log("You guess the secret number too high");
    } else if (secretNumber > userGuessNumber) {
      console.log("You guess the secret number too low");
    }
  };

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
