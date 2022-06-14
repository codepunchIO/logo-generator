import { useEffect, useState } from "react";
import MainSection from "../../components/MainSection";
import Navbar from "../../components/NavBar";
import { store } from "../../store/store";

const EditorPage: React.FC = () => {
  const [inputValue, setInputValue] = useState("Logo-generator");
  const [bgColor, setBgcolor] = useState<any>("black");
  const [txColor, setTxColor] = useState<any>("black");
  const [lgColor, setLgColor] = useState<any>("black");
  const [font, setSelectedFont] = useState<any>("Sacramento");
  const [selectedStyle, setSelectedStyle] = useState<any>("1");

  const state = store.getState();
  useEffect(() => {
    setSelectedStyle(state.logo.data.style!);
  }, [state]);

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
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
        />
        <main className="border border-sky-500 h-5/6">
          <MainSection
            inputValue={inputValue}
            bgColor={bgColor.hex}
            txColor={txColor.hex}
            lgColor={lgColor.hex}
            font={font}
            selectedStyle={selectedStyle}
          />
        </main>
      </div>
    </>
  );
};
export default EditorPage;
