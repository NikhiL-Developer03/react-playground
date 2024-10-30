import React, { useState } from 'react'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const LoginForm = () => {
 const [formData,setFormData]= useState({
  username:'', password:""})
const [visibleEye,setVisibleEye]=useState(false)
const [error,setError]=useState({});


function handleEye(){
  setVisibleEye(!visibleEye);
}

 function changeHandler(e){
 const {value,name,type}= e.target;
//  console.log("name is",name);
//  console.log("value is",value);
//  console.log("type is",type);
 setFormData((pre)=>({
  ...pre,
  [name]:value,
 }))
}

function validateHandler(data){
   let error ={};
   let rex = /^[a-zA-Z0-9]+$/ ;
   let  valid = true;
   if(data.username.trim()==""){
    error.username="username is required";
    valid = false;
   }
   else if(data.username.trim().length<5){
    error.username="username should be greater than 5";
    valid = false;
   }
   else if(data.username.trim().length>10){
    error.username="username should be less than 10";
    valid = false;
   }else if(!rex.test(data.username.trim())){
    error.username="invalid username";
    valid = false;
   }

   if(data.password.trim()==""){
    error.password="password is required";
    valid = false;
   }
   
   setError(error);
   return valid

}

function submitHandler(e){
  e.preventDefault();  
  if(validateHandler(formData)){
     
  }
  else{
    alert("error form not valid");
  }
 
}

  return (
    <div className=' flex justify-center mt-14'>
    <form onSubmit={submitHandler} className=' p-5  flex flex-col gap-y-4  shadow w-fit'>
    <div className='  flex gap-6'>
    <label  htmlFor='1'>Username</label>
    <input 
     type='text' 
     id='1'
     name="username"
     value={formData.username}
     onChange={changeHandler}
    placeholder='Enter username'
    className=' border border-blue-400 '
    />
    { error.username && <span className=' text-red-700'> {error.username}</span>}
    </div>
    <div className='flex gap-6'>
    <label  htmlFor='2'>Password</label>
    <input 
    //  type={${visibleEye ? "text" : "password"}} 
     id='2'
     name="password"
     value={formData.password}
     onChange={changeHandler}
    placeholder='Enter username'
    className=' border border-blue-400 '  
    />
       <span>{visibleEye ? <IoIosEye onClick={handleEye}/> : <IoIosEyeOff  onClick={handleEye} />} </span>
       { error.password && <span className=' text-red-700'>{error.password}</span>}
    </div>
    
    <button type='submit'  className='bg-blue-500 p-2 text-white  w-fit'>Submit</button>
    </form>
    
    
    
    </div>
  )
}

export default LoginForm