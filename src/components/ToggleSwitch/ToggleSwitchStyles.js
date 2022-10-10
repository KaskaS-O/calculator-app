import styled from "styled-components";

export const Switch = styled.div`
  font-family: "Lucida Grande", Tahoma, Verdana, sans-serif;
  position: relative;
  height: 26px;
  width: 78px;
  background-color: #e4e4e4;
  border-radius: 13px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
`;

export const SwitchRadio = styled.input`
  display: none;
`;

export const SwitchSelection = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 26px;
  height: 26px;
  background: #216ba5;
  border-radius: 13px;
  transition: left 0.25s ease-out;
`;

export const SwitchLabel = styled.label`
  position: relative;
  z-index: 2;
  float: left;
  width: 26px;
  line-height: 26px;
  font-size: 0;
  color: transparent;
  text-align: center;
  cursor: pointer;

  ${SwitchRadio}:checked + & {
    transition: 0.15s ease-out;
  }
`;
