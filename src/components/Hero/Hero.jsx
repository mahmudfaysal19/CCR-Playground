import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup';
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerwidth flexCenter hero-container ">

        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="blue-circle"/>
           <motion.h1
             initial={{y: "2rem", opacity: 0}}
             animate={{y: 0, opacity: 1}}
             transition = {{
                duration: 2,
                type: "spring"
             }}
           >
           Discover<br />
            Most Suitable<br /> Kit & Equipments 
           </motion.h1>
            </div>

        <div className="flexColstart hero-des">
        <span className="secondaryText">Find a variety of equipments that suit you need often </span> 
         <br></br>
         <span className="secondaryText">Forget all difficulties in finding a kit for yours</span> 
        </div>

        <div className="flexCenter search-bar">
          <HiLocationMarker color="var(--blue)" size={25}/>
          <input type="text" />
          <button className="button">Search</button>
        </div>

        <div className="flexCenter stats"> 
          <div className="flexColCenter stat">
          <span>
           <CountUp start={70} end= {100} duration={4} /> 
            <span>+</span>
          </span>
          <span className="secondaryText">Premium Kits</span>
          </div>

          <div className="flexColCenter stat">
          <span>
           <CountUp start={450} end= {500} duration={4} /> 
            <span>+</span>
          </span>
          <span className="secondaryText">Usual Kits</span>
          </div>

          <div className="flexColCenter stat">
          <span>
           <CountUp end= {20} duration={4}/>
           <span>+</span>
          </span>
          <span className="secondaryText">Will be Added Soon</span>
          </div>
         </div> 
        </div>

       {/* right side */}
       <div className="flexCenter hero-right">
       <motion.div
             initial={{x: "7rem", opacity: 0}}
             animate={{x: 0, opacity: 1}}
             transition = {{
              duration: 2,
              type: "spring"
             }}
           className="image-container">
           <img src="./ccr.jpg" alt=""/>
       </motion.div>
       </div>
     </div>
    </section>
  )
}

export default Hero