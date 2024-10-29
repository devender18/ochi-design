export function Cards() {
  return (
    <div>

        <div className="text-6xl font-semibold tracking-tighter px-8 mt-20 border-b w-full pb-8">
            Client's reviews
        </div>

        <div className="w-screen  p-10  flex">
            <div className=" relative w-1/2  p-5 px-10">
                
                <Card bg_color="#004D43" txt="@2019-2024" txt_color="#CDEA68" img_url="assets/logo001.svg"/>

            </div>
            <div className="w-1/2 h-h-[30vw] flex justify-center items-center gap-5 py-5"> 
                    <Card bg_color="#212121" txt="RATING 5.0 ON CLUTCH" txt_color="white" img_url="assets/logo002.svg"/>

                    <Card bg_color="#212121" txt="BUSINESS BOOTCAMP ALUMNI" txt_color="white" img_url="assets/logo003.png"/>
            </div>

        </div>

    </div>
  );
}

function Card({ img_url, bg_color, txt_color, txt }) {
  
  return (
    <div className=" relative h-full">
            {/* background-image */}
            <div
            className="relative w-full h-full flex justify-center items-center rounded-xl"
            style={{backgroundColor: bg_color}}>
                <div 
                className="w-[20vw] h-[25vw] bg-auto"
                style={{
                    backgroundColor: "",
                    backgroundImage : `url(${img_url})`,
                    backgroundRepeat : "no-repeat",
                    backgroundSize : "120px",
                    backgroundPosition : "center"
                }}
                >
                    
                </div>
            </div>
            <div className=" absolute bottom-7 left-5 border border-'#CDEA68' text-center rounded-full p-1 px-2 text-sm"
            style={{color:txt_color}}>
                {txt}
            </div>

        </div>
  );
}
