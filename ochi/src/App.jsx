import About from "./components/About"
import { Cards } from "./components/Cards"
import { EyeAnimation } from "./components/EyeAnimation"
import { Featured } from "./components/Featured"
import { Footer } from "./components/Footer"
import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee"
import { Navbar } from "./components/Navbar"
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    < div className="overflow-x-hidden bg-[#F1F1F1]">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <EyeAnimation />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
