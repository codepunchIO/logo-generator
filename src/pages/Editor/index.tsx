import { useState } from 'react'
import MainSection from '../../components/MainSection'
import Navbar from '../../components/NavBar'

const EditorPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('Logo-generator')
  console.log('EditorPage > inputValue', inputValue)
  return (
    <>
      <div className="h-screen">
        <Navbar setInputValue={setInputValue} />
        <main className="border border-sky-500 h-5/6">
          <MainSection inputValue={inputValue} />
        </main>
      </div>
    </>
  )
}
export default EditorPage
