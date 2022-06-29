import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIndustry } from "../../store/slices/logoSlice/logoSlice";
import { RootState } from "../../store/store";
interface Person {
  id: number;
  name: string;
  unavailable: boolean;
}
const people = [
  { id: 1, name: "Technology", unavailable: true },
  { id: 2, name: "Travel", unavailable: false },
  { id: 3, name: "Sport", unavailable: false },
  { id: 4, name: "Real Estate", unavailable: false },
  { id: 5, name: "Legal", unavailable: false },
  { id: 6, name: "Design", unavailable: false },
  { id: 7, name: "Animals", unavailable: false },
  { id: 8, name: "Retail", unavailable: false },
  { id: 9, name: "Automotive", unavailable: false },
  { id: 10, name: "Family", unavailable: false },
  { id: 11, name: "Party", unavailable: false },
  { id: 12, name: "Medical", unavailable: false },
  { id: 13, name: "Restaurant", unavailable: false },
  { id: 14, name: "Finance", unavailable: false },
  { id: 15, name: "Nonprofit", unavailable: false },
  { id: 16, name: "Entertainment", unavailable: false },
  { id: 17, name: "Construction", unavailable: false },
  { id: 18, name: "Education", unavailable: false },
  { id: 19, name: "Beauty ", unavailable: false },
  { id: 20, name: "Others", unavailable: false },
];

const Industry: React.FC = () => {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");
  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  //select logic

  const dispatch = useDispatch();
  const newIndustryRef = useRef<HTMLInputElement>(null);
  const changeIndustry = () => {
    if (newIndustryRef.current) {
      console.log(newIndustryRef.current.value);
      dispatch(setIndustry(newIndustryRef.current.value));
    }
  };

  // const twoFunctions = () => {
  //   setSelected(newIndustryRef)
  //   changeIndustry()
  // }
  return (
    <div className="mt-5">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-extrabold p-4 pt-24 text-gray-900 mb-7">
        Your industry
      </h1>
      <form className="rounded-lg  max-w-xl h-14 mt-10 mx-auto">
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative ">
            <div className="relative w-11/12 mx-auto h-14 cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                // onInput={changeIndustry}
                onSelect={changeIndustry}
                ref={newIndustryRef}
                className="w-full h-full bg-gray-50 border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 border-2"
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
      </form>
    </div>
  );
};
export default Industry;
