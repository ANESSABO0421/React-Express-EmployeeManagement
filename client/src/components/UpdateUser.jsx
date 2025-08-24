import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
  const { id } = useParams();
  //   console.log(id)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/API/getdata");
        const user = response.data.find((u) => u._id == id);
        // console.log(user)
        if (user) {
          setFormData(user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [id]);
  //   console.log(formData)

  //   handle changes in input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //edit functionality
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateTheUser = await axios.put(
        `http://localhost:3000/API/updateuser/${id}`,
        formData
      );
      if (updateTheUser) {
        window.alert("updated uccessfully");
        navigate("/getUser");
      } else {
        window.alert("failed to update the user!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <form
        className="flex flex-col gap-5 items-center justify-center bg-red-300 h-[500px] w-[500px] rounded"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold">edit Form</h1>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="p-2 border w-[400px] rounded"
          onChange={handleChange}
          value={formData.name}
        />

        <input
          type="text"
          name="email"
          placeholder="email"
          className="p-2 border w-[400px] rounded"
          onChange={handleChange}
          value={formData.email}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          className="p-2 border w-[400px] rounded"
          onChange={handleChange}
          value={formData.password}
        />

        <input
          type="number"
          name="phoneNumber"
          placeholder="phone number"
          className="p-2 border w-[400px] rounded"
          onChange={handleChange}
          value={formData.phoneNumber}
        />

        <button className="bg-black text-white w-[400px] h-[50px] rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
