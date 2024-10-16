export function Navbar(){
    return (
        <div className="flex justify-between items-center ">
            <div className="">
                <h2 className="font-semibold text-4xl ml-4">Ochi</h2>
            </div>

            <div className="flex justify-center items-center ">
                <div className="flex justify-center items-center mr-48 ">
                    {/* <p className="m-2">Services</p>
                    <p className="m-2">Our work</p>
                    <p className="m-2">About us</p>
                    <p className="m-2">Insights</p> */}

                    {["Services","Our work","About us","Insights"].map((item, index)=>{
                        return (
                        <a key={index} className="m-2" >{item}</a>
                    )})}
                </div>

                <div>
                    <p className="m-4">Contact us</p>
                </div>
            </div>
        </div>
    )
}