import React from 'react';
import '../css/Hero.css'
import girl from '../../assets/girl-reading-books.png'

const Hero = () => {
  return (
    <section className='hero-container-left'>
        <div className='y-wrap container'>
            <div className='headline-container'>
                <div className='headline'>
                    <h1>what book are you looking for?</h1>
                    <span>not sure what to read? Explore our catalog of best sellers books</span> 
                </div>
                <div>
                    <button className='btn-primary animate-btn'>Explore now</button>
                </div>
            </div>
            <div className='image-container'>
                <img src={girl} alt="girl reading books" className='img' />
            </div>
        </div>
    </section>
  )
}
export default Hero