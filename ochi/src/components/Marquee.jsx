import {  motion } from 'framer-motion';

export default function Marquee(){
    return(
        <div data-scroll data-scroll-section data-scroll-speed="0.2"  className="w-full bg-[#004D43] py-24 rounded-t-xl -mt-28 overflow-hidden ">
            {/* <div className=""> */}
                <div className=" border-b-2 border-t-2 flex items-center text-white text-[18vw] text-nowrap font-spaceGrotesk uppercase font-bold whitespace-nowrap h-60">
                    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration : 5}} className="tracking-tighter pr-10">we are ochi</motion.h1>
                    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration : 5}} className="tracking-tighter pr-10">we are ochi</motion.h1>
                    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration : 5}} className="tracking-tighter pr-10">we are ochi</motion.h1>
                    
                </div>
            {/* </div> */}

        </div>
    )
}