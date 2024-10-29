import { useAnimation, motion} from "framer-motion"


export function Featured(){
    
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()]

    const handleHover = (index)=>{
        cards[index].start({y : "0"})
    }

    const handleExitHover = (index)=>{
        cards[index].start({y:"100%"})
    }
    
    return(
        <div className="w-full">
            <div className="text-6xl font-['Neue_Montreal'] py-10 px-20 border-b-2">Featured projects</div>
            <div className="m-10">

                <div className="cards w-full mt-10 grid grid-cols-2 gap-10">

                    {/* card- 1 */}
                    <motion.div className="cardcontainer relative h-[46vw]" onMouseEnter={ ()=> handleHover(0)} onMouseLeave={()=> handleExitHover(0)} >
                        {/* img-1 */}
                        <motion.div className="  card  bg-[url('/assets/Fyde.png')] bg-cover bg-center w-full h-full rounded-xl text-[#CDEA68]"
                        whileHover={{scale:0.90}}
                        transition={{duration: 0.3, ease:"easeInOut",}}
                        >
                            <div className=" flex overflow-hidden text-6xl absolute left-full top-1/2 -translate-x-[50%] -translate-y-[50%]">
                                {"FYDE".split("").map((item, index)=>(
                                    <motion.span className="inline-block"  key={index}
                                    initial={{y:"100%"}}
                                    animate={cards[0]}
                                    transition={{ease:[0.22,1,0.36,1], delay: index*.06}}
                                    
                                    >{item}</motion.span>
                                ))}
                            </div>

                        </motion.div>
                    </motion.div>

                    {/* card- 2 */}
                    <motion.div className="cardcontainer relative h-[46vw] " onMouseEnter={ ()=> handleHover(1)} onMouseLeave={()=> handleExitHover(1)}>
                        {/* img-2 */}
                        <motion.div 
                        className="card  bg-[url('/assets/Vise.jpg')] bg-cover bg-center w-full h-full rounded-xl motion."
                        whileHover={{scale:0.90}}
                        transition={{duration: 0.5}}
                        >
                            <div className="flex overflow-hidden  text-6xl absolute left-0 top-1/2 -translate-x-[50%]  -translate-y-[50%] text-[#CDEA68]">
                            {"VISE".split("").map((item, index)=>(
                                    <motion.span className="inline-block"  key={index}
                                    initial={{y:"100%"}}
                                    animate={cards[1]}
                                    transition={{ease:[0.22,1,0.36,1], delay: index*.06}}
                                    
                                    >{item}</motion.span>
                                ))}
                            </div>

                        </motion.div>
                    </motion.div>


                    {/* card- 3 */}
                    <motion.div className="cardcontainer relative h-[46vw] " onMouseEnter={ ()=> handleHover(2)} onMouseLeave={()=> handleExitHover(2)} >
                        {/* img-3 */}
                        <motion.div 
                       className=" relative card  bg-[url('/assets/card-3.jpg')] bg-cover bg-center w-full h-full rounded-xl "
                        whileHover={{scale:0.90}}
                        transition={{duration: 0.5}}
                        >
                            <motion.div className=" flex overflow-hidden text-6xl absolute left-full top-1/2 -translate-x-[50%]  -translate-y-[50%] text-[#CDEA68] ">
                            {"TRAWA".split("").map((item, index)=>(
                                    <motion.span className=" " key={index}
                                    initial={{y:"100%"}}
                                    animate={cards[2]}
                                    transition={{ease:[0.22,1,0.36,1], delay: index*.04}}
                                    
                                    >{item}</motion.span>
                                ))}
                            </motion.div>

                        </motion.div>
                    </motion.div>
                    

                    {/* card- 4 */}
                    <div className="cardcontainer relative h-[46vw]  " onMouseEnter={ ()=> handleHover(3)} onMouseLeave={()=> handleExitHover(3)}>
                        {/* img-4 */}
                        <motion.div 
                        className=" card  bg-[url('/assets/card-4.png')] bg-cover bg-center w-full h-full rounded-xl"
                        whileHover={{scale:0.90}}
                        transition={{duration: 0.5}}
                        >
                            <motion.div className="flex overflow-hidden text-6xl absolute left-0 top-1/2 -translate-x-[50%]  -translate-y-[50%] text-[#CDEA68]">
                            {"PREMIUM BLEND".split("").map((item, index)=>(
                                    <motion.span className="inline-block" key={index}
                                    initial={{y:"100%"}}
                                    animate={cards[3]}
                                    transition={{ease:[0.22,1,0.36,1], delay: index*.06}}
                                    
                                    >{item}</motion.span>
                                ))}
                            </motion.div>

                        </motion.div>
                    </div>
                </div>

            </div>            
        </div>
    )
}

