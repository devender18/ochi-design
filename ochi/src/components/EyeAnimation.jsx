import {animate, motion} from "framer-motion";
import { useEffect, useState } from "react";

export function EyeAnimation(){

    const [rotate, setRotate] = useState(0);


    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })
    },[rotate])
    return (
        <div className="w-screen h-screen">
            <div className=" h-full w-full bg-[url('assets/eyejpg.jpg')] bg-center bg-cover relative">
                {/* red bg */}
                <div className=" w-1/2 h-[20vw] flex justify-center items-center gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    {/* first eye */}
                    {/* outer white */}
                    <div className="bg-white w-[15vw] h-[15vw] rounded-full flex justify-center items-center">

                        {/* inner black */}
                        <div className="w-[10vw] h-[10vw] rounded-full bg-black relative"
                        style={{transform: `origin-[33%_75%]`}}
                        >

                            {/* diameter */}
                            <motion.div 
                            className="w-full  h-[2vw] rotate-90 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
                            style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}}

                            >
                               

                                {/* inner white - eye balls */}
                                <div className="w-[2vw] h-[2vw] bg-white rounded-full">

                                </div>



                            </motion.div>

                            <motion.div 
                            className="text-white text-center z-0 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-opacity-60">
                                Play
                            </motion.div>

                        </div>
                        

                    </div>

                    {/* second eye */}
                    {/* outer white */}
                    <div className="bg-white w-[15vw] h-[15vw] rounded-full flex justify-center items-center">

                        {/* inner black */}
                        <div className="w-[10vw] h-[10vw] rounded-full bg-black relative">

                            {/* diameter */}
                            <motion.div 
                            className="w-full  h-[2vw] rotate-90 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
                            style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}}

                            >

                                {/* inner white - eye balls */}
                                <div className="w-[2vw] h-[2vw] bg-white rounded-full">

                                </div>



                            </motion.div>

                            <motion.div 
                            className="text-white text-center z-0 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-opacity-60">
                                Play
                            </motion.div>

                        </div>

                    </div>

                    

                </div>
            </div>
        </div>
    )
}