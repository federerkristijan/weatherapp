import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=be64ae1b29d910dbbc8a059ccd7e2992`

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Berlin</p>
            <div className="temp">
              <h1>35° C</h1>
            </div>
            <div className="description">
              <p>Clouds</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className='bold'>30° C</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p className='bold'>20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className='bold'>12 km/h</p>
            <p>Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
