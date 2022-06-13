import { useState } from 'react'
import MainSection from '../../components/MainSection'
import Navbar from '../../components/NavBar'

const EditorPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('Logo-generator')
  const [bgColor, setBgcolor] = useState<any>('black')
  const [txColor, setTxColor] = useState<any>('black')
  const [lgColor, setLgColor] = useState<any>('black')
  const [font, setSelectedFont] = useState<any>('Sacramento')
  return (
    <>
      <div className="h-screen">
        <Navbar
          setInputValue={setInputValue}
          bgColor={bgColor}
          setBgColor={setBgcolor}
          txColor={txColor}
          setTxColor={setTxColor}
          lgColor={lgColor}
          setLgColor={setLgColor}
          font={font}
          setSelectedFont={setSelectedFont}
        />
        <main className="border border-sky-500 h-5/6">
          <MainSection
            inputValue={inputValue}
            bgColor={bgColor.hex}
            txColor={txColor.hex}
            lgColor={lgColor.hex}
            font = {font}
          />
        </main>
      </div>
    </>
  )
}
export default EditorPage
