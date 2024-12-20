import React from 'react'
import Hero from '../HERO/Hero'
import './About.css'
function About(){
  return (
    <div>
        <Hero />
        
<div className="row">
  <div className="column" style={{backgroundColor: 'grey'}}>
    <h2>Column 1</h2>
    <p>Some text..</p>
  </div>
  <div className="column">
    <h2>Column 2</h2>
    <p>Some text..</p>
  </div>
</div>
    </div>
  )
}

export default About