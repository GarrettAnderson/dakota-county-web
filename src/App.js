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
  }
}

function App() {
  let initialFormState = {
    name: "",
    auth: "",
    domain: "",
    username: "",
    password: "",
    clientId: "",
    clientSecret: "",
    scope: "",
    token: "",
  };

  let [formData, dispatchForm] = useReducer(formReducer, initialFormState);
  // Apply "disabled" attribute on "Done" button until the form is completely filled out?? or until just required are filled out??
  let [doneBtnDisabled, setDoneBtnDisabled] = useState(true);

  if (formData.name != "" && formData.auth != "" && formData.domain != "") {
    setDoneBtnDisabled(false);
  }

  // let activateDoneBtn = () => {
  //   Object.values(formData).map((val) => {
  //     console.log("Check to see if form is filled out");
  //     // if all of the entries are truthy, or not empty strings
  //     if (val !== "") {
  //       setDoneBtnDisabled(false);
  //     }
  //   });
  // };

  const submitForm = (e, name, ssn, caseNum) => {
    console.log(e.target);
    e.preventDefault();

    // Construct a FormData instance to capture form input data
    const formData = new FormData();
  };

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
            <Form.Group className="mb-3" required>
              <Form.Label htmlFor="name">
                Name <span className="required-asterisk">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                id="name"
                aria-describedby="my-helper-text"
              />
              <Form.Text className="text-muted" id="my-helper-text">
                Provide unique name for the connector
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="auth-type">Authentication Type</Form.Label>
              <Form.Select
                aria-label="Select App Authentication Type"
                name="auth-type"
              >
                <option value="password-grant">OAuth 2.0</option>
                <option value="2">Option Two</option>
                <option value="3">Option Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" required>
              <Form.Label htmlFor="resource-domain">
                Resource Domain <span className="required-asterisk">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="resource-domain"
                id="resource-domain"
                aria-describedby="my-helper-text"
                placeholder="https://"
              />
              <Form.Text className="text-muted" id="my-helper-text">
                Domain that will be used to access data
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="grant-type">Grant Type</Form.Label>
              <Form.Select aria-label="Select Grant Type" name="grant-type">
                <option value="password-grant">Password Grant</option>
                <option value="2">Option Two</option>
                <option value="3">Option Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="username">User Name</Form.Label>
              <Form.Control type="text" id="username" name="username" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control type="password" id="password" name="password" />
            </Form.Group>
            <Form.Group className="mb-3" required>
              <Form.Label htmlFor="client-id">
                Client ID <span className="required-asterisk">*</span>
              </Form.Label>
              <Form.Control type="text" id="client-id" name="client-id" />
            </Form.Group>
            <Form.Group className="mb-3" required>
              <Form.Label htmlFor="client-secret">
                Client Secret <span className="required-asterisk">*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                id="client-secret"
                name="client-secret"
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="scope">Scope</Form.Label>
              <Form.Control type="text" id="scope" name="score" />
            </Form.Group>
            <Form.Group className="mb-3" required>
              <Form.Label htmlFor="token-url">
                Token URL <span className="required-asterisk">*</span>
              </Form.Label>
              <Form.Control type="text" id="token-url" name="token-url" />
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
                  disabled={!doneBtnDisabled}
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
