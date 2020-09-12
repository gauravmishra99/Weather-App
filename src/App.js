import React, { useEffect, useState } from "react";
import "./App.css";
import CurrentDayCard from "./components/CurrentDayCard";
import { Card, CardContent} from "@material-ui/core";
import Forecast from "./components/Forecast";
import Search from "./components/Search";

function App() {
  const [currentData, setCurrentData] = useState([]);
  const [fiveDayForecast, setFiveDayForecast] = useState([]);
  const [query, setQuery] = useState('Delhi')

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=7d8aa3607b0a3a8c684782c50d248f56`
    )
      .then((response) => response.json())
      .then((data) => setCurrentData(data));

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=7d8aa3607b0a3a8c684782c50d248f56`
    )
      .then((response) => response.json())
      .then((data) => setFiveDayForecast(data.list));
  }, [query]);

  return (
    <div className="App">
      <h1 className="app__heading">Weather</h1>
      <Search setCurrentData={setCurrentData} setQuery={setQuery} setFiveDayForecast={setFiveDayForecast}/>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "20px",
        }}
      >
        {currentData.length === 0 ? (
          <h1>Data Coming Up...</h1>
        ) : (
          <CurrentDayCard data={currentData} />
        )}
        {currentData.length === 0 ? (
          <h1>Data Coming Up...</h1>
        ) : (
          <CurrentDayCard data={currentData} />
        )}
      </div>

      <div className="forecastCard">
        <Card>
          <CardContent>
            <Forecast forecasts={fiveDayForecast} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
