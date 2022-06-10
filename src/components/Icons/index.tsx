import { useDispatch } from "react-redux";
// import icon1 from "../../assets/img/Icons/1.svg";
// import icon2 from "../../assets/img/Icons/2.svg";
// import icon3 from "../../assets/img/Icons/3.svg";
// import icon4 from "../../assets/img/Icons/4.svg";
// import icon5 from "../../assets/img/Icons/5.svg";
// import icon6 from "../../assets/img/Icons/6.svg";
// import icon7 from "../../assets/img/Icons/7.svg";
// import icon8 from "../../assets/img/Icons/8.svg";
// import icon9 from "../../assets/img/Icons/9.svg";
import { setIcon } from "../../store/slices/logoSlice/logoSlice";
import axios from 'axios';
import { store } from "../../store/store";
import { string } from "yup";
import { Fragment, useState,useEffect, useRef } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { info } from "console";

interface Person {
  id: number;
  name: string;
  unavailable: boolean;
}
const people= [
  { id: 1, name: 'Fish' },
  { id: 2, name: 'Card' },
  { id: 3, name: 'Rocket' },
  { id: 4, name: 'Lolipop' },
  { id: 5, name: 'Ball' },
  { id: 6, name: 'Plane' },
]
// const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9];
// let icons:Array<string> = [];
const Icons = () => {
  const state = store.getState();
  const [selected, setSelected] = useState(people[0])
  const [query, setQuery] = useState('')
  const newRef = useRef<HTMLInputElement>(null);
  const [icons,setIconsState] = useState<string[]>([])

const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )


  

  const FetchIcons = async (query:string) => {
   

    const res = await axios.get(`http://127.0.0.1:8443/icon/${query}` )
    console.log(res,'response');
    
    setIconsState(res.data);
  
  }

  const QueryIcons = () => {
    
    if (newRef.current) {
       FetchIcons(newRef.current.value)
      
     
    }
    
  }

  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const id = e.currentTarget.id;
    dispatch(setIcon(id));
  };
  return (
  //  <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
  //   <div className="flex flex-wrap flex-row justify-evenly w-full p-4  " >
    <div className="flex flex-col h-full w-full p-1">
      <h1 className="text-4xl text-center font-extrabold p-4 pt-24 text-gray-900 mb-7">
        Search for perfect logo
      </h1>
      {/* <div className="flex flex-wrap flex-row justify-evenly w-3/4 mx-auto p-8 h-full ">
          <div className="flex justify-center">
             <div className="mb-3 xl:w-96">
                <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                  <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3">
                  <button className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
              </div>
          </div>
      </div> */}
  <form className="rounded-md max-w-xl h-14 mt-10 mx-auto">
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative ">
            <div className="relative w-full h-14 cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                // onInput={changeIndustry}
                onSelect={QueryIcons}
                ref={newRef}
                className="w-full h-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 border-2"
                displayValue={(person: Person) => person.name}
                onChange={(event) => setQuery(event.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-700"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredPeople.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople.map((person) => (
                    <Combobox.Option
                      key={person.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-gray-400 text-white" : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-gray-900"
                              }`}
                            >
                              <CheckIcon
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
        {/* <Combobox
          value={selectedPerson}
          onChange={setSelectedPerson}
          name="assignee"
        >
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(person: Person) => person.name}
          />
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Combobox.Options>
              {filteredPeople.map((person) => (
                <Combobox.Option
                  key={person.id}
                  value={person}
                  as={Fragment}
                  disabled={person.unavailable}
                >
                  {({ active, selected }) => (
                    <li
                      className={`${
                        active
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      <span className={person.unavailable ? "opacity-75" : ""}>
                        {person.name}
                      </span>
                    </li>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
          {/* {({ activeOption }) => (
            <>
             
            </>
          )} 
        </Combobox> */}
      </form>
      
      {/* </div> */}
        <div className="flex flex-wrap flex-row justify-evenly w-3/4 mx-auto p-8 h-full ">
      {icons.map((icon, index) => (
            <div key={index} className=' flex flex-row flex-nowrap hover:scale-100 my-2 duration-300 ease-in-out hover:shadow-2xl shadow-md rounded-lg h-40 w-72 justify-center '>
              <img
                className="flex flex-col w-5/6  text-center min-w-full border-2 justify-center h-auto rounded-lg text-xl px-6 py-2"
                onClick={(e) => handleClick(e)}
                id={String(icons.indexOf(icon) + 1)}
                src={icon}
                alt="layout"
              />
            </div>
          ))}
    
       </div>
       </div>
    
  );
};

export default Icons;

 