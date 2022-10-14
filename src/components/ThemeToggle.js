import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";

const ThemeToggle = (props) => {
  return (
    <div className="themeToggle calc__themeToggle">
      <span className="themeToggle__title">Theme</span>
      <ToggleSwitch
        values={["1", "2", "3"]}
        selected="1"
        switchTheme={props.switchTheme}
      />
    </div>
  );
};

export default ThemeToggle;
