import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=be64ae1b29d910dbbc8a059ccd7e2992`

  return (
    <div className="App"></div>
  );
}

export default App;
