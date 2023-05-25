import React from 'react'
import ReactDOM from "react-dom/client";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import Login from "./components/login/Login"
import Header from './components/header/Header';
import './App.css'
import SideNavBar from './components/navbar/SideNavBar';
import Pied from './components/footer/Pied'
import Home from './components/home/Home';
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
{/* <Home/> */}
    </div>
  );
}