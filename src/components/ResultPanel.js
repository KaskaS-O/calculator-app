const ResultPanel = (props) => {
  const calc = props.calc.toString().replace(".", ",");
  return <div className="resultPanel calc__resultPanel">{calc}</div>;
};

export default ResultPanel;
