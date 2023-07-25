import { useState } from "react";
import styles from "./UserForm.module.css";
import ErrorForm from "./ErrorForm";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const nameOnChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const ageOnChangeHandler = (e) => {
    setUserAge(e.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(userName, userAge);
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setIsValid(false);
      setErrorMessage("Enter A Valid Data!!!!!!!");
    } else if (+userAge <= 0) {
      setIsValid(false);
      setErrorMessage("Please Enter a Valid Age!!!");
    } else {
      props.onSaveUser({ name: userName, age: userAge });
      setUserName("");
      setUserAge("");
    }
  };

  const cancelOnClickHandler = () => {
    props.onCancelEditing();
  };
  const onOkeyHandler = () => {
    setIsValid(true);
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <div className={styles.income}>
        <label>User Name</label>
        <input
          onChange={nameOnChangeHandler}
          value={userName}
          type="text"
        ></input>
      </div>
      <div className={styles.income}>
        <label>Age</label>
        <input
          onChange={ageOnChangeHandler}
          value={userAge}
          type="number"
        ></input>
      </div>
      <div>
        <button type="submit" className={styles.button}>
          Add New User
        </button>
        <button onClick={cancelOnClickHandler} className={styles.button}>
          Cancel
        </button>
      </div>
      {!isValid && (
        <ErrorForm
          message={errorMessage}
          onOkeyClick={onOkeyHandler}
        ></ErrorForm>
      )}
    </form>
  );
};

export default UserForm;
