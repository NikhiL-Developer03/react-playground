import "./App.css";

function App() {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-12  w-screen ">
        <div className="bg-red-500 w-full h-fit col-span-12 sm:col-span-5 flex justify-center items-center">heloo 1</div>
        <div className="bg-lime-400 w-full h-fit col-span-12 sm:col-span-5 flex justify-center items-center">heloo 2</div>
        <div className="bg-orange-500 w-full h-fit col-span-12 sm:col-span-2 flex justify-center items-center  ">heloo 3</div>
      </div>
    
  );
}

export default App;
