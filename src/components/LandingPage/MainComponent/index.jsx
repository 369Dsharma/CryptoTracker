import React from 'react'
import './styles.css'
import Button from '../../Common/Button'

import iphone from "../../../assets/iphone.png"
import gradient from "../../../assets/gradient.png"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

const MainComponent = () => {
  return (
    <div className='container'>
        <div className='left-component'>
            <motion.h1 className='track-crypto-heading' 

                initial = {{opacity : 0 , y : 50}}
                animate = {{opacity : 1 , y : 0}}
                transition={{duration : 0.5 }}
            
            
            >
                Track Crypto
            </motion.h1>

            <motion.h1 className='real-time-heading'
                initial={{opacity : 0 , y : 50}}
                animate={{opacity:1 , y: 0}}
                transition={{duration : 0.5 , delay : 0.5}}
            
            >
                Real time.
            </motion.h1>

            <motion.p className='paraclass'

                initial={{opacity : 0 , y : 50}}
                animate={{opacity:1 , y: 0}}
                transition={{duration : 0.5 , delay : 1}}
            
            >
                Track crypto through a public api in real time. Visit the dashboard to do so!
            </motion.p>


            {/* buttons */}

            <motion.div className='btn-flex'

                initial={{opacity : 0 , x : 50}}
                animate={{opacity:1 , x: 0}}
                transition={{duration : 0.5 , delay : 1.5}}
            
            >
                <Link to="/dashboard">
                    <Button outlined={false} text={"Dashboard"} onClick={()=> console.log("dashboard")} />
                </Link>
                <Button outlined={true} text={"Share"} />
            </motion.div>
        </div>

        <div className='phone-container'>
            <motion.img src={iphone} alt='iphone img' className='iphone'
            
                initial={{y : -10}}
                animate={{y : 10}}
                transition={{
                    type:"smooth",
                    repeatType:"mirror",
                    duration:1,
                    repeat:Infinity,
                }}
            
            />

            <img src={gradient} alt='gradient img' className='gradient' />
        </div>
    </div>
  )
}

export default MainComponent
