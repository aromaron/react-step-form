import React from "react";
import { Help } from "bloomer";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <Help isColor="danger">{error}</Help> : false;

export default renderError;
