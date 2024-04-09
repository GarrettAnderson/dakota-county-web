import * as React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import {
  FormHelperText,
  Input,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import "./App.css";

function App() {
  const getCaseRecords = (name, ssn, caseNum) => {
    console.log(
      "Get records from - Include Case #, SSN and DOB as input criteria"
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Set Up Custom Connector</h1>
        <h6>
          Add credentials to set up a Custom Connector. For details on usage,
          please check the <a href="#">documentation</a>.
        </h6>
      </header>

      <form action={getCaseRecords}>
        <FormControl required>
          <InputLabel htmlFor="name">Name</InputLabel>
          <OutlinedInput id="name" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            Provide unique name for the connector
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="name">Authentication Type</InputLabel>
          {/* Select dropdown of options - OAuth 2.0 */}
        </FormControl>
        <FormControl required>
          <InputLabel htmlFor="resource-domain">Resource Domain</InputLabel>
          <OutlinedInput
            id="resource-domain"
            aria-describedby="my-helper-text"
            placeholder="https://"
          />
          <FormHelperText id="my-helper-text">
            Domain that will be used to access data
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="grant-type">Grant Type</InputLabel>
          {/* Select dropdown of options - Password Grant */}
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="username">User Name</InputLabel>
          <OutlinedInput id="username" variant="outlined" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password" disableAnimation={true}>
            Password
          </InputLabel>
          <OutlinedInput id="password" variant="outlined" />
        </FormControl>
        <FormControl required>
          <InputLabel htmlFor="client-id">Client ID</InputLabel>
          <OutlinedInput id="client-id" variant="outlined" />
        </FormControl>
        <label htmlFor="client-secret"></label>{" "}
        {/* Is textarea within label similart to inputs?? */}
        <textarea name="client-secret" rows={4} cols={40} />
        <br />
        <button
        // formAction={save}
        >
          Cancel
        </button>
        <button type="submit" name="button" value="submit">
          Done
        </button>
      </form>
    </div>
  );
}

export default App;
