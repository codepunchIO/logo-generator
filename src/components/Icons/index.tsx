import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setIcon } from "../../store/slices/logoSlice/logoSlice";
import { store } from "../../store/store";

const Icons = () => {
  const state = store.getState();
  const [searchInputValue, setSearchInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: any) => {
    setSearchInputValue(e.target.value);
  };
  const [icons, setIconsState] = useState<string[]>([]);
  const [smallIcons, setSmallIcons] = useState<string[]>([]);

  console.log("searchInputValue", searchInputValue);

  useEffect(() => {
     FetchIcons(state.logo.data.industry!);
  }, [])
  

  const FetchIcons = async (query: string) => {
    setIsError(false);
    setIsLoading(true);

    try {
      const res = await axios.get(`https://u2b7t9.deta.dev/icon/${query}`, {
        params: {
          hash: "fasnfhasi!@$124casd@#$dnjzshd2q_214124SDa23123",
        },
      });
      console.log(res, "response");
      setIconsState(res.data["icon_list"]);
      setIsLoading(false);
    } catch {
      setIsError(true);
      setErrorMessage(searchInputValue);
      setIsLoading(false);
    }
  };

  const QueryIcons = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInputValue !== "") {
      FetchIcons(searchInputValue);
    }
  };

  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const currentIcon = e.currentTarget.src;

    if (smallIcons.includes(currentIcon)) {
      const filterIcons = smallIcons.filter((icon) => icon !== currentIcon);
      setSmallIcons(filterIcons);
    } else {
      setSmallIcons([...smallIcons, currentIcon]);
    }

    console.log(smallIcons);
  };

  useEffect(() => {
    if (smallIcons.length > 0) {
      dispatch(setIcon(smallIcons));
    }
  }, [smallIcons]);

  return (
    <div className="flex flex-col h-full w-full p-1">
      <h1 className="text-4xl text-center font-extrabold p-4 pt-24 text-gray-900 mb-7">
        Search for perfect logo
      </h1>

      <form onSubmit={(e) => QueryIcons(e)}>
        <div className="flex flex-row justify-center">
          <div className="mb-3 xl:w-96 flex flex-col">
            <div className="input-group flex-col justify-center items-center text-center w-full mb-4">
              <input
                type="search"
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none mb-3"
                placeholder={state.logo.data.industry}
                onChange={handleChange}
                aria-label="Search"
                aria-describedby="button-addon3"
              />
              <button
                className="btn w-full inline-block px-6 py-2 border-2 border-green-600 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                type="submit"
                id="button-addon3"
                disabled={searchInputValue === ""}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="flex flex-col items-center ">
        {isLoading ? <CircularProgress color="success" className="" /> : null}
        {isError ? (
          <div
            className="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700 w-1/4	"
            role="alert"
          >
            <svg
              className="w-5 h-5 inline mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div>
              <span>We didn't find any icons for "{errorMessage}"</span>
            </div>
          </div>
        ) : null}
      </div>
      {/*   sm:grid-cols-2  lg:grid-cols-3 xl: className="flex flex-wrap flex-row justify-evenly w-3/4 mx-auto p-8 h-full " */}
      <div  className="grid grid-cols-6 gap-x-4 w-4/6 mx-auto md:gap-x-6">
        {icons.map((icon, index) => (
          <div
            key={index}
            // className={`flex flex-row flex-nowrap hover:scale-100 my-2 duration-300 ease-in-out hover:shadow-2xl shadow-md rounded-lg h-40 w-72 justify-center  ${
            //   smallIcons.includes(icon) ? "bg-green-500/50" : ""
            // }  `}
            className={`flex flex-col group w-full border flex-nowrap hover:shadow-lg text-8xl duration-200 hover:text-4xl my-5 rounded-lg h-40 justify-center cursor-pointer ease-in ease-linear
             ${smallIcons.includes(icon) ? "border-4 border-green-500" : ""}`
            }>
          
            <img
              className="flex flex-col w-full h-16 text-center min-w-full  justify-center  rounded-lg text-xl px-6 py-2"
              onClick={(e) => handleClick(e)}
              id={String(icons.indexOf(icon) + 1)}
              src={icon}
              alt="layout"
            />
          </div>
        ))}
      </div>
      {smallIcons.length > 0 ? (
        <div className="fixed bottom-1 right-2/4 rounded-lg translate-x-2/4 px-2 py-2 border-2 bg-sky-500/50 ">
          {smallIcons.map((smallIcon, index) => (
            <img
              onClick={(e) => handleClick(e)}
              alt="smallIcon"
              src={smallIcon}
              key={index}
              className="backdrop-blur-3xl w-10 h-10 inline m-1  "
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Icons;
