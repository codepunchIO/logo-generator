import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";
interface Person {
  id: number;
  name: string;
  unavailable: boolean;
}
const people = [
  { id: 1, name: "Durward Reynolds", unavailable: true },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: false },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
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

  return (
    <div>
      <h1 className=" text-4xl font-bold tracking-wide text-center mt-60">
        Your industry
      </h1>
      <form className="rounded-md max-w-xl h-14 mt-10 mx-auto">
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative ">
            <div className="relative w-full h-14 cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
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

      {/* <div className="  rounded-md max-w-xl h-14 mt-10 mx-auto">
        <select
          className=" form-input border-2 rounded-md w-full h-full p-2"
          defaultValue={"selectedOptionId"}
        >
          <option value="selectedOptionId" disabled hidden>
            Search..
          </option>

          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>  */}
    </div>
  );
};
export default Industry;
