import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Characters from './components/Characters'
import CharacterPage from './pages/characterpage'

function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-deep-black min-h-screen text-off-white selection:bg-blood-red selection:text-white antialiased">
      <Navbar />
      
      <main>
        <Routes>
          {/* Fallback to Home or a 404 page */}
          <Route path="*" element={<Home />} />

          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* Characters page */}
          <Route path="/characters" element={<CharacterPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
