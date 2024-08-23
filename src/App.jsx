import Navbar from "./components/NavBar/Navbar"
import AboutMe from "./components/AboutMe"
import Studies from "./components/Studies"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import {store} from "./store/store"
import {Provider} from "react-redux"

function App() {

  return (
    <Provider store={store}>
      <Navbar/>
      <hr/>
      <AboutMe/>
      <hr/>
      <Studies/>
      <hr/>
      <Projects/>
      <hr/>
      <Footer/>
    </Provider>
  )
}

export default App
