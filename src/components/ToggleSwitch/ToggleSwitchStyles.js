import styled from "styled-components";

export const Label = styled.span`
  display: inline-block;
  height: var(--toggle-size);
  width: var(--toggle-size);
  line-height: var(--toggle-size);
  font-size: var(--label-font-size);
  text-align: center;
  color: var(--secondary-txt);
  @media (max-width: 300px) {
    height: calc(var(--toggle-size) * 0.8);
    width: calc(var(--toggle-size) * 0.8);
  }
`;

export const LabelContainter = styled.div`
  position: absolute;
  height: var(--toggle-size);
  width: calc(var(--toggle-size) * 3);
  top: calc(-0.9 * var(--toggle-size));
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 300px) {
    height: calc(var(--toggle-size) * 0.8);
    width: calc(var(--toggle-size) * 3 * 0.8);
  }
`;

export const Switch = styled.div`
  position: relative;
  top: 50%;
  left: calc(100% - calc(var(--toggle-size) * 3));
  transform: translateY(-50%);
  height: var(--toggle-size);
  width: calc(var(--toggle-size) * 3);
  background-color: var(--toggle-keypad-bg);
  border-radius: calc(var(--toggle-size) / 2);

  @media (max-width: 300px) {
    height: calc(var(--toggle-size) * 0.8);
    width: calc(var(--toggle-size) * 3 * 0.8);
    left: calc(100% - calc(var(--toggle-size) * 3 * 0.8));
  }
`;

export const SwitchRadio = styled.input`
  display: none;
`;

export const SwitchSelection = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: var(--toggle-switcher-size);
  height: var(--toggle-switcher-size);
  margin: 0 calc(var(--toggle-size) * 0.2);
  background: var(--equal-key-bg);
  border-radius: calc(var(--toggle-size) / 2);
  transition: left 0.25s ease-out;

  @media (max-width: 300px) {
    height: calc(var(--toggle-switcher-size) * 0.8);
    width: calc(var(--toggle-switcher-size) * 0.8);
  }
`;

export const SwitchLabel = styled.label`
  position: relative;
  z-index: 2;
  float: left;
  width: var(--toggle-size);
  line-height: var(--toggle-size);
  font-size: 0;
  color: transparent;
  text-align: center;
  cursor: pointer;

  ${SwitchRadio}:checked + & {
    transition: 0.15s ease-out;
  }
`;
