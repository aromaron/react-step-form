import React, { Component } from "react";
import "./App.css";
import WizardForm from "./components/WizardForm/WizardForm";
import showResults from "./utils/showResults";
import { Section, Container } from "bloomer";

class App extends Component {
  render() {
    return (
      <Section className="App">
        <Container isFluid>
          <WizardForm onSubmit={showResults} />
        </Container>
      </Section>
    );
  }
}

export default App;
