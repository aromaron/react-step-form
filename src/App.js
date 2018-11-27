import React, { Component } from "react";
import "./App.css";
import WizardForm from "./components/WizardForm/WizardForm";
import showResults from "./utils/showResults";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WizardForm onSubmit={showResults} />
      </div>
    );
  }
}

export default App;
