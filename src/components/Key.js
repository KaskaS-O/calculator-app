const Key = (props) => {
  return (
    <div
      className="keyboard__key"
      id={props.id}
      data-type={props.type}
      onClick={
        props.name === "reset"
          ? props.handleReset
          : props.name === "del"
          ? props.handleDelete
          : props.name === "="
          ? props.handleEqual
          : props.name === "+" ||
            props.name === "-" ||
            props.name === "x" ||
            props.name === "/"
          ? props.handleOperation
          : props.name === "."
          ? props.handleDot
          : props.handleNumber
      }
    >
      {props.name}
    </div>
  );
};

export default Key;
