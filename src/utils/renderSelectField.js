import React from "react";
import { Select, Control, Help } from "bloomer";

const renderSelectField = ({ input, options, meta: { touched, error } }) => (
  <Control>
    <Select {...input}>
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </Select>
    {touched && error && <Help isColor="danger">{error}</Help>}
  </Control>
);

export default renderSelectField;
