import Key from "./Key";

const Keyboard = (props) => {
  let keys = props.keys;

  keys = keys.map((key) => (
    <Key
      key={key.id}
      id={key.id}
      name={key.name}
      type={key.type}
      handleReset={props.handleReset}
      handleDelete={props.handleDelete}
      handleEqual={props.handleEqual}
      handleOperation={props.handleOperation}
      handleDot={props.handleDot}
      handleNumber={props.handleNumber}
    />
  ));

  return <div className="keyboard calc__keyboard">{keys}</div>;
};

export default Keyboard;
