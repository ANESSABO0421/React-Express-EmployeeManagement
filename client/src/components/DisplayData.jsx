import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DisplayData = () => {
  const [allData, setAllData] = useState([]);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/updateuser/${id}`);
  };

  useEffect(() => {
    // fetch data
    try {
      const fetchData = async () => {
        const users = await axios.get("http://localhost:3000/API/getdata");
        // console.log(users.data);
        setAllData(users.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  //   console.log(allData);

  // handleDelete
  const handleDelete = async (id) => {
    try {
      const deleteData = await axios.delete(
        `http://localhost:3000/API/deleteuser/${id}`
      );
      if (deleteData) {
        window.alert("data deleted successfully");
        window.location.reload();
      } else {
        window.alert("data not deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {allData.map((ele, i) => (
        <div
          key={i}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-start"
        >
          {/* User Info */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {ele.name}
          </h2>
          <p className="text-gray-600">{ele.email}</p>
          <p className="text-gray-600">{ele.phoneNumber}</p>
          <p className="text-gray-600">{ele.password}</p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => handleEdit(ele._id)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(ele._id)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
