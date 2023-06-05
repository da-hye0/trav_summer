import './App.css';
import App from "./App"
import {Link} from 'react-router-dom'

import React, { useState } from 'react'

import dummy from"./data.json"
import QusImages from './QusImage.js';
import RstImage from './RstImage.js';
import mainImage from "./MainImage/main.png";
import styled from "styled-components";
import c from "./MainImage/c.png"
import h from "./MainImage/h.png"

//new
function Question(){
   
  let [extraversion, setextraversion] = useState(0);
  let [intuitive, setintuitive] = useState(0);
  let [thinking, setthinking] = useState(0);
  let [prospecting, setprospecting] = useState(0);

  const [qus, setQus] = useState(1);
  let [rst, setrst] = useState(0);
  const [check, setcheck]=useState(false);

  
  function wait(sec) {
    let start = Date.now(), now = start;
    while (now - start < sec * 1000) {
        now = Date.now();
    }
}

  const plusQus = (type, score) => {
      setQus(qus+1);
      if(type === "extraversion"){
          setextraversion(extraversion+=score);
      }
      else if(type === "intuitive"){
        setintuitive(intuitive+=score);
      }
      else if(type ==="thinking"){
        setthinking(thinking+=score);
      }
      else if(type === "prospecting"){
        setprospecting(prospecting+=score)
      }
      if(qus==10){re();}
      
  }

  const minusQus = (type, score) => {
    setQus(qus+1);
    if(type === "extraversion"){
        setextraversion(extraversion-=score);
    }
    else if(type === "intuitive"){
      setintuitive(intuitive-=score);
    }
    else if(type === "thinking"){
      setthinking(thinking-=score);
    }
    else if(type === "prospecting"){
      setprospecting(prospecting-=score)
    }
    if(qus==10){re();}
  }

  const re =() =>{
    if(extraversion > 0 ){
      if(intuitive > 0){
        if(thinking > 0){setrst(1); ;/*entp, entj*/}
        else if(thinking < 0){ setrst(4);/*enfp, enfj*/}
      }else if(intuitive < 0){ 
        if(prospecting > 0){setrst(5);/*esfp, estp*/}
        else if(prospecting < 0){setrst(6); /*esfj, estj*/}
      }
    }
    else if(extraversion < 0){ 
      if(prospecting > 0){
        if(intuitive > 0){setrst(7);/*infp, intp*/}
        else if(intuitive < 0) {setrst(2);/*isfp,istp*/}
      }
      else if(prospecting < 0){
        if(thinking > 0) {setrst(3); /*intj, istj*/}
        else if(thinking <0){setrst(8); /*infj, intj */}
      }
    }
   
  }

  return(   
    <div className="App">
      <header className="App-header">
     <br/>
     <a href="https://link.coupang.com/a/0flOq" target="_blank" referrerpolicy="unsafe-url"><img src="https://ads-partners.coupang.com/banners/667338?subId=&traceId=V0-301-bae0f72e5e59e45f-I667338&w=320&h=50" alt=""/></a>
          <head>
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5741659942476200"
     crossorigin="anonymous"></script>
          </head>
          {qus<11?(
              <>
              <div calssName = "containerBox">
                <div className ="container">
                    <Progress width ={(((qus)/10)*100)+"%"} />
                    <img className="barEffect" src={c} alt={c}/> 
                  </div>
              </div>
              </>
          ):(<></>)
          }
            <div className = "effect">
              {qus<11 ? (
                <>
                {dummy.questionList.map((id)=> (
                  <>
                        {id.id == qus ? (
                          
                           <div >
                        
                             <div className="qusBox">
                                <a className = "font"  key={id.id}>
                                    {id.q} <br/><br/><br/>
                                </a>
                              </div>
                              <div>
                                { QusImages.map((k) =>
                                  <>
                                  {k.id == qus ? (
                                    <img className = "image" key={k.id} src={k.src} alt={k.src} />
                                    
                                  ):(<></>)
                                  }
                                  </>
                                )}
                              </div>
                          
                              <br/>
                                  <button className = "button" onClick={()=> plusQus(id.type,id.score) }>
                                      {id.a[0]}
                                  </button>
                              <br/><br/>
                            
                              <button className = "button" onClick={()=> minusQus(id.type,id.score) }>
                                  {id.a[1]}
                              </button>
<br/><br/>
                              
                          </div>
                        ):(
                          <></>
                        )}
                      </>
                ))}
                </>

                ):(
                <>
                  {check==true?(<> 
                    {dummy.infoList.map((id)=>(
                      <>
                        {id.id == rst ?(
                          
                          <div>
                        
                            <br/><br/>
                            <div>
                                  { RstImage.map((k) =>
                                    <>
                                    {k.id == rst ? (
                                      <img key={k.id} src={k.src} alt={k.src} />
                                    ):(<></>)
                                    }
                                    
                                    </>
                                  )}
                            </div>
                            <br/><br/><br/><br/>
                            <a className = "font" key={id.id}>
                              "{id.name}" <br/><br/><br/><br/>
                            </a>
                              <a className = "desc"> • {id.desc[0]}  <br/><br/> </a>
                              <a className = "desc"> • {id.desc[1]}  <br/><br/> </a>
                              <a className = "desc"> • {id.desc[2]}  <br/><br/> </a>
                              <a className = "desc"> • {id.desc[3]}  <br/><br/> </a>
                            <br/><br/> 
                                 <a href="https://link.coupang.com/a/0fmwN" target="_blank" referrerpolicy="unsafe-url"><img src="https://ads-partners.coupang.com/banners/667353?subId=&traceId=V0-301-5a8c79a76485eb21-I667353&w=320&h=50" alt=""/></a><br/>
                            <a className = "desc">CUBEE</a>
                            <br/> <br/>
                               
                               <br/> <br/> 
                          </div> 
                          
                        ):( <> </> )}
                    
                      </>
                  ))}
                    

                  </>
                  ):(
                  <>
                      <div className="App">
                      <header className="App-header">
                        <br/><br/><br/>
                          <a className = "mainfont " >
                            테스트 완료!
                          </a>
                          <img className='App-logo' src={h} alt="h"/> 
                          <br/><br/>
                         
                          <button className = "button" onClick={()=> setcheck(true)}>
                            결과확인하기
                          </button>
                         
                          <br/>
                              <a className = "desc">CUBEE</a>
                     
                           <br/><br/>
                      </header>

                  </div>
                  </>
                  )}
                 


                </>
                )}
               <a href="https://link.coupang.com/a/0fmwN" target="_blank" referrerpolicy="unsafe-url"><img src="https://ads-partners.coupang.com/banners/667353?subId=&traceId=V0-301-5a8c79a76485eb21-I667353&w=320&h=50" alt=""/></a>
                  <br/>
            </div>
      </header>
    </div>
  );
}

export default Question;
                                       
const Progress = styled.div`
  background-color: #E8F7FF;
  width: ${props => props.width};
  height: 100%;
  transition: width 1s;
  border-radius: 20px;
  
`;


