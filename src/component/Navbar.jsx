import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion } from 'motion/react'

function Navbar() {
    return (
        <>

            <motion.div className='flex justify-between items-center sm:h-16 h-10 bg-gray-800 text-white' 
            initial={{y:-100}}
            animate={{y:0,transition:{duration:0.5,type:"spring",stiffness:500}}} >
                <div  className='text-xl sm:text-2xl font-bold pl-5'>
                    Welcome
                </div>
                <div className='flex'>

                    <motion.div className=''  initial={{opacity:0}} animate={{opacity:1,transition:{delay:0.5,duration:0.5,type:"spring",stiffness:500}}}>
                        <NavLink className={(e)=>{return e.isActive?'bg-gray-600 p-2 sm:p-5':'p-2 sm:p-5'}} to="/">home</NavLink>
                    </motion.div>
                    <motion.div className='' initial={{opacity:0}} animate={{opacity:1,transition:{delay:0.5,duration:0.5,type:"spring",stiffness:500}}}>
                        <NavLink to="/contact" className={(e)=>{return e.isActive?'bg-gray-600 p-2 sm:p-5':'p-2 sm:p-5'}}>contact</NavLink>
                    </motion.div>
                    <motion.div className='' initial={{opacity:0}} animate={{opacity:1,transition:{delay:0.5,duration:0.5,type:"spring",stiffness:500}}}>
                    <NavLink to="/project" className={(e)=>{return e.isActive?'bg-gray-600 p-2 sm:p-5':'p-2 sm:p-5'}}>projects</NavLink>
                    </motion.div>
                    <motion.div className='' initial={{opacity:0}} animate={{opacity:1,transition:{delay:0.5,duration:0.5,type:"spring",stiffness:500}}}>
                    <NavLink to="/skills" className={(e)=>{return e.isActive?'bg-gray-600 p-2 sm:p-5':'p-2 sm:p-5'}}>skills</NavLink>
                    </motion.div>
                </div>
            </motion.div>

        </>

    )
}

export default Navbar