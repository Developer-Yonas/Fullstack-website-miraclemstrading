import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Service.css'
import GetStarted from '../GetStarted/GetStarted'
const Service = () => {
  return (
    <section className="r-wrapper" id='Service'>
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Services we offer</span>
                <span className='primaryText'>Popular Materials like :</span>
            </div>
           
        
    
     <div className='blog'>
     <span className='primaryText'>Stationary Materials</span> 
         <div className="content-left">
                 <img src="s.jpg" alt="" />
                             <div class="container-right">  
                                         
                                         <p><h4>Stationery refers to commercially manufactured writing materials</h4> 
                                            including cut paper, envelopes, writing implements, continuous form 
                                             paper, and other office supplies. Stationery includes materials 
                                              to be written on by hand (e.g., letter paper) or by equipment such
                                               as computer printers.<br/>
                                     <br/><br/> </p><br/>
                                     <button className="button">
                                 <a href='mailto:miraclems2023@gmail.com'>Get In Touch</a>
                                     </button>
                             </div>          
         </div><br/><br/><br/><br/>

         <span className='primaryText'>Construction Materials</span> 
         <div className="content-left">
                 <img src="c.jpg" alt="" />
                             <div class="container-right">  
                                         
                                         <p><h4>Building material is material used for construction</h4> 
                                         Many naturally occurring substances, such as clay, rocks, sand,
                                         wood, and even twigs and leaves, have been used to construct buildings.
                                          Apart from naturally occurring materials, many man-made products are in use,
                                          some more and some less synthetic. The manufacturing of building materials 
                                          is an established industry in many countries and the use of these materials 
                                               is typically segmented into specific specialty trades, such as carpentry, 
                                                insulation, plumbing, and roofing work. They provide the make-up of habitats 
                                                 and structures including homes.            </p><br/>
                                     <button className="button">
                                 <a href='mailto:miraclems2023@gmail.com'>Get In Touch</a>
                                     </button>
                             </div>
                       
                                 
         </div><br/><br/><br/><br/>

         <span className='primaryText'>Electrical Equipment</span>
         <div className="content-left">
                 <img src="e.jpg" alt="" />
                             <div class="container-right">  
                                         
                                         <p><h4>Electrical equipment includes any machine powered by electricity</h4> 
                                         It usually consists of an enclosure, a variety of electrical components, and 
                                          often a power switch. Examples of these include:<br/>
                                          • Lighting<br/>
                                          • Major appliance<br/>
                                          • Small appliances<br/>
                                          • IT equipment (computers, printers etc.)<br/>
                                          • Motors, pumps and HVAC Systems   </p><br/>
                                     <button className="button">
                                 <a href='mailto:miraclems2023@gmail.com'>Get In Touch</a>
                                     </button>
                             </div>
                
                                 
         </div><br/><br/><br/><br/>

         <span className='primaryText'>Sanitary Materials </span>
         <div className="content-left">
                 <img src="sa.jpg" alt="" />
                         <div class="container-right">  
                                         
                       <p><h4>Sanitary ware</h4> 
                       is a catch-all phrase for sanitary appliances used in toilets and bathrooms
                        As a result, sanitary ware refers to any product that interacts with pipes
                        and is repaired by a plumber. It includes toilet sinks, washbasins, cisterns,
                        urinals, pedestals, and more. You can buy sanitaryware online from the best
                        sanitary ware brands at wholesale prices.<br/><br/>

                        Initially, all sanitarywares used porcelain because of its great chemical 
                        resistance and easy-to-clean surface. However, with improved technology,
                         today, we use several materials such as glass, granite, metals, and even
                          plastic to manufacture sanitary products online. </p><br/>
                                     <button className="button">
                                 <a href='mailto:miraclems2023@gmail.com'>Get In Touch</a>
                                     </button>
                             </div>
                        
                                 
         </div><br/><br/><br/><br/>

         <span className='primaryText'>Textile Manufacturing </span>
         <div className="content-left">
                 <img src="tex.jpg" alt="" />
                         <div class="container-right">  
                                         
                       <p><h4>Textile manufacturing (or textile engineering) is a major industry</h4> 
                       It is largely based on the conversion of fibre into yarn, then yarn into fabric.
                        These are then dyed or printed, fabricated into cloth which is then converted into
                         useful goods such as clothing, household items, upholstery and various industrial products.<br/><br/>

                       Different types of fibres are used to produce yarn. Cotton remains the most widely used
                        and common natural fiber making up 90% of all-natural fibers used in the textile industry.
                         People often use cotton clothing and accessories because of comfort, not limited to different 
                         weathers. There are many variable processes available at the spinning and fabric-forming stages
                          coupled with the complexities of the finishing and colouration processes to the production of
                           a wide range of products. </p><br/>
                                     <button className="button">
                                 <a href='mailto:miraclems2023@gmail.com'>Get In Touch</a>
                                     </button>
                             </div>
                        
                                 
         </div><br/><br/><br/><br/>
         </div>
</div>
<GetStarted/>
</section>
  )
}

export default Service