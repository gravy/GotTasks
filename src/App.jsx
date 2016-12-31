import React from 'react';
import Navigation from 'Navigation';

let App = ({children}) => {
  return (
    <div className="App">
      <Navigation/>
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default App;
