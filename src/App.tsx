
import './App.css'
// Major Components
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'

// Pages
import Home from './components/Home/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ErrorBoundary from './components/ErrorBoundary';
// import Content from './components/Content/Content'

import siteInfoConfig from "./siteInfoConfig"
import { useEffect, useState } from 'react'
import { getCurrentPath } from './utils/router'

function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPath());

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(getCurrentPath());
    }

    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    }
  }, []);

  return (
    <div className='main'>
      <Navbar headerVals={siteInfoConfig.header} />
      <ErrorBoundary>
        {currentPage === '/' && <Home />}
      </ErrorBoundary>
      <ErrorBoundary>
        {currentPage === '/projects' && <Projects />}
      </ErrorBoundary>
      <ErrorBoundary>
        {currentPage === '/contact' && <Contact />}
      </ErrorBoundary>
      <Footer footerVals={siteInfoConfig.footer} />
    </div>
  )
}

export default App
