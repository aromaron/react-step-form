import React, { Component } from "react";
import PropTypes from "prop-types";
import WizardFormFirstStep from "./WizardFormFirstStep";
import WizardFormSecondStep from "./WizardFormSecondStep";
import WizardFormThirdStep from "./WizardFormThirdStep";

export default class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.state = { step: 1 };
  }

  nextStep() {
    this.setState({ step: this.state.step + 1 });
  }

  previousStep() {
    this.setState({ step: this.state.step - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { step } = this.state;
    return (
      <div>
        {step === 1 && <WizardFormFirstStep onSubmit={this.nextStep} />}
        {step === 2 && (
          <WizardFormSecondStep
            previousStep={this.previousStep}
            onSubmit={this.nextStep}
          />
        )}
        {step === 3 && (
          <WizardFormThirdStep
            previousStep={this.previousStep}
            onSubmit={onSubmit}
          />
        )}
      </div>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
