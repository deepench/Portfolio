import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/About';
function App() {
  return (
    // <Router>
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">

              <Sidebar />

            </div>
            <div className="col-lg-9 app__main-content">
              {/* navbar */}
              <Navbar />
			  <Routes>
			  <Route exact  path="/" element={<About />} />
			  <Route exact  path="/resume" element={<Resume />} />
			  <Route exact  path="/projects" element={<Projects />} />
			  <Route
			  path="*"
			  element={<Navigate to="/" />}
		  />
			</Routes>

            </div>
          </div>
        </div>
      </div>
    // </Router>
  );
}

export default App;
