import { useState } from "react";
import {
  Switch,
  SwitchLabel,
  SwitchRadio,
  SwitchSelection,
} from "./ToggleSwitchStyles.js";

function ToggleSwitch(props) {
  const [selected, setSelected] = useState(props.selected);

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

  const handleChange = (val) => {
    setSelected(val);
  };

  const selectionStyle = () => {
    return {
      left: `${(props.values.indexOf(selected) / 3) * 100}%`,
    };
  };

  return (
    <Switch>
      {props.values.map((val) => {
        return (
          <span key={val}>
            <ConcealedRadio value={val} selected={selected} />
            <ClickableLabel title={val} onChange={handleChange} />
          </span>
        );
      })}
      <SwitchSelection style={selectionStyle()} />
    </Switch>
  );
}

export default ToggleSwitch;
