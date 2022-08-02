import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import SvgIcon from "@mui/material/SvgIcon";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import useLocalStorage from "../src/hooks/useLocalStorage";
import FavoritesCities from "./components/FavoritesCities";
import InputsGroup from "./components/InputsGroup";
import Snackbar from "./components/Snackbar";
import { ReactComponent as Logo } from "./static/logo.svg";

function App() {
  const [cities, setCities] = useLocalStorage("cities", []);
  const [city, setCity] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const addCityHandler = () => {
    let isCityPresent = false;
    cities.forEach((element) => {
      if (element === city) {
        isCityPresent = true;
      }
    });
    if (!isCityPresent && city !== '') {
      setCities([...cities, city]);
      setCity('');
      setMessage('City added!')
      setOpen(true);
    }
  };

  const deleteCityHandler = () => {
    setCities([]);
    setMessage('All cities deleted');
    setOpen(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <SvgIcon viewBox="0 0 150 50" style={{ width: 200, height: 60 }}>
            <Logo />
          </SvgIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Weather API
          </Typography>
          <Typography variant="h6" component="div">
            Test task
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, p: 2 }}>
          Enter the city:
        </Typography>
        <Divider />
        <InputsGroup city={city} setCity={setCity} />
        <Button variant="contained" onClick={addCityHandler} sx={{ m: 1 }}>
          Add to favorites
        </Button>
        <Button variant="contained" onClick={deleteCityHandler} sx={{ m: 1 }}>
          Clear list of favourites cities
        </Button>
        <Divider />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, p: 2 }}>
          Favorites cities:
        </Typography>
        <FavoritesCities cities={cities} />
        <Snackbar open={open} setOpen={setOpen} message={message} />
      </Box>
    </Box>
  );
}

export default React.memo(App);
