import Key from "./Key";

const Keyboard = (props) => {
  let keys = props.keys.map((key) => (
    <Key key={key.id} id={key.id} type={key.type} />
  ));

  return <div className="keyboard calc__keyboard">{keys}</div>;
};

export default Keyboard;
