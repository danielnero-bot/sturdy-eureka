import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import World from './components/World'
import Conflict from './components/Conflict'
import Characters from './components/Characters'

function App() {
  return (
    <div className="bg-deep-black min-h-screen text-off-white selection:bg-blood-red selection:text-white antialiased">
      <Navbar />
      
      <main>
        <Hero />
        <World />
        <Conflict />
        <Characters />
        
        {/* Future sections like Titans, etc. */}
      </main>
      
      {/* Scroll indicator for the whole page or global elements can go here */}
    </div>
  )
}

export default App
