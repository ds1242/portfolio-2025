
import './App.css'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'

import siteInfoConfig from "./siteInfoConfig.json"

function App() {
  

  return (
    <div className='main'>
      <Navbar headerVals={siteInfoConfig.header} />
      <Content />
      <Footer />
    </div>
  )
}

export default App
