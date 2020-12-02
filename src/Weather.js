import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    localTime: "00:00",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    temperature: "60",
    humidy: "10",
    wind: "1",
  };
  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form id="search">
              <div className="row">
                <div className="col-8" id="input-field">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Type a city..."
                    autofocus="on"
                    autocomplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="form-control btn btn-primary"
                  />
                </div>
                <div className="col-1">
                  <input
                    type="submit"
                    value="📌"
                    className="form-control btn btn-outline-secondary"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Search by current location"
                  />
                </div>
              </div>
            </form>
            <div className="upper-section mx-auto">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>
                  Local Time: <span>{weatherData.localTime}</span>
                </li>
                <li></li>
              </ul>
              <div className="row">
                <div className="col-7">
                  <div className="clearfix">
                    <span>
                      <img
                        className="weather-icon float-left"
                        src={weatherData.imgUrl}
                        alt="weather icon"
                      />
                    </span>
                    <div className="float-left">
                      <span className="temperature">
                        {weatherData.temperature}
                      </span>
                      <span className="units">
                        <a href="/" className="active">
                          °F
                        </a>{" "}
                        |<a href="/">°C</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-5">
                  <ul>
                    <li>
                      Humidity: <span>{weatherData.humidy}</span>%
                    </li>
                    <li>
                      Wind: <span>{weatherData.wind}</span>
                      <span>mi/hr</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hourly-forecast">
              <div className="row weather-forecast"></div>
            </div>
            <p>Weekly Forecast</p>
            <div className="weekly-forecast mx-auto">
              <div className="row weather-forecast"></div>
            </div>
            <div id="footer">
              <div className="row">
                <div className="col-6 hour-toggle">
                  <a href="/" className="active">
                    12 hr
                  </a>{" "}
                  |<a href="/">24 hr</a>
                </div>
                <div className="col-6 last-update">
                  <em>
                    {" "}
                    Last Updated: <span>18:00</span>
                  </em>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <a
              href="https://github.com/zarsl/vanilla-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            by Zeynep Arslan 👩‍💻
          </footer>
        </div>
      </div>
    </div>
  );
}
