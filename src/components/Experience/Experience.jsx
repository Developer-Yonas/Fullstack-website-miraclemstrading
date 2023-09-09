import React from 'react'
import './Experience.css'
import GetStarted from '../GetStarted/GetStarted'
const Experience = () => {
  return (
    <section className="r-wrapper" id='Experience'>
        <div className="paddings innerWidth r-container">
                    <div className="r-head flexColStart">
                        <span className='orangeText'>Experience</span><br/>
                        <span className='primaryText'>Quality means doing it right when no one is looking.</span><br/>
                        <div className='award'>
                          <img src="awardd.png" alt="" />
                        </div>
                    </div> 
        </div> 
        <GetStarted/>
            </section>
  )
}

export default Experience