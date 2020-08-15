import React from 'react';

function App() {
  const API_KEY = process.env.REACT_APP_QUIZ_API_KEY;
  return (
    <div>
      Hello World
      {API_KEY}
    </div>
  );
}

export default App;
