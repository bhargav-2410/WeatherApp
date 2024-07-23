import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

function SearchBox({ getWeatherInfo }) {
  let [city, setCity] = useState("");

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    getWeatherInfo(city);
    setCity("");
  };

  return (
    <div
      className="search-box"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}>
      <h1>Search the city..</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          value={city}
          variant="outlined"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
}

export default SearchBox;
