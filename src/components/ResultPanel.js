const ResultPanel = (props) => {
  let calc = props.calc.toString().replace(".", ",");
  return (
    <div className="resultPanel calc__resultPanel">
      {calc.length >= 16 ? calc.slice(0, 15) : calc}
    </div>
  );
};

export default ResultPanel;
