import React from "react";
import { Radio } from "bloomer";

const renderOptionField = ({ input, type, label }) => (
  <Radio {...input} type={type} className={type}>
    {label}
  </Radio>
);

export default renderOptionField;
