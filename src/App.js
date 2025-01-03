import './App.css';

import { Home } from './Home';
import { Department } from './Department';
import { Employee } from './Employee';
import { Navigation } from './Navigation';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
      <h3 className="m-3 d-flex justify-content-center">koushik </h3>

        <h3 className="m-3 d-flex justify-content-center">
          React JS Tutorial
        </h3>

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/department" element={<Department />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
