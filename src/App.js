import './App.css';
import React, {Component, useState} from 'react'
import {Link, Route, Routes, BrowserRouter} from 'react-router-dom'

import Question from "./Question";

import mainImage from "./MainImage/main.png"

class CubeeRouter extends Component{
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App></App>}></Route>
          <Route path="/Qus" element={<Question></Question>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <br/><br/><br/>
          <a className = "mainfont " >
            나만의 힐링스팟
          </a>
          <img className='mainImage' src={mainImage} alt="main"/> 
          <br/><br/>
          <Link to="/Qus">
            <button className = "button">
              START!
            </button>
          </Link>
          <br/> <br/>
              <a className = "desc">CUBEE</a>
          <br/>
           <a href="https://link.coupang.com/a/0fiSu" target="_blank" referrerpolicy="unsafe-url">
                   <img src="https://ads-partners.coupang.com/banners/667327?subId=&traceId=V0-301-371ae01f4226dec2-I667327&w=320&h=50" alt=""/>
            </a>

      </header>
    </div>
  );
}

export default CubeeRouter;
