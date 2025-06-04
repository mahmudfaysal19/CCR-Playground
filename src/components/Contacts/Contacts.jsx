import React from 'react'
import './Contacts.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contacts = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side */}
            <div className="flexColStart c-left">
                <span className="orangeText">Our Contacts</span>
                <span className="primaryText">Easy to Contact us</span>
                <span className="seconadryText">We always ready to help by providing 
                the best services for you. We beleive a good 
                facilities to make your playing better. </span>

                <div className="flexConStart contactModes">
                    {/* first row */}
                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon"> 
                                   <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className="secondaryText">+8801312412190</span>
                                </div>
                            </div> 
                            <div className="flexCenter button">Call Now</div>
                        </div>
                    {/* second row */}
                    
                    <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon"> 
                                   <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Chat</span>
                                    <span className="secondaryText">+8801312412190</span>
                                </div>
                            </div> 
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    
                    {/* third row */}
                    <div className="flexStart row">
                    <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon"> 
                                   <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Vedio Call</span>
                                    <span className="secondaryText">+8801312412190</span>
                                </div>
                            </div> 
                            <div className="flexCenter button">Vedio Call Now</div>
                        </div>
                    </div>
                    {/* fourth row */}
                    <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon"> 
                                   <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Message</span>
                                    <span className="secondaryText">+8801312412190</span>
                                </div>
                            </div> 
                            <div className="flexCenter button">Message Now</div>
                        </div>
                    </div>
                 </div>
              </div>

            {/* right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./123.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacts