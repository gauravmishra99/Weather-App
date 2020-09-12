import React, { useState } from "react";
import "./Search.css";
import { TextField, Button } from "@material-ui/core";

const Search = ({setCurrentData,setQuery,setFiveDayForecast}) => {
  const [text, setText] = useState("");

  const onChange = (q) =>{
      setText(q)
  }

  const onCityChange = async () => {
    setCurrentData([])
    setFiveDayForecast([])
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=7d8aa3607b0a3a8c684782c50d248f56`
      )
        .then((response) => response.json())
        .then((data) => setCurrentData(data));
  
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${text}&units=metric&appid=7d8aa3607b0a3a8c684782c50d248f56`
      )
        .then((response) => response.json())
        .then((data) => setFiveDayForecast(data.list));
  }

  return (
    <div className="search">
      <TextField
        size="small"
        variant="outlined"
        label="Enter City"
        className="search__text"
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button size="large" color="primary" onClick={onCityChange} >
        Submit
      </Button>
    </div>
  );
};

export default Search;
