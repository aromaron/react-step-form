import React from "react";
import { Radio } from "bloomer";

const renderRadioField = ({ input, type, label }) => (
  <Radio {...input} type={type}>
    {label}
  </Radio>
);

export default renderRadioField;
