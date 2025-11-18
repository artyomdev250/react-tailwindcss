import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Filter from './components/Filter'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <Filter />
    </div>
  )
}

export default App
