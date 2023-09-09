import React from 'react'
import './Hero.css'
import GetStarted from '../GetStarted/GetStarted'




const Hero = () => {
  return (
    <section className="h-wrapper" id='Hero'>
        <div className="hero-container">
       
    <div id="myCarousel" class="carousel slide " data-bs-ride="carousel">

        <ol class="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="4"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="5"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="6"></li>
            
        </ol>
      
        
        <div class="carousel-inner">
            <div class="carousel-item ">
                <img src='mi.png' class="d-block w-100" alt="Slide 1"/>
                <div class="carousel-caption d-none d-md-block">
                   <h1>Wholesale</h1>
          
                </div>
            </div>

            <div class="carousel-item ">
                <img src='/sa.jpg' class="d-block w-100" alt="Slide 1"/>
                <div class="carousel-caption d-none d-md-block">
                   <h1>Sanitary Materials</h1>
          
                </div>
            </div>

            <div class="carousel-item ">
                <img src='/e.jpg' class="d-block w-100" alt="Slide 1"/>
                <div class="carousel-caption d-none d-md-block">
                   <h1>Electrical Equipment</h1>
          
                </div>
            </div>


            <div class="carousel-item">
                <img src='images/miracle.jpeg' class="d-block w-100" alt="Slide 2"/>
                <div class="carousel-caption d-none d-md-block">
                <h1>Our Office</h1>
                   
                </div>
            </div>

            <div class="carousel-item">
                <img src='images/cob.jpg' class="d-block w-100" alt="Slide 2"/>
                <div class="carousel-caption d-none d-md-block">
                <h1>Agricultural Tools</h1>
                   
                </div>
            </div>

            <div class="carousel-item">
                <img src='images/con.jpg' class="d-block w-100" alt="Slide 2"/>
                <div class="carousel-caption d-none d-md-block">
                <h1>Construction Materials</h1>
                   
                </div>
            </div>

            <div class="carousel-item active" >
                <img src='images/office.jpeg' class="d-block w-100" alt="Slide 3"/>
                <div class="carousel-caption d-none d-md-block">
                <h1>Our Office</h1>  
                    
                </div>
            </div>
        </div>

      
        <a class="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
        </div>
    
   
      

        </div>




<div className="flexColStart welcome">
<div className='flexColStart primaryText'>
<div className='flexColStart orangeText'>
  <h2>Welcome To Miracle  Ms Trading ! </h2></div>
  <p>Miracle ms trading was established in 2023 and it's buisness type is <br/>
    sole proprietorship that can be owned and controlled by an individual,<br/>
    a company or a limited liability partnership.<br/>
    <br/><br/><br/>

    it is an importing and whole selling company officially registered in <br/>
    Ethiopia. The company is engaged in many types of commercial activities<br/>
    and supplying wide range of products.<br/>
    <br/><br/><br/>

    miracle ms trade consists of purchasing and selling goods,generally to<br/>
    retailers,professional(industrial or commercial) users or authorities,<br/>
    or to other wholesalers or intermediaries, regardless of the quantities sold.<br/>
    <br/><br/><br/>
  </p></div>
</div>



        <GetStarted/>
    </section>
  )
}

export default Hero