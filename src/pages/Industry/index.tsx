const Industry: React.FC = () => {
  return (
    <div>
      <h1 className=" text-4xl font-bold tracking-wide text-center mt-60">
        Your industry
      </h1>
      <div className="  rounded-md max-w-xl h-14 mt-10 mx-auto">
        <select
          className=" form-input border-2 rounded-md w-full h-full p-2"
          placeholder="Search"
        >
          <option value="" disabled selected hidden>
            <i className=" "></i>
            Search..
          </option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
    </div>
  );
};
export default Industry;
