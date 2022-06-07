import { Toolbar } from '@mui/material'
import MainSection from '../../components/MainSection'
import Navbar from '../../components/NavBar'

const EditorPage: React.FC = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <main className="border border-sky-500 h-5/6">
        <MainSection />
      </main>
    </div>
  )
}
export default EditorPage
