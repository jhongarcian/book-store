import React from "react"
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import './css/Footer.css'
 
export default function Footer() {
  return (
    <footer>
      <div className="y-wrap">
        <a href="https://github.com/jhongarcian">
          <AiFillGithub className="icon"></AiFillGithub>
        </a>
        <a href="https://www.linkedin.com/in/john-garcian/">
          <AiFillLinkedin className="icon"></AiFillLinkedin>
        </a>
      </div>
    </footer>
  )
}