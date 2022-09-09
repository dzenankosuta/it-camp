import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CheckboxLabels from "./components/Checkbox/CheckboxLabels";
import BasicTextFields from "./components/TextField/BasicTextFields";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

// SPA - Single Page Application
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
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
      </main>
    </ThemeProvider>
  );
}

export default App;
