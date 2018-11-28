import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../../utils/validate";
import renderSelectField from "../../utils/renderSelectField";
import { Field as BField, Label, Control, Button } from "bloomer";

const colors = [
  "Select",
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Indigo",
  "Violet"
];

const WizardFormThirdStep = props => {
  const { handleSubmit, pristine, previousStep, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <BField>
        <Label>Favorite Color:</Label>
        <Field
          name="favoriteColor"
          component={renderSelectField}
          options={colors}
        />
      </BField>
      <BField>
        <Label>Notes</Label>
        <Control>
          <Field
            name="notes"
            component="textarea"
            placeholder="Notes"
            className="textarea"
          />
        </Control>
      </BField>
      <BField isGrouped>
        <Control>
          <Button isLink className="previous" onClick={previousStep}>
            Previous
          </Button>
        </Control>
        <Control>
          <Button
            isColor="primary"
            type="submit"
            disabled={pristine || submitting}
          >
            Submit
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
})(WizardFormThirdStep);
