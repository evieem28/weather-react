import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      "The Weather in ${response.data.name} is ${response.data.main.temp}°C"
    );
  }

  let apiKey = "068cbf4b37e3ff950b253f0b64177940";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <Audio heigth="100" width="100" color="grey" ariaLabel="loading" />;
}
