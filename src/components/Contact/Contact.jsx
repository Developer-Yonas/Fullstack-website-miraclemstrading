import React from 'react'
import './Contact.css'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import GetStarted from '../GetStarted/GetStarted';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      
  
      emailjs.sendForm('service_4ury27c', 'template_elbcvp9', form.current, 'pPGhGaU9vNlIIf9I-')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
            e.target.reset(); 
            alert("Message Sent");
        }, (error) => {
            console.log(error.text);
        });
    };


  return (
    <section className="c-wrapper" id='Contact'>
        <div className="paddings innerWidth flexCenter c-container">
            <div className="c-right">
        <div className="hero-container">
       
       <div id="myCarousel" class="carousel slide " data-bs-ride="carousel">
   
           <ol class="carousel-indicators">
               <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
               <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
               
           </ol>
         
           
           <div class="carousel-inner">
               <div class="carousel-item active">
                   <img src='images/IMG_5008.JPG' class="d-block w-100" alt="Slide 1"/>
                   <div class="carousel-caption d-none d-md-block">
                      <h2>General manager</h2>
             
                   </div>
               </div>
   
               <div class="carousel-item ">
                   <img src='images/al.jpeg' class="d-block w-100" alt="Slide 1"/>
                   <div class="carousel-caption d-none d-md-block">
                      <h2> Deputy manager</h2>
             
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
           </div>

            <div className="flexColStart c-left">
               <span className='orangeText'>Our Contacts</span>
               <span className='primaryText'>Easy to contact us</span>
               <span className='secondaryText'>We always providing the best service.</span>

            <div className="flexColStart contactModes">


                 {/*FIRST ROW */}

                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25}/>
                            </div>
                        <div className="flexColStart detail">
                            <span className='primaryText'>Call</span>
                            <span className='secondaryText'>+251955994663</span>
                        </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>
                    </div>



                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                        <div className="flexColStart detail">
                            <span className='primaryText'>Chat</span>
                            <span className='secondaryText'>+251902451784</span>
                        </div>
                        </div>
                        <div className="flexCenter button">Chat Now</div>
                    </div>

                </div>


            {/*SECOND ROW */}


                    <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                        <div className="flexColStart detail">
                            <span className='primaryText'>Video call</span>
                            <span className='secondaryText'>+251908175695</span>
                        </div>
                        </div>
                        <div className="flexCenter button">Video call Now</div>
                    </div>


                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <HiChatBubbleBottomCenter size={25}/>
                            </div>
                        <div className="flexColStart detail">
                            <span className='primaryText'>Message</span>
                            <span className='secondaryText'>+251908175695</span>
                        </div>

                        </div>
                        <div className="flexCenter button">Message Now</div>
                    </div>

                </div>
            </div>
            </div>

          
        </div>

        {/* contact by message to email */}
        <div className="container">
        
    <form ref={form} onSubmit={sendEmail}>
             <h3>GET IN TOUCH</h3>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Phone</label>
      <input type="number" name="phone" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
        </div>
        <GetStarted/>
    </section>
  )
}

export default Contact