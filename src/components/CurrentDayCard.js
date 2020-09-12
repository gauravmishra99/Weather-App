import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { timeConverter } from "./util";

const CurrentDayCard = ({ data }) => {
  return (
    <Card>
      {console.log(data)}
      <CardContent>
        <Typography>Place: {data.name}</Typography>
        <Typography>{timeConverter(data.dt)}</Typography>
        <p>Primarily: {data.weather[0].main}</p>
        <p>Description: {data.weather[0].description}</p>
        <Typography>{data.main.temp} &#8451;</Typography>
        <Typography>Feels Like: {data.main.feels_like} &#8451;</Typography>
        <Typography>
          Min: {data.main.temp_min} &#8451; Max: {data.main.temp_max} &#8451; Wind:{" "}
          {data.wind.speed} m/sec
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CurrentDayCard;
