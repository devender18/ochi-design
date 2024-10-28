import About from "./components/About"
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
    </div>
  )
}

export default App
