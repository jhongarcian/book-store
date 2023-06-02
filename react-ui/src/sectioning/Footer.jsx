import React from "react"
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import './css/Footer.css'
 
export default function Footer() {
  return (
    <footer>
      <div className="y-wrap">
        <AiFillGithub className="icon"></AiFillGithub>
        <AiFillLinkedin className="icon"></AiFillLinkedin>
      </div>
    </footer>
  )
}