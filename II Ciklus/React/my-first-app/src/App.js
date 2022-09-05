import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CheckboxLabels from "./components/Checkbox/CheckboxLabels";
import BasicTextFields from "./components/TextField/BasicTextFields";

// Material UI
function App() {
  return (
    <div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <CheckboxLabels />
      <BasicTextFields />
    </div>
  );
}

export default App;
