import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// username, email, passsword ,confermpasseord, gender , date,city,address

const MyForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className='flex flex-col justify-center items-center m-14 h-full border-2 border-black rounded'>
    <h1 className='m-2 text-4xl  font-bold'>My Form</h1>
        <form action="" className='p-5 my-2  flex flex-col gap-y-4  shadow w-fit border-2 border-black rounded'>
        <div className='flex gap-6 justify-between '>
          <label className='text-lg font-bold' htmlFor='1'>Username:</label>
          <input  className="border-black border rounded text-center" 
          type="text" 
          name="" 
          id="" 
          placeholder='Enter Username' />
        </div>
        <div className='flex gap-6 justify-between '>
          <label className='text-lg font-bold'>Email:</label>
          <input className="border-black border rounded text-center"  
          type="text" 
          name="" 
          id=""
          placeholder='Enter Email' />
        </div>
        {/* <div className='flex gap-6 justify-between'>
          <label className='text-lg font-bold'>Gender:</label>
          <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
        </div>
        <div className='flex gap-6 justify-between' >
          <label className='text-lg font-bold'>Date:</label>
          <DatePicker
            className='border-black border rounded'
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat='dd/MM/yyyy'
            isClearable
          />
        </div>
        <div className='flex gap-6 justify-between'>
          <label className='text-lg font-bold'>City:</label>
          <input className="border-black border rounded " type="text" name="" id="" />
        </div>
        <div className='flex gap-6 justify-between'>
          <label className='text-lg font-bold'>Address</label>
          <input className="border-black border rounded text-center " type="text" name="" id="" placeholder='Enter Current Address'/>
        </div> */}
        <div className='flex gap-6 justify-between'>
          <label className='text-lg font-bold'>Password:</label>
          <input className="border-black border rounded text-center"
          type="text" 
          name="" 
          id=""
          placeholder='Password'/>
        </div>
        <div className='flex gap-6 justify-between'>
          <label className='text-lg font-bold'>Confirm Password:</label>
          <input className="border-black border rounded text-center" type="text" name="" id="" placeholder='Confirm Password'/>
        </div>
        <div className="flex items-center justify-center">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit Form
            </button>
          </div>
        </form>
    </div>
  )
}

export default MyForm