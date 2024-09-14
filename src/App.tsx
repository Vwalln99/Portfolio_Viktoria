
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Portfolio from './components/Portfolio';
//import Resume from './components/Resume';

function App() {


  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/resume" element={<Navigate to="https://vwalln99.github.io/resume/resume.html" />} />
      </Routes>
    </Router>
  
      
    </>
  )
}

export default App
