import React from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage";
import ToDo from "./pages/ToDo";

function App() {
    let isLogged = localStorage.getItem('isLogged') ?? 'false'
  return (
      <div className="d-flex m-auto">
          {isLogged && isLogged === 'false' ? <LoginPage /> : <ToDo />}

      </div>
  );
}

export default App;
