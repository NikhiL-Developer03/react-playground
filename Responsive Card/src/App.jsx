import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="mt-40 ">
        <div className="max-w-sm mx-auto bg-black rounded-xl overflow-hidden md:max-w-xl">
          <div className="md:flex">
          <div className="">
            <img className="h-48 w-full object-cover md:h-full md:w-48 "  src="https://images.pexels.com/photos/3779791/pexels-photo-3779791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className="p-8">
          <div className=" uppercase tracking-wide text-sm text-white font-semibold">AN awesome card</div>
          <a className="block mt-1 text-lg font-medium text-white hover:text-blue-600 " href="#">
            Tailwind CSS is amazing once you understand the power of it
          </a>
          <p className="mt-2 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
