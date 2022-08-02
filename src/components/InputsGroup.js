import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";

export default function BasicTextFields({ city, setCity }) {
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="City"
        value={city}
        variant="outlined"
        onChange={handleCityChange}
      />
    </Box>
  );
}
