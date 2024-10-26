import { animate, motion } from 'framer-motion';

export default function Marquee(){
    return(
        <div className="w-full bg-[#004D43] py-10 rounded-t-xl ">
            {/* <div className=""> */}
                <div className=" border-b-2 border-t-2 flex items-center text-white text-[12vw] text-nowrap font-spaceGrotesk uppercase font-bold whitespace-nowrap tracking-tighter gap-10">
                    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration : 5}} className="pt-2 pb-2 -mb-4 -mt-4">we are ochi</motion.h1>
                    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration : 5}} className="pt-2 pb-2 -mb-4 -mt-4">we are ochi</motion.h1>
                    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration : 5}} className="pt-2 pb-2 -mb-4 -mt-4">we are ochi</motion.h1>
                    
                </div>
            {/* </div> */}

        </div>
    )
}