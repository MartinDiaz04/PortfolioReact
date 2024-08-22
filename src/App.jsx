import Navbar from "./components/NavBar/Navbar"
import AboutMe from "./components/AboutMe"
import Studies from "./components/Studies"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="">
      <Navbar/>
      <hr/>
      <AboutMe/>
      <hr/>
      <Studies/>
      <hr/>
      <Projects/>
      <hr/>
      <Footer/>
    </div>
  )
}

export default App
