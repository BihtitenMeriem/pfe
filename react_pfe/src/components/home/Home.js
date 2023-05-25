import React from 'react'
import './style.css'
export default function Home() {
  return (
    <div>
       <select>
        <option selected value="0">Pure CSS Select</option>
        <option value="1">HTML</option>
        <option value="2">CSS</option>
        <option value="3">JAVASCRIPT</option>
        <option value="4">PYTHON</option>
    </select>
    </div>
  )
}
