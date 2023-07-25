import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const onClickHandler = () => {
    props.onEditing();
  };
  return (
    <div className={styles.container}>
      <button onClick={onClickHandler} className={styles.button}>
        Add New User
      </button>
    </div>
  );
};

export default NewUser;
