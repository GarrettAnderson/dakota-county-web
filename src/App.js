import * as React from "react";
import "./App.css";
// imports for React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function App() {
  const getCaseRecords = (e, name, ssn, caseNum) => {
    console.log(e.target);
    e.preventDefault();
    console.log(
      "Get records from - Include Case #, SSN and DOB as input criteria"
    );
  };
  return (
    <div className="App-container">
      <div className="Form-container">
        <header className="Form-header">
          <h1>Set Up Custom Connector</h1>
          <h6>
            Add credentials to set up a Custom Connector. For details on usage,
            please check the <a href="#">documentation</a>.
          </h6>
        </header>

        <div className="Form">
          <Form method="POST" onSubmit={(e) => getCaseRecords(e)}>
            <Form.Group className="mb-3" required>
              <Form.Label htmlFor="name">
                Name <span className="required-asterisk">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                id="name"
                aria-describedby="my-helper-text"
              />
              <Form.Text className="text-muted" id="my-helper-text">
                Provide unique name for the connector
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Authentication Type</Form.Label>
              <Form.Select aria-label="Select App Authentication Type">
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
              <Form.Select aria-label="Select Grant Type">
                <option value="password-grant">Password Grant</option>
                <option value="2">Option Two</option>
                <option value="3">Option Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="username">User Name</Form.Label>
              <Form.Control type="text" id="username" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control type="text" id="password" />
            </Form.Group>
            <Form.Group className="mb-3" required>
              <Form.Label htmlFor="client-id">
                Client ID <span className="required-asterisk">*</span>
              </Form.Label>
              <Form.Control type="text" id="client-id" />
            </Form.Group>
            <Form.Group className="mb-3" required>
              <Form.Label htmlFor="client-secret">
                Client Secret <span className="required-asterisk">*</span>
              </Form.Label>
              <Form.Control type="textarea" id="client-secret" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="scope">Scope</Form.Label>
              <Form.Control type="text" id="scope" />
            </Form.Group>
            <Form.Group className="mb-3" required>
              <Form.Label htmlFor="token-url">
                Token URL <span className="required-asterisk">*</span>
              </Form.Label>
              <Form.Control type="text" id="token-url" />
            </Form.Group>
            <br />
            <Button
              variant="light"
              // formAction={save}
            >
              Cancel
            </Button>
            <Button
              variant="secondary"
              type="submit"
              name="Button"
              value="submit"
            >
              Done
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default App;
