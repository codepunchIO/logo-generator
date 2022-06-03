import { Route, Routes } from 'react-router-dom'
import './App.css'
import GeneratorPage from './pages/Generator'
import StartPage from './pages/Start'
import EditorPage from './pages/Editor'

const App: React.FC = () => {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/generator" element={<GeneratorPage />} />
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </div>
  )
}

export default App
