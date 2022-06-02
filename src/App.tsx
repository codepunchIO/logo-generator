import './App.css'
import { Route, Routes } from 'react-router-dom'
import StartPage from './pages/Start'
import GeneratorPage from './pages/Generator'
import EditorPage from './pages/Editor'

const App: React.FC = () => {
  return (
    <div className='h-screen'>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/generator" element={<GeneratorPage />} />
      <Route path="/editor" element={<EditorPage />} />
      </Routes>
      </div>
  )
}

export default App
