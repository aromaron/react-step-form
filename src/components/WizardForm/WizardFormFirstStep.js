import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../../utils/validate";
import renderField from "../../utils/renderField";
import { Field as BField, Control, Button } from "bloomer";

const WizardFormFirstStep = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <BField>
        <Control>
          <Button isColor="primary" className="next" type="submit">
            Next
          </Button>
        </Control>
      </BField>
    </form>
  );
};

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(WizardFormFirstStep);
