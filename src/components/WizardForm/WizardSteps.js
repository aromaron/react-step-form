import React from "react";

export default function WizardSteps(props) {
  return (
    <ul className="steps">
      <li
        className={
          "steps-segment " + (props.currentStep === 1 ? "is-active" : "")
        }
      >
        <span className="steps-marker">1</span>
      </li>
      <li
        className={
          "steps-segment " + (props.currentStep === 2 ? "is-active" : "")
        }
      >
        <span className="steps-marker">2</span>
      </li>
      <li
        className={
          "steps-segment " + (props.currentStep === 3 ? "is-active" : "")
        }
      >
        <span className="steps-marker">3</span>
      </li>
      <li className={"steps-segment " + (props.finished ? "is-active" : "")}>
        <span className="steps-marker">
          <span className="icon">
            <i className="fa fa-check" />
          </span>
        </span>
      </li>
    </ul>
  );
}
