import React from "react";

const Toggle = ({ checked, onChecked }) => (
  <span className="toggle-control">
    <input
      type="checkbox"
      className="dmcheck"
      checked={checked}
      onChecked={onChecked}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </span>
);

export default Toggle;
