
import './App.css'
import Navbar from './components/Header/Navbar'

import siteInfoConfig from "./siteInfoConfig.json"

function App() {
  

  return (
    <div className='main'>
      <Navbar headerVals={siteInfoConfig.header} />
      
    </div>
  )
}

export default App
