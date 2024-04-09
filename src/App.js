import React, { useState, useReducer, useEffect } from "react";
import "./App.css";
// imports for React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function formReducer(state, action) {
  switch (action.type) {
    case "initialize": {
      return action.payload;
    }
    case "inputFormData": {
      console.log("state:", state);
      console.log("action obj:", action.input.name);
      let [inputName, inputVal] = [action.input.name, action.input.val];
      console.log("name:", inputName, "val", inputVal);
      return {
        ...state,
        [action.input.name]: action.input.val,
      };
    }
  }
}

function App() {
  let initialFormState = {
    name: "",
    auth: "",
    domain: "",
    grant: "",
    username: "",
    password: "",
    clientId: "",
    clientSecret: "",
    scope: "",
    token: "",
  };
  let timeLeft = 0;
  let [formData, dispatchForm] = useReducer(formReducer, initialFormState);
  // Apply "disabled" attribute on "Done" button until the form is completely filled out?? or until just required are filled out??
  let [doneBtnDisabled, setDoneBtnDisabled] = useState(true);

  // Set up form input validation to disable "Done" btn until all/??just required?? fields are filled out
  useEffect(() => {
    console.log(
      "how to determine when ALL inputs are filled/validated in order to activate DONE btn?"
    );
    // if (
    //   formData.name != ""
    //   // && formData.auth != "" && formData.domain != ""
    // ) {
    //   console.log("name input filled");
    //   // setDoneBtnDisabled(false);
    // }

    activateDoneBtn();
  });

  // Set up debouncer for every form input to ensure user entry is final to reduce possibility of race conditions in the future
  // useEffect(() => {
  //   const delayInputTimeoutId = setTimeout(() => {
  //     // setState(withThisValue);
  //     console.log(formData);
  //     // run dispatch to update state via reducer
  //   }, 500);
  //   return () => clearTimeout(delayInputTimeoutId);
  // }, [formData]);

  let activateDoneBtn = () => {
    console.log("Check to see if form is filled out", formData);
    // Object.entries(formData).map((val, i) => {
    //   console.log(val);
    //   // if all of the entries are truthy, or not empty strings
    //   if (val[1] !== "") {
    //     console.log("all fields input");
    //     setDoneBtnDisabled(false);
    //   }
    // });

    let iterableFormData = Object.entries(formData);
    console.log(iterableFormData);
    // filter iterable Form Data to see if any field is blank/null/empty string
    // if the filtered array is empty, there are no empty fields, set done button state to false
    let emptyFields = iterableFormData.filter((item) => {
      return item[1] === "";
    });
    console.log(emptyFields);

    if (emptyFields.length === 0) {
      console.log("all fields input");
      setDoneBtnDisabled(false);
    }
  };

  // Update state object with input values after user fills in inputs
  // Setup debouncer??/Timer to ensure user has finished typing by setting timeLeft variable above
  const onInputChange = (e) => {
    console.log(e.target.name);

    if (timeLeft) {
      console.log("time left cleared", timeLeft);
      clearTimeout(timeLeft);
    } else {
      const timeLeft = setTimeout(() => {
        // setState(withThisValue);
        console.log(formData);

        // run dispatch to update state via reducer
        dispatchForm({
          type: "inputFormData",
          input: { name: e.target.name, val: e.target.value },
        });
      }, 500);
    }
  };

  const submitForm = (e, name, ssn, caseNum) => {
    console.log(e.target);
    e.preventDefault();

    // Construct a FormData instance to capture form input data
    const formData = new FormData();
  };

  // Query to the API for relavent data
  const getCaseRecords = (e, name, ssn, caseNum) => {
    console.log(
      "Trigger API call to Get records - Include Case #, SSN and DOB as input criteria"
    );
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <header className="form-header mb-3">
          <h1>Set Up Custom Connector</h1>
          <h6>
            Add credentials to set up a Custom Connector. For details on usage,
            please check the <a href="#">documentation</a>.
          </h6>
        </header>

        <div className="form">
          <Form method="POST" onSubmit={(e) => submitForm(e)}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">
                Name <span className="required-asterisk">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                id="name"
                aria-describedby="name-input-parameter"
                required
                onBlur={onInputChange}
              />
              <Form.Text className="text-muted" id="name-input-parameter">
                Provide unique name for the connector
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="auth">Authentication Type</Form.Label>
              <Form.Select
                id="authType"
                aria-label="Select App Authentication Type"
                name="auth"
                onBlur={onInputChange}
              >
                <option value=""></option>
                <option value="password-grant">OAuth 2.0</option>
                <option value="option-two">Option Two</option>
                <option value="option-three">Option Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="domain">
                Resource Domain <span className="required-asterisk">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="domain"
                id="resourceDomain"
                aria-describedby="domain-input-helper-text"
                placeholder="https://"
                required
                onBlur={onInputChange}
              />
              <Form.Text className="text-muted" id="domain-input-helper-text">
                Domain that will be used to access data
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="grant">Grant Type</Form.Label>
              <Form.Select
                id="grantType"
                aria-label="Select Grant Type"
                name="grant"
                onBlur={onInputChange}
              >
                <option value=""></option>
                <option value="password-grant">Password Grant</option>
                <option value="option-two">Option Two</option>
                <option value="option-three">Option Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="username">User Name</Form.Label>
              <Form.Control
                type="text"
                id="username"
                name="username"
                onBlur={onInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                name="password"
                onBlur={onInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="clientId">
                Client ID <span className="required-asterisk">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                id="clientId"
                name="clientId"
                required
                onBlur={onInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="client-secret">
                Client Secret <span className="required-asterisk">*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                id="clientSecret"
                name="clientSecret"
                rows={3}
                required
                onBlur={onInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="scope">Scope</Form.Label>
              <Form.Control
                type="text"
                id="scope"
                name="scope"
                onBlur={onInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="token">
                Token URL <span className="required-asterisk">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                id="tokenUrl"
                name="token"
                required
                onBlur={onInputChange}
              />
            </Form.Group>
            <br />

            <div className="form-btns-container">
              <div className="form-btns">
                <Button
                  variant="outline-dark"
                  className="mb-2"
                  // formAction={save}
                >
                  Cancel
                </Button>
                <Button
                  variant="secondary"
                  className="mb-2"
                  type="submit"
                  name="Button"
                  value="submit"
                  disabled={doneBtnDisabled ? true : false}
                >
                  Done
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default App;
