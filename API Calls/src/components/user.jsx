import axios from "axios";
import React, { useEffect, useState } from "react";

const User = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      // console.log(res);
      setData(res.data);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      <h1>User Data</h1>
      {data.map((item,key)=>(
        <ul key={key}>
          <li>{item.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default User;
