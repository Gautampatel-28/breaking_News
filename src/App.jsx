import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'

function App() {
const [category, setCategory] = useState("general")
  return (
    <>
      <Navbar setCategory={setCategory}/>      
      <div className="content-container">
        <NewsBoard category={category} />
      </div>
    </>
  )
}

export default App
