import React from 'react'
import './style.css'
export default function Header() {
   const handelshow=()=>{
      
   }
   return (
      <div className="header">
         <div className='bib'>
            <img className='imgf' src="img/header/logo.png" alt="" />
            <img className='imgs' src="img/header/logo1.png" alt="" />
            <h1 className='title'>BIB_BOOK</h1>
         </div>

         <button className='button' onClick={()=>handelshow()}>Connection</button>
      </div>


   )
 
}
