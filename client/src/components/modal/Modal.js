const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modalCard">
        <h2>Book {props.method}</h2>
        <p>Title: {props.title}</p>
        <button onClick={() => props.setShowModal(false)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
