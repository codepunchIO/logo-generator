import { useState } from "react";
import { store } from "../../store/store";

const Explore = () => {
  const state = store.getState();

  const [icons, seticons] = useState<string[]>(state.logo.data.icons!);
  const [brandName, setBrandName] = useState<string>(
    state.logo.data.brandName!
  );

  //   const [svg, setSVG] = useState("");
  //   const [errorMessage, setErrorMessage] = useState("");

  //   useEffect(() => {
  //     icons.map(
  //       (iconUrl = async () => {
  //         try {
  //           const res = await axios({
  //             url: iconUrl,
  //             method: "GET",
  //             responseType: "text",
  //           });
  //           setSVG(res.data.slice(0, 4) + res.data.slice(4));
  //         } catch {
  //           setErrorMessage("error");
  //         }
  //       })
  //     );
  //   }, [icons]);

  // const FetchIcon = async () => {
  //   try {
  //     const res = await axios({
  //       url: url,
  //       method: "GET",
  //       responseType: "text",
  //     });
  //     setSVG(res.data.slice(0, 4) + res.data.slice(4));
  //   } catch {
  //     setErrorMessage("error");
  //   }
  // };

  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-20">
        <div className="w-9/12 justify-center mx-auto">
          <h1 className="text-4xl text-center font-extrabold p-4 text-gray-900 mb-7">
            Explore
          </h1>

          <div className="flex  h-full w-full justify-center overflow-y-auto p-3  ">
            <div className=" flex flex-wrap flex-row justify-between  p-2 gap-y-7 max-w-4xl ">
              {icons.map((icon, index) => (
                <div
                  className=" h-40 p-1 rounded-lg flex-wrap w-72 flex justify-center  items-center border-2"
                  key={index}
                >
                  <img src={icon} alt="icon" className="h-20 w-20" />
                  <p className="p-1">{brandName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
