import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Forecast.css";

const Forecast = ({ forecasts }) => {
  return (
    <div className="forecasts">
      {forecasts.map((forecast) => (
        <Card key={forecast.dt} className="forecasts__cards">
          <CardContent>
            <Typography>Date: {forecast.dt_txt}</Typography>
            <Typography>Primarily: {forecast.weather[0].main}</Typography>
            <Typography>
              Description: {forecast.weather[0].description}
            </Typography>
            <Typography>Temp: {forecast.main.temp} &#8451;</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Forecast;
