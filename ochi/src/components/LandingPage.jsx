import { motion } from "framer-motion"


export default function LandingPage(){
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.2"  className="w-screen h-screen">
            <div className="mt-40 py-32  ml-8 h-4/5 border-b-2 font-spaceGrotesk">
                <div>
                    {["we create","eye-opening","presentations"].map((item, index)=>{
                        return (
                        <div key="" className="masker">
                            <div className="flex items-center">
                                {index == 1 && (<motion.div
                                initial= {{width:0}} animate={{width:100}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}}
                                className="w-[8vw] h-[5.4vw]  rounded-lg"
                                style={{backgroundImage:`url("assets/landing.jpg")`,
                                    backgroundSize : "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat:"no-repeat"
                                }}
                                ></motion.div>)}
                                <div className={`uppercase font-extrabold tracking-tighter text-[7vw] leading-[7vh]`}>{item}
                                </div>
                            </div>
                        </div>    
                        
                        )
                    })}
                </div>

            </div>
                {/*footer  */}
            <div className="flex justify-around items-start font-['Neue_Montreal'] text-gray-500 mt-2">
                <div className="">For public and private companies</div>
                <div>From the first pitch to IP</div>
                <div className="flex">
                    <div className="uppercase border-2 border-gray-500 p-1 w-48 h-8 flex justify-center items-center rounded-xl">Start the project</div>
                    <div className="rounded-full border-gray-500 border-2 h-8 w-8 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="size-4">
    <path   d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
    </svg>

                </div>
                </div>
            </div>
        </div>
    )
}