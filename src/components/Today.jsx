/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Today = ({
    city,
    currentTemp,
    maxTemp,
    minTemp,
    sunrise,
    sunset
}) => {
    if (currentTemp === "") {
        return "";
    }
    return (
        <div className="today-wrap">
            <h5 className="subtitle today-subtitle">{city}</h5>
            <p className="today-title">TODAY'S WEATHER</p>
            <div className="today-inf">
                <p>
                    <img className="today-temp-img" src="https://res.cloudinary.com/dl2ribpco/image/upload/v1566418129/siemens/atqc6yr99kl8qsjjj22v.png" alt="" />
                    <span className="today-min-max-p">Min</span><span className="min">{Math.round(minTemp)}°C</span>
                </p>
                <p>
                    <img className="today-temp-img" src="https://res.cloudinary.com/dl2ribpco/image/upload/v1566418132/siemens/ngvacptchs665juqs0p0.png" alt="" />
                    <span className="today-min-max-p">Max</span><span className="max">{Math.round(maxTemp)}°C</span>
                </p>
                <p>
                    <img className="today-sun-img" src="https://res.cloudinary.com/dl2ribpco/image/upload/v1566420681/siemens/fumt4qjxpup1l8dj43ei.png" alt="" />
                    Sunrise at <span className="today-sun-time">{sunrise}</span>
                </p>
                <p>
                    <img className="today-sun-img" src="https://res.cloudinary.com/dl2ribpco/image/upload/v1566420679/siemens/vkw9rdifohwrqltwd8yo.png" alt="" />
                    Sunset at <span className="today-sun-time">{sunset}</span>
                </p>
                <div className="today-current">
                    <p className="today-current-p">
                        Current temperature <span className="today-current-temp">{Math.round(currentTemp)}</span>°C
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Today;
