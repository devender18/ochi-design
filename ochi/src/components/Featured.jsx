import { motion} from "framer-motion"

export function Featured(){
    return(
        <div className="w-full">
            <div className="text-6xl font-['Neue_Montreal'] py-10 px-20 border-b-2">Featured projects</div>
            <div className="m-10">

                <div className="cards w-full mt-10 grid grid-cols-2 gap-10">

                    {/* card- 1 */}
                    <div className="cardcontainer  h-[46vw]  ">
                        {/* img-1 */}
                        <motion.div className="card relative bg-[url('/assets/Fyde.png')] bg-cover bg-center w-full h-full rounded-xl "
                        whileHover={{scale:0.95}}
                        transition={{duration: 0.3, ease:"easeInOut",}}
                        >
                            <div className=" text-6xl absolute left-full top-1/2 -translate-x-[50%] -translate-y-[50%]">
                                FYDE
                            </div>

                        </motion.div>
                    </div>

                    {/* card- 2 */}
                    <div className="cardcontainer   h-[46vw]  ">
                        {/* img-2 */}
                        <motion.div 
                        className=" card relative bg-[url('/assets/Vise.jpg')] bg-cover bg-center w-full h-full rounded-xl "
                        whileHover={{scale:0.95}}
                        transition={{duration: 0.5}}
                        >
                            <div className=" text-6xl absolute left-0 top-1/2 -translate-x-[50%]  -translate-y-[50%]">
                                VISE
                            </div>

                        </motion.div>
                    </div>


                    {/* card- 3 */}
                    <div className="cardcontainer   h-[46vw]  ">
                        {/* img-3 */}
                        <motion.div 
                       className=" card relative bg-[url('/assets/card-3.jpg')] bg-cover bg-center w-full h-full rounded-xl "
                        whileHover={{scale:0.95}}
                        transition={{duration: 0.5}}
                        >
                            <div className=" text-6xl absolute left-full top-1/2 -translate-x-[50%]  -translate-y-[50%]">
                                TRAWA
                            </div>

                        </motion.div>
                    </div>
                    

                    {/* card- 4 */}
                    <div className="cardcontainer   h-[46vw]  ">
                        {/* img-4 */}
                        <motion.div 
                        className=" card relative bg-[url('/assets/card-4.png')] bg-cover bg-center w-full h-full rounded-xl "
                        whileHover={{scale:0.95}}
                        transition={{duration: 0.5}}
                        >
                            <div className=" text-6xl absolute left-0 top-1/2 -translate-x-[50%]  -translate-y-[50%]">
                                PREMIUM BLEND
                            </div>

                        </motion.div>
                    </div>
                </div>

            </div>            
        </div>
    )
}

