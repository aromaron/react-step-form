import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../../utils/validate";
import renderField from "../../utils/renderField";
import renderRadioField from "../../utils/renderRadioField";
import renderError from "../../utils/renderError";

import { Field as BField, Control, Button, Label } from "bloomer";

const WizardFormSecondStep = props => {
  const { handleSubmit, previousStep } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={renderField} label="Email" />
      <BField>
        <Label>I identify myself as:</Label>
        <Control>
          <Field
            name="gender"
            fieldName="gender"
            component={renderRadioField}
            type="radio"
            label="Male"
            value="male"
          />
          <Field
            name="gender"
            fieldName="gender"
            component={renderRadioField}
            type="radio"
            label="Female"
            value="female"
          />
          <Field
            name="gender"
            fieldName="gender"
            component={renderRadioField}
            type="radio"
            label="Neutral"
            value="neutral"
          />
          <Field
            name="gender"
            fieldName="gender"
            component={renderRadioField}
            type="radio"
            label="I rather not say"
            value="other"
          />
          <Field name="gender" component={renderError} />
        </Control>
      </BField>
      <BField isGrouped>
        <Control>
          <Button isLink className="previous" onClick={previousStep}>
            Previous
          </Button>
        </Control>
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
})(WizardFormSecondStep);
