import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";

const ThemeToggle = () => {
  return (
    <div className="themeToggle calc__themeToggle">
      <ToggleSwitch values={["1", "2", "3"]} selected="1" />
    </div>
  );
};

export default ThemeToggle;
