import "./App.css";
import axios from "axios";
import react, { useState } from "react";
function App() {
  let city1 = "";
  let apiKey = "0t0f733f3454c9aobbda64f6025e69d0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=lisbon&key=${apiKey}`;
  axios.get(apiUrl).then(giveInfo);
  let [citySearch, SetCitySearch] = useState("");
  let [currentWin, SetCurrentWin] = useState("");
  let [currentHumidit, SetCurrentHumidit] = useState("");
  let [currentCondition, SetCurrentCondition] = useState("");
  let [currentTemp, SetCurrentTemp] = useState("");
  let [downIcon, SetDownIcon] = useState("");

  function giveInfo(response) {
    SetCitySearch(response.data.city);
    SetCurrentWin(Math.round(response.data.wind.speed));
    SetCurrentHumidit(response.data.temperature.humidity);
    SetCurrentCondition(response.data.condition.description);
    SetCurrentTemp(response.data.temperature.current);
    SetDownIcon(response.data.condition.icon_url);
  }

  return (
    <div className="App">
      <div class="wrapper">
        <div class="container">
          <div class="links">
            <a href="#">lisbon</a>
            <a href="#">Paris</a>
            <a href="#">Sydney</a>
            <a href="#">San Fransico</a>
          </div>

          <div class="searchEngin">
            <form action="">
              <div class="row">
                <div class="col-9">
                  <input
                    id="citySearch"
                    type="text"
                    class="form-control"
                    placeholder="Type a city..."
                  />
                </div>
                <div class="col-3">
                  <button id="search" class="btn btn-primary w-100">
                    Search
                  </button>
                </div>
              </div>
            </form>
            <div class="cityTime">
              <div class="row">
                <div class="col-7">
                  <h1 id="city">{citySearch}</h1>
                  <p id="day">Last updated at:</p>
                  <p id="condition">{currentCondition}</p>
                </div>
                <div class="col-5">
                  <img id="bgImg" src="/weather.png" alt="weather_image"></img>
                </div>
              </div>
            </div>

            <div class="tempImage">
              <div class="row">
                <div class="col-7 tempDegree">
                  <img id="image" src={downIcon} alt="" />
                  <strong id="temprature">{currentTemp}</strong>
                  <span class="cf">
                    <small id="canti">°C</small>
                  </span>
                </div>

                <div class="col-5 humidityWind">
                  <ul>
                    <li id="humid">Humidity:{currentHumidit} %</li>
                    <li id="wind">Wind:{currentWin} Km/h</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="line"></div>
            <div id="forecast"></div>
          </div>

          <div class="coded">
            <a id="linkGithub" href="https://github.com/Mitra-rk/challenge">
              Open-Source code
            </a>
            <span> by Mitra Enayatollahi</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
