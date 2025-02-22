
import './App.css'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'

import siteInfoConfig from "./siteInfoConfig"

function App() {
  

  return (
    <div className='main'>
      <Navbar headerVals={siteInfoConfig.header} />
        <Content />
      <Footer footerVals={siteInfoConfig.footer}/>
    </div>
  )
}

export default App
