import { useState } from "react";
import {
  Label,
  LabelContainter,
  Switch,
  SwitchLabel,
  SwitchRadio,
  SwitchSelection,
} from "./ToggleSwitchStyles.js";

function ToggleSwitch(props) {
  const [selected, setSelected] = useState(props.selected);
  const switchTheme = props.switchTheme;

  const ConcealedRadio = ({ value, selected }) => (
    <SwitchRadio
      type="radio"
      name="switch"
      defaultChecked={selected === value}
    />
  );

  const ClickableLabel = ({ title, onChange, id }) => (
    <SwitchLabel onClick={() => onChange(title)} className={id}>
      {title}
    </SwitchLabel>
  );

  const OuterLabel = () => {
    const labels = props.values.map((label) => {
      return <Label key={label}>{label}</Label>;
    });

    return <LabelContainter>{labels}</LabelContainter>;
  };

  const handleChange = (val) => {
    setSelected(val);
    switchTheme(val);
  };

  const selectionStyle = () => {
    return {
      left: `${(props.values.indexOf(selected) / 3) * 100}%`,
    };
  };

  return (
    <Switch>
      <OuterLabel />

      {props.values.map((val) => {
        return (
          <>
            <span key={val}>
              <ConcealedRadio value={val} selected={selected} />
              <ClickableLabel title={val} onChange={handleChange} />
            </span>
          </>
        );
      })}
      <SwitchSelection style={selectionStyle()} />
    </Switch>
  );
}

export default ToggleSwitch;
