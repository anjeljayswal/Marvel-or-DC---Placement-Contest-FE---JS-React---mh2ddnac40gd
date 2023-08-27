import React, { useEffect, useState } from "react";
import FormA from "./FormA";
import FormB from "./FormB";
import Summary from "./Summary";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [age, setAge] = useState("");
  const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [age, setAge] = useState("");

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
    setStep(4); // Go to summary step
  };

  const handleStartOver = () => {
    setStep(1);
    setAge("");
    setFormData({});
  };


  return (
    <div>
      {(step === 1 || !age) && (
        <div id="start-page">

          <h1>Step 1: Select Form Type and Enter Age</h1>
          <label>
            Enter your age:
            <input value={age} onChange={handleAgeChange} type="number" />
          </label>
          <br />
          <label>
            Select Form Type:
            <select onChange={(e) => setStep(parseInt(e.target.value))}>
              <option value={1}>--Select--</option>
              <option value={2}>Form A</option>
              <option value={3}>Form B</option>
            </select>
          </label>
          <br />
        </div>
      )}

      {step === 2 && <FormA age={age} onSubmit={handleFormSubmit} />}
      {step === 3 && <FormB age={age} onSubmit={handleFormSubmit} />}

      {(step === 2 || step === 3) && age ? (
        <button id="go-back" onClick={() => setStep(1)}>
          Go Back
        </button>
      ) : null}

      {step === 4 && (
        <div>
          <Summary formData={formData} />
          <button id="start-over" onClick={handleStartOver}>
            Start Over
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
