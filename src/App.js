import logo from "./logo.svg";
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
