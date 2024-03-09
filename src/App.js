import logo from './logo.svg';
import './assets/bootstrap/css/bootstrap.min.css';
import './App.css';
import Dashboard from './Dashboard';
import { useState } from 'react';
import Login from './Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Logout from './Logout';

function App() {
  const [user, setUser] = useState(false)
  const [userData, setUserData] = useState([])
  
  return (
    <>
      {user ?(
        <Dashboard userData={userData} setUser={setUser}/>
      ):(
        <Login setUser={setUser}  setUserData={setUserData}/>
      )
      }
    </>
  );
}

export default App;
