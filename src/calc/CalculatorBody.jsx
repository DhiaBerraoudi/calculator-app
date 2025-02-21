import React, { useEffect, useState } from "react";
import { evaluate } from 'mathjs';
import "./CalculatorBody.css";
import { FaDeleteLeft } from "react-icons/fa6";
import { PiPlusMinusBold } from "react-icons/pi";
import { PiDivide } from "react-icons/pi";
const CalculatorBody = () => {
    const [value,setValue]=useState('')
    const [result,setResult]=useState(null);
    const [permission,setPermission]=useState(true);
    const [darkmode,setDarkmode]=useState(true);
    const toggleclass=()=>{
        setDarkmode((prev)=>!prev)
    }
    const calculation = (btnvalue)=>{
        if (btnvalue==='AC') {
            setValue('0')
            setResult(null)
            setPermission(true)
        }
        else if (permission) {
        if (btnvalue==='Delete') {
            value.length===1 ? setValue('0') :setValue((prev)=>prev.slice(0,prev.length-1))
        }
        else if ((btnvalue==='PlusMun')){
            value[0]==='-' ? setValue((prev)=>prev.slice(1,prev.length)) : setValue((prev)=>'-'+prev)
        }
        else if ((btnvalue==='=')){
            setResult(evaluate(value));
            setPermission(false)
        }
        else value==='0' ? setValue(btnvalue):setValue((prev)=>prev+btnvalue)
    }}
        useEffect(() => {
            const screenPart=document.getElementById("screen_part-operation");
            if (value === '') {
                screenPart.innerHTML = 0;
            } else {
                screenPart.innerHTML = value;
            }
            
        }, [value]);
        useEffect(() => {
            const screenPartresult=document.getElementById("screen_part-result");
                screenPartresult.innerHTML = '= '+result;
        }, [result]);
  return (
    <div className={`background ${darkmode? "bg-active":""}`} id='dhia' >
      <div className={`calcBody ${darkmode? "calc-bg":""}`}>
      <div className="dark-lightbutton" onClick={toggleclass}>
  <label className="theme">
    <input type="checkbox" className="input" />
    <svg
      className="icon icon-sun"
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" x2="12" y1="1" y2="3"></line>
      <line x1="12" x2="12" y1="21" y2="23"></line>
      <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
      <line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
      <line x1="1" x2="3" y1="12" y2="12"></line>
      <line x1="21" x2="23" y1="12" y2="12"></line>
      <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
      <line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
    </svg>
    <svg
      className="icon icon-moon"
      viewBox="0 0 24 24"
    >
      <path
        d="M12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8c-4.9.1-8.7 4.1-8.7 9 0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2s-.9-.2-1.2.1c-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"
      ></path>
    </svg>
  </label>
</div>

        <div className={`screen_part ${darkmode? "active-screen":""}`} id='screen_part'>
            <p id="screen_part-operation" className="screen_part-operation active" style={{opacity:result===null ? '1':'0.5'}}></p>
            <p id="screen_part-result" className="screen_part-result active" style={{display:result===null ? 'none':'block'}}></p>
        </div>
        <div className="button_part">
           <div className="button_part-deletion">
            <button type="button" className={`${darkmode? "active-deletion":""}`} onClick={()=>calculation('AC')} >AC</button>
            <button type="button" className={`${darkmode? "active-deletion":""}`} onClick={()=>calculation('Delete')} ><FaDeleteLeft /></button>
            <button type="button" className={`${darkmode? "active-deletion":""}`} onClick={()=>calculation('PlusMun')} ><PiPlusMinusBold/></button>
           </div>
           <div className="button_part-numbers">
            <button type="button" className={`${darkmode? "active-number":""}`} onClick={()=>calculation('9')}>9</button>
            <button type="button" className={`${darkmode? "active-number":""}`} onClick={()=>calculation('8')}>8</button>
            <button type="button" className={`${darkmode? "active-number":""}`} onClick={()=>calculation('7')}>7</button>
            <button type="button" className={`${darkmode? "active-number":""}`} onClick={()=>calculation('6')}>6</button>
            <button type="button" className={`${darkmode? "active-number":""}`} onClick={()=>calculation('5')}>5</button>
            <button type="button" className={`${darkmode? "active-number":""}`} onClick={()=>calculation('4')}>4</button>
            <button type="button" className={`${darkmode? "active-number":""}`} onClick={()=>calculation('3')}>3</button>
            <button type="button" className={`${darkmode? "active-number":""}`} onClick={()=>calculation('2')}>2</button>
            <button type="button" className={`${darkmode? "active-number":""}`} onClick={()=>calculation('1')}>1</button>
            <button type="button" className={`${darkmode? "active-number":""}`} onClick={()=>calculation('.')}>.</button>
            <button type="button" className={`zero ${darkmode? "active-number":""}`} onClick={()=>calculation('0')}>0</button>
           </div>
           <div className="button_part-operations">
            <button type="button" className={`${darkmode? "active-operation":""}`} onClick={()=>calculation('/')}><PiDivide/></button>
            <button type="button" className={`${darkmode? "active-operation":""}`} onClick={()=>calculation('*')}>x</button>
            <button type="button" className={`${darkmode? "active-operation":""}`} onClick={()=>calculation('-')}>-</button>
            <button type="button" className={`${darkmode? "active-operation":""}`} onClick={()=>calculation('+')}>+</button>
            <button type="button"  id="equal" className={`${darkmode? "active-operation":""}`} onClick={()=>calculation('=')}>=</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorBody;
