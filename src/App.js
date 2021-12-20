import React from 'react';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-3 ">
            <div className="app__sidebar">
              <Sidebar />
            </div>
          </div>
          <div className="col-md-9 app__main-content">main</div>
        </div>
      </div>
    </div>
  );
}

export default App;
