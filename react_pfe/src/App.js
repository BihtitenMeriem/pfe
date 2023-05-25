import React from 'react'
import ReactDOM from "react-dom/client";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import Login from "./components/login/Login"
import Header from './components/header/Header';
import './App.css'
import SideNavBar from './components/navbar/SideNavBar';
import Pied from './components/footer/Pied'
<<<<<<< HEAD
import Home from './components/home/Home';
=======
>>>>>>> 37591ed720a51a3cecd32fe076e573b7d7778234
export default function App() {
  return (
    <div className='all'>
      <header >
        <Header/>
      </header>
      <div className='main'>
        <aside >
          <SideNavBar />
        </aside>

      </div>
      <footer>
        <Pied />
      </footer>
<<<<<<< HEAD
{/* <Home/> */}
=======
>>>>>>> 37591ed720a51a3cecd32fe076e573b7d7778234
    </div>
  );
}