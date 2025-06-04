import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerwidth flexCenter f-container">

            { /* left side */ }
            <div className="flexColStart f-left">
                <img src="./RUET_logo.svg.png" alt="" width={120} />

                <span className="secondaryText">
                    Our Vision is to make All Students
                    <br />
                    Find their Best Kit
               </span>
            </div>

            { /* right side */ }

            <div className="flexColStart f-right">
              <span className="primaryText">Information</span>
              <span className="secondaryText">Central Playground RUET</span>

              <div className="flexCenter f-menu">
                <span>Equipments</span>
                <span>Services</span>
                <span>Places</span>
                <span>About Us</span>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Footer