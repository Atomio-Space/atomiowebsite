import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import About from './components/sections/About'
import Approach from './components/sections/Approach'
import Blog from './components/sections/Blog'
import Maintenance from './components/pages/Maintenance'

function App() {
  // Set to true to show maintenance page, false to show regular site
  const isUnderMaintenance = true;

  if (isUnderMaintenance) {
    return <Maintenance />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Services />
        <Approach />
        <Blog />
      </main>

      <Footer />
    </div>
  )
}

export default App
