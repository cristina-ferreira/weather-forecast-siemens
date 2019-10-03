/* eslint-disable react/jsx-wrap-multilines */
import React, { Component } from 'react';
import Search from './Search';
import Today from './Today';
import Graph from './Graph';

class App extends Component {
    state = {
        city: "",
        country: "",
        currentTemp: "",
        maxTemp: "",
        minTemp: "",
        sunrise: "",
        sunset: "",
        forecast: [],
        dataCity: {},
    }


    getData = (search) => {
        if (search !== "") {
            fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=05b4ebecdf48b4762d4580e3fc720a61`)
                .then(res => res.json())
                .then((data) => {
                    this.setState({
                        city: data.name,
                        country: data.sys.country,
                        currentTemp: data.main.temp,
                        maxTemp: data.main.temp_max,
                        minTemp: data.main.temp_min,
                        sunrise: data.sys.sunrise * 1000,
                        sunset: data.sys.sunset * 1000,
                    });
                });
            fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=05b4ebecdf48b4762d4580e3fc720a61`)
                .then(res => res.json())
                .then((data) => {
                    this.setState({
                        forecast: data.list,
                        dataCity: data.city,
                    });
                });
        }
    }

    MilliToHours = (m) => {
        const time = new Date(m);
        const hours = time.getHours();
        const minutes = time.getMinutes();
        if (minutes < 10) {
            return `${hours}:${0}${minutes}`;
        }
        if (hours < 10) {
            return `${hours}:${minutes}`;
        }
        return `${hours}:${minutes}`;
    }

    handleSubmitSearch = (text) => {
        this.getData(text);
        this.setState({ city: "" });
    }

    render() {
        const {
            city,
            country,
            currentTemp,
            minTemp,
            maxTemp,
            sunrise,
            sunset,
            forecast,
            dataCity,
        } = this.state;

        return (
            <div className=".container">
                <div className="row">
                    <div className="col-12 col-sm-5 col-lg-5">
                        <h2 className="title">Global Weather Forecast</h2>
                        <Search
                            handleSubmitSearch={this.handleSubmitSearch}
                        />
                        {
                            city !== "" &&
                            <Today
                                city={city}
                                country={country}
                                currentTemp={currentTemp}
                                minTemp={minTemp}
                                maxTemp={maxTemp}
                                sunrise={this.MilliToHours(sunrise)}
                                sunset={this.MilliToHours(sunset)}
                            />
                        }
                    </div>
                    <div className="col-12 col-sm-7 col-lg-7">
                        {
                            (city !== "" && forecast !== undefined) &&
                                <Graph
                                    forecast={forecast}
                                    dataCity={dataCity}
                                />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
