

export default function About(){
    return (
        <div  className="bg-[#CDEA68] w-svh rounded-t-xl -mt-4">

            {/* about desc */}
            <div className="border-b border-gray-400 flex justify-center items-center h-1/3 py-20">
                <div className="flex justify-center items-center mx-8">
                    <p className="font-normal leading-none text-[4vw]">Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className="underline">raise funds, sell products, explain complex ideas, <span className="no-underline !important">and</span> hire great people</span>.</p>
                </div>

            </div>

            {/* links */}
            <div className="border-b border-gray-400 flex justify-around py-16 ">
                <div className="w-1/2 pl-8 -mt-12">
                    <p>What you can expect:</p>
                </div>

                <div className="flex justify-around items-center w-1/2 -mt-12">

                    <div className="w-1/2">
                        <p>
                            
                            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                            <br/><br/>
                            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                        </p>
                    </div>  

                    <div className="mt-24">
                        <p>S:</p><br/>
                        <a href="" className="underline">Instagram</a><br/>
                        <a href="" className="underline">Behance</a><br/>
                        <a href="" className="underline">Facebook</a><br/>
                        <a href="" className="underline">LinkedIn</a>
                    </div> 

                </div>
            </div>

            {/* img */}
            <div className="flex">
                <div className="m-8 w-1/2">
                    <p className="text-[3vw] tracking-tight">Our approach:</p>
                    <div className=" bg-black text-white flex justify-between w-[10vw] p-2 rounded-full items-center px-4 text-[1vw] mt-2">
                        <div className="text-gray-400">
                            READ MORE
                        </div>
                        <div>
                            <div className="bg-white h-2 w-2 rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="w-1/2 ">
                    <div className="h-[30vh] m-8  ">
                        <img src="/assets/home.jpg" alt="home" className="h-full w-full object-cover rounded-xl " />
                    </div>
                </div>

            </div>
        </div>
    )
}