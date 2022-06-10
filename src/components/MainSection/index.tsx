const MainSection: React.FC = () => {
  return (
    <div className="pl-6 pr-6">
      <h1 className=" mb-4">Logo-generator</h1>
      <hr className="w-36 mb-4" />
      <p className=" mb-10">Easy, fast and even fun! </p>
      <div className="flex justify-between h-5/6mb-4">
        <div className="w-1/2 mr-6">
          <div className="border-2 rounded-lg text-blue-600 h-72 font-bold text-6xl flex  items-center justify-center">
            <p className="">Left Section</p>
          </div>
          <button className=" mr-4 ml-4">Download JPG</button>
          <button>Download PNG</button>
        </div>

        <div className="w-1/2 ">
          <div className="border-2  rounded-lg text-neutral-50 h-72 text-6xl bg-blue-600 font-bold flex items-center justify-center">
            <p>Right Section</p>
          </div>
          <button className=" mr-4 ml-4">Download JPG</button>
          <button>Download PNG</button>
        </div>
      </div>

      <footer>
        <p>select to layout : </p>
        <button>LOGO</button>
        <button>LOGO+ISOTYPE-V</button>
        <button>LOGO+ISOTYPE-H</button>
        <button>ISOTYPE</button>
      </footer>
    </div>
  );
};
export default MainSection;
