import React from "react";

const Array = () => {
  const student = ["anil","shidu","Sam","Peter"];
  // student.map((items)=>{
  //   console.log(items);
  // })
  return (
    <div>
      <h1 className="text-4xl">Handling Array With List</h1>
      {
        student.map((items)=>
          <h1>Name : {items}</h1>
        )
      }
    </div>
  );
};

export default Array;
