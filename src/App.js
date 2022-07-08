
import './App.css';
import React from 'react';
import VideoResources from './Resources/VideoResources';
import MainPage from './MainPage/MainPage'
import Login from './Login/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<ProtectedRoute><MainPage/></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
