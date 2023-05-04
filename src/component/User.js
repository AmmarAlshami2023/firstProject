import React, { useState } from "react";
import "./User.css";
import Card from "./Card";
import ErrorModal from "./ErrorModal";

export default function User(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "please set name and age (not empty)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "please set  age >0",
      });
      return;
    }
    props.onUser(enteredUserName, enteredAge);

    setEnteredUserName("");
    setEnteredAge("");
  };
  const userNameChange = function (event) {
    setEnteredUserName(event.target.value);
  };
  const AgeChange = function (event) {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => setError(null);
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card>
        <form onSubmit={addUserHandler} className="AddUser">
          <label htmlFor="UserName">UserName</label>
          <input
            type="text"
            id="UserName"
            value={enteredUserName}
            className="Texts"
            onChange={userNameChange}
          />

          <label htmlFor="Age">Age(years)</label>
          <input
            type="number"
            id="Age"
            className="Texts"
            value={enteredAge}
            onChange={AgeChange}
          />

          <button className="butten" onClick={addUserHandler}>
            {" "}
            Add User
          </button>
        </form>
      </Card>
    </div>
  );
}
