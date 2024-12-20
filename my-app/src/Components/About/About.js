import React from 'react'
import Hero from '../HERO/Hero'
import './About.css'
function About(){
  return (
    <div>
      <div>
        <Hero />
      </div>
        <div style={{ color: 'black', backgroundColor: 'white', textAlign: 'center', padding: '50px 80px', textAlign: 'justify' }}>
          <h3 style={{ textAlign: 'center' }}>Founders</h3>
        </div>
        <div className='founder1'>
          <div className='column1'>
           <img src='assets/images/Products/jersey.png'></img>
          </div>
          <div className='column2'>
            <h2>R NAVEEN - CEO </h2>
            <p>
            Arcane, a visually stunning animated series set in the League of Legends universe, delves into the complex relationship between the sisters Vi and Jinx. 
            As tensions escalate between the utopian city of Piltover and the oppressed undercity of Zaun, the sisters find 
            themselves on opposing sides of a conflict fueled by arcane technology and clashing ideals. With its gripping narrative, stunning animation, 
            and exploration of themes like power, corruption, and the consequences of progress, Arcane has captivated audiences worldwide.
            </p>
          </div>
        </div>
        <div style={{ color: 'black', backgroundColor: 'blue', textAlign: 'center', padding: '50px 80px', textAlign: 'justify' }}>
          <h3 style={{ textAlign: 'center' }}>CEO</h3>
        </div>
        <div className='founder2'>
          <div className='column1'>
           <img src='assets/images/Products/jersey.png'></img>
          </div>
          <div className='column2'>
            <h2>R NAVEEN - CEO </h2>
            <p>
            Arcane, a visually stunning animated series set in the League of Legends universe, delves into the complex relationship between the sisters Vi and Jinx. 
            As tensions escalate between the utopian city of Piltover and the oppressed undercity of Zaun, the sisters find 
            themselves on opposing sides of a conflict fueled by arcane technology and clashing ideals. With its gripping narrative, stunning animation, 
            and exploration of themes like power, corruption, and the consequences of progress, Arcane has captivated audiences worldwide.
            </p>
          </div>
        </div>
    </div>
  )
}

export default About