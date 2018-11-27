import React from "react";
import { Input, Label, Control, Help } from "bloomer";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="field">
    <Label>{label}</Label>
    <Control>
      <Input
        {...input}
        placeholder={label}
        type={type}
        isColor={touched && error && "danger"}
      />
      {touched && error && <Help isColor="danger">{error}</Help>}
    </Control>
  </div>
);

export default renderField;
