import './App.css'

import Navbar from './components/layout/Navbar'
import Hero from './components/Hero'
import Filter from './components/Filter'
import Popular from './components/Popular'
import Recommendation from './components/Recommendation'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <Filter />
      <Popular />
      <Recommendation />
      <center>
        <p className='font-medium pb-9 text-gray-500 px-6'>©2022 MORENT. All rights reserved</p>
      </center>
    </div>
  )
}

export default App
