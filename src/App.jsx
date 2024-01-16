import Faq from "./Components/FaqSection/Faq"
import Navbar from "./Components/Navbar/Navbar"
import Raf from "./Components/RealtionAndFunction/Raf"

const  App=()=> {
  return (
    <div className="container mx-auto">
     <Navbar></Navbar>
     <Raf></Raf>
     <Faq></Faq>
    </div>
  )
}

export default App
