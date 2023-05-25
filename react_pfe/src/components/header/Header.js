import React from 'react'
import './style.css'
export default function Header() {
<<<<<<< HEAD
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
=======
  return (
        <div className="header">
         {/* <div className='bib'> */}
            <img src="img/header/logo.png" alt="" />
            <h1 className='title'>BIB_BOOK</h1>
         {/* </div> */}
            
            <button>Connection</button>
        </div>

    
  )
>>>>>>> 37591ed720a51a3cecd32fe076e573b7d7778234
}
