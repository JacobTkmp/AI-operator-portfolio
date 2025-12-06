import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Offer from './components/Offer'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main>
        <Intro />
        <Offer />
        <Contact />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
