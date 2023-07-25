import styles from "./ErrorForm.module.css";
import ReactDom from "react-dom";
const ErrorForm = (props) => {
  const onClickHandler = () => {
    props.onOkeyClick();
  };
  const BackDrop = (props) => {
    return <div onClick={onClickHandler} className={styles.backdrop}></div>;
  };

  const Modal = (props) => {
    return (
      <div className={styles.container}>
        <h2>{props.message}</h2>
        <button onClick={onClickHandler} className={styles.button}>
          Okey
        </button>
      </div>
    );
  };
  return (
    <>
      {ReactDom.createPortal(
        <BackDrop></BackDrop>,
        document.getElementById("back-drop")
      )}
      {ReactDom.createPortal(
        <Modal message={props.message}></Modal>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default ErrorForm;
