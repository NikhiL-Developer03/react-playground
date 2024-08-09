import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="h-vh bg-slate-950 ">
        {/* navbar goes here */}

        <div className="w-full h-14 bg-indigo-200 flex justify-between px-4 items-center md:px-4">
          <div className="text-2xl text-indigo-700 font-bold">PW Skills</div>
          <ul className="md:flex hidden font-semibold ">
            <li className="mx-[10px] cursor-pointer">Home</li>
            <li className="mx-[10px] cursor-pointer">About US</li>
            <li className="mx-[10px] cursor-pointer">Contact US</li>
          </ul>
          <button className="hidden md:block px-2 py-2 bg-indigo-700 rounded font-bold ">
            Login/Signup
          </button>
          <div className="md:hidden">
            <a className="text-4xl" href="#">
              &#8801;
            </a>
          </div>
        </div>
        {/* navbar ends here */}

        {/* image section start here */}
        <header className="w-full h-auto">
          <img
            className="w-full hidden md:block"
            src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg"
            alt=""
          />
          <img
            className="w-full md:hidden"
            src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg"
            alt=""
          />
        </header>
        {/* image section end here */}

      </div>
    </>
  );
}

export default App;
