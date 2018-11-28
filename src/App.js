import React, { Component } from "react";
import "./App.css";
import WizardForm from "./components/WizardForm/WizardForm";
import showResults from "./utils/showResults";
import { Section } from "bloomer";

class App extends Component {
  render() {
    return (
      <Section className="App">
        <WizardForm onSubmit={showResults} />
      </Section>
    );
  }
}

export default App;
