import About from "./components/About"
import { EyeAnimation } from "./components/EyeAnimation"
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
    </div>
  )
}

export default App
