import React, { Component } from "react";

function getWeatherIcon(wmoCode: number) {
  const icons: Map<number[], string> = new Map([
    [[0], "☀️"],
    [[1], "🌤"],
    [[2], "⛅️"],
    [[3], "☁️"],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "🌦"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
    [[71, 73, 75, 77, 85, 86], "🌨"],
    [[95], "🌩"],
    [[96, 99], "⛈"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr) || "NOT FOUND";
}

function convertToFlag(countryCode: string) {
  const codePoints: number[] = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

function formatDay(dateStr: string) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}
interface AppProps {}
interface AppState {
  location: string;
  isLoading: boolean;
  displayLocation: string;
  weather: {
    temperature_2m_max?: number[];
    temperature_2m_mi?: number[];
    time?: string[];
    weathercode?: number[];
  };
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      location: "lisbon",
      isLoading: false,
      displayLocation: "",
      weather: {},
    };
    this.fetchWeather = this.fetchWeather.bind(this);
  }
  async fetchWeather() {
    try {
      this.setState({ isLoading: true });
      // 1) Getting location (geocoding)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
      );
      const geoData = await geoRes.json();
      console.log(geoData);

      if (!geoData.results) throw new Error("Location not found");

      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);
      this.setState({
        displayLocation: `${name} ${convertToFlag(country_code)}`,
      });

      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();
      this.setState({ weather: weatherData.daily });
    } catch (err) {
      console.error(err);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <div>
          <input
            type="text"
            placeholder="Search From Location..."
            value={this.state.location}
            onChange={(e) => this.setState({ location: e.target.value })}
          />
        </div>
        <button onClick={this.fetchWeather}>Get Weather</button>
        {this.state.isLoading && <p className="loader">Loading....</p>}
        {this.state.weather.weathercode && (
          <Weather
            weather={this.state.weather}
            location={this.state.location}
          />
        )}
      </div>
    );
  }
}

export default App;

interface WeatherProps {
  weather: {
    temperature_2m_max?: number[];
    temperature_2m_min?: number[];
    time?: string[];
    weathercode?: number[];
  };
  location: string;
}

class Weather extends React.Component<WeatherProps> {
  render() {
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = this.props.weather;
    return (
      <div>
        <h2>Weather {this.props.location}</h2>
        <ul className="weather">
          {dates?.map((date, i) => (
            <Day
              date={date}
              max={max?.at(i)}
              min={min?.at(i)}
              code={codes?.at(i)}
              key={date}
              isToday={i === 0}
            />
          ))}
        </ul>
      </div>
    );
  }
}

interface DayProps {
  date?: string;
  max?: number;
  min?: number;
  code?: number;
  isToday?: boolean;
}

class Day extends React.Component<DayProps> {
  render() {
    const { date, max, min, code, isToday } = this.props;

    return (
      <li className="day">
        <span>{code && getWeatherIcon(code)}</span>
        {date && <p>{isToday ? "Today" : formatDay(date)}</p>}
        <p>
          {min && Math.floor(min)}&deg; &mdash;{" "}
          <strong>{max && Math.ceil(max)}&deg;</strong>
        </p>
      </li>
    );
  }
}
