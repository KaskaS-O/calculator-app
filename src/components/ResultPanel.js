const ResultPanel = (props) => {
  return (
    <div className="resultPanel calc__resultPanel">
      <input
        type="number"
        className="resultPanel__input"
        value={props.result}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default ResultPanel;
