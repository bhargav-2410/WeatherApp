import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./InfoBox.css";

export default function InfoBox({ weatherInfo }) {
  const img = ""; // You can set the image URL based on weatherInfo if needed

  if (!weatherInfo) {
    return <div>Enter a city to get the weather information.</div>;
  }

  return (
    <div>
      <div
        className="info-box"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}>
        <Card sx={{ maxWidth: 345 }}>
          <h1>Weather</h1>

          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={
                "https://t4.ftcdn.net/jpg/02/66/38/15/360_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg"
              }
              alt="weather image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {weatherInfo.city}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component={"span"}>
                <p>Temp = {weatherInfo.temp}&deg;C</p>
                <p>Temp_max = {weatherInfo.temp_max}&deg;C</p>
                <p>Temp_min = {weatherInfo.temp_min}&deg;C</p>
                <p>Humidity = {weatherInfo.humidity}</p>
                <p>
                  Weather is {weatherInfo.weather} and it feels like{" "}
                  {weatherInfo.feels_like}
                  &deg;C{" "}
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
