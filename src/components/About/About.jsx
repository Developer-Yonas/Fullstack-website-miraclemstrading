import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './About.css'
import data from '../../utils/accordion'
import GetStarted from '../GetStarted/GetStarted';
const About = () => {
  return (
    <section className="v-wrapper" id='About'>
        <div className="paddings innerWidth flexCenter v-container">

            <div className="v-left">
                <div className="image-container">
                    <img src='./About.png' alt=" " />
                </div>
              </div>  
                <div className="flexColStart v-right">
                    <span className='orangeText'>About Us</span>
                    <span className='primaryText'>Miracle ms trading was founded on 2023. and it's whole sale trading.</span>
                    <span className='secondaryText'>We provide the best service to you.</span>

                <Accordion
                    className="accordion"
                    allowMultipleExpanded={false}
                    preExpanded={[0]}
                    >
                        {
                            data.map((item, i)=>{
                                const [className, setClassName] = useState(null)
                                return (
                                    <AccordionItem className={'accordionItem ${className}'} key={i}  uuid={i}>
                                        <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>
                                            <AccordionItemState>
                                                {({expanded})=> 
                                                expanded
                                                ? setClassName("expanded")
                                                : setClassName("collapsed")                                              
                                            }
                                            </AccordionItemState>
                                            <div className="flexCenter icon">
                                                {item.icon}
                                            </div>
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/> 
                                            </div>
                                        </AccordionItemButton>
                                        </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText"> {item.detail} </p>
                                    </AccordionItemPanel>
                                    </AccordionItem>
                                );
                            })
                        }
                </Accordion>

                </div>
            
        </div>
        

<div className="about">
    <div className="orangeText">Our Mission</div>
    <div className="primaryText">
    • To import and supply quality product with convenient prices to maintain our customers<br/>
     satisfaction and sustain our profitability.<br/>
    • Have a wider range of products as per the market needs.<br/>
    • Engage in trade with focus on quality services to customers and professional competences.<br/>
    </div>    
    <div className="ab">
    <div className="orangeText">Our Vission</div>
    <div className="primaryText">
    • To be one of the top positions in our field business.<br/>
    • To develop our business and employees.<br/>
    • Engage in trade with focus on quality services to customers and professional competences.<br/>
    </div>
    </div>
</div>


<GetStarted/>         
    </section>
  )
}

export default About