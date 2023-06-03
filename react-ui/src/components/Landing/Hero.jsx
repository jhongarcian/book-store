import React from 'react';
import { useNavigate } from 'react-router-dom'
import '../css/Hero.css'
import girl from '../../assets/girl.png'

const Hero = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('books')
    }
  return (
    <section className='hero-container'>
        <div className='y-wrap container'>
            <div className='headline-container'>
                <div className='headline'>
                    <h1>what book are you looking for?</h1>
                    <span>not sure what to read? Explore our catalog of best sellers books</span> 
                </div>
                <div>
                    <button onClick={handleClick}  className='btn-primary animate-btn'>Explore now</button>
                </div>
            </div>
            <div className='image-container'>
                <img src={girl} alt="girl reading books" className='img hero-image' />
            </div>
        </div>
    </section>
  )
}
export default Hero