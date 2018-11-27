import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../../utils/validate";
import renderField from "../../utils/renderField";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const WizardFormSecondStep = props => {
  const { handleSubmit, previousStep } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={renderField} label="Email" />
      <div>
        <label>I identify myself as:</label>
        <div>
          <label>
            <Field name="gender" component="input" type="radio" value="male" />{" "}
            Male
          </label>
          <label>
            <Field
              name="gender"
              component="input"
              type="radio"
              value="female"
            />{" "}
            Female
          </label>
          <label>
            <Field
              name="gender"
              component="input"
              type="radio"
              value="neutral"
            />{" "}
            Neutral
          </label>
          <label>
            <Field name="gender" component="input" type="radio" value="other" />{" "}
            Rather not say
          </label>
          <Field name="gender" component={renderError} />
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousStep}>
          Previous
        </button>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(WizardFormSecondStep);
