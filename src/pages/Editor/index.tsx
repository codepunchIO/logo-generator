import { useEffect, useState } from "react";
import MainSection from "../../components/MainSection";
import Navbar from "../../components/NavBar";
import { store } from "../../store/store";

const EditorPage: React.FC = () => {
  const state = store.getState();
  const [inputValue, setInputValue] = useState(state.logo.data.brandName!);
  const [bgColor, setBgcolor] = useState<any>("red");
  const [txColor, setTxColor] = useState<any>("black");
  const [lgColor, setLgColor] = useState<any>("black");
  const [font, setSelectedFont] = useState<any>("");
  const [selectedStyle, setSelectedStyle] = useState<any>("1");
  //@ts-ignore
  const [selectedIcon, setSelectedIcon] = useState<any>(
    state.logo.data.icons[0].icon_svg!
  );

  useEffect(() => {
    setSelectedStyle(state.logo.data.style!);
  }, [state]);

  console.log(selectedIcon);

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
          selectedIcon={selectedIcon}
          setSelectedIcon={setSelectedIcon}
        />
        <main className="border-sky-500 h-screen">
          <MainSection
            inputValue={inputValue}
            bgColor={bgColor.hex}
            txColor={txColor.hex}
            lgColor={lgColor.hex}
            font={font}
            selectedStyle={selectedStyle}
            selectedIcon={selectedIcon}
          />
        </main>
      </div>
    </>
  );
};
export default EditorPage;
