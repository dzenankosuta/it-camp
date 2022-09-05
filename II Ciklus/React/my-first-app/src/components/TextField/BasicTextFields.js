import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Ime" variant="outlined" />
      <TextField id="filled-basic" label="Prezime" variant="filled" />
      <TextField id="standard-basic" label="Godine" variant="standard" />
    </Box>
  );
}
