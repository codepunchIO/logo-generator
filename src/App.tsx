import { Route, Routes } from 'react-router-dom'
import './App.css'
import GeneratorPage from './pages/Generator'
import IndustryPage from './pages/Industry'
import StartPage from './pages/Start'

const App: React.FC = () => {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/industry" element={<IndustryPage />} />
        <Route path="/generator" element={<GeneratorPage />} />
      </Routes>
    </div>
  )
}

export default App
