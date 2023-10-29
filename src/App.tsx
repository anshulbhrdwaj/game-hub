import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"


function App() {

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar />

      <div className="flex">
        <Sidebar />
        <Hero />
      </div>
    </div>
  )
}

export default App
