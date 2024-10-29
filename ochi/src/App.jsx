import About from "./components/About"
import { Cards } from "./components/Cards"
import { EyeAnimation } from "./components/EyeAnimation"
import { Featured } from "./components/Featured"
import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee"
import { Navbar } from "./components/Navbar"

function App() {
 

  return (
    < div className="overflow-x-hidden">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <EyeAnimation />
      <Featured />
      <Cards />
    </div>
  )
}

export default App
