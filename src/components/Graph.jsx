import React from 'react';
import Plot from 'react-plotly.js';

const Graph = ({ forecast, dataCity }) => {
    return (
        <div className="grafh">
            <h4 className="subtitle forecast">{`${dataCity.name} - ${dataCity.country}`}</h4>
            <Plot
                data={[
                    {
                        x: forecast.map(time => time.dt_txt),
                        y: forecast.map(hum => hum.main.humidity),
                        type: 'scatter',
                        mode: 'lines',
                        marker: { color: 'purple' },
                        name: 'Humidity (%)',
                    },
                    {
                        x: forecast.map(time => time.dt_txt),
                        y: forecast.map(temp => Math.round(temp.main.temp)),
                        type: 'scatter',
                        mode: 'lines',
                        marker: { color: 'orange' },
                        name: 'Temp (ºC)',
                    },
                    {
                        x: forecast.map(time => time.dt_txt),
                        y: forecast.map(speed => Math.round(speed.wind.speed)),
                        type: 'scatter',
                        mode: 'lines',
                        marker: { color: 'green' },
                        name: 'Wind (Km / h)',
                    },
                ]}
                layout={{
                    width: 750,
                    height: 450,
                    title: 'WEATHER FORECAST [5 days]',
                    autosize: true,
                }}
                config={{
                    displayModeBar: false,
                    useResizeHandler: true,
                    style: { width: "100%", height: "100%" }
                }}
            />
        </div>
    );
};

export default Graph;
