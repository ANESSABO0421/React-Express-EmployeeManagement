import React from "react";
import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCreateUser = async (e) => {
    e.preventDefault();
    console.log(name, email, password, phoneNumber);

    const createUser = await axios.post(
      "http://localhost:3000/API/createuser",
      { name, email, password, phoneNumber }
    );
    if (createUser) {
      window.alert("data succcessfully added");
      window.location.reload();
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <form
        className="flex flex-col gap-5 items-center justify-center bg-red-300 h-[500px] w-[500px] rounded"
        onSubmit={handleCreateUser}
      >
        <h1 className="text-4xl font-bold">Login Form</h1>
        <input
          type="text"
          placeholder="name"
          className="p-2 border w-[400px] rounded"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="email"
          className="p-2 border w-[400px] rounded"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 border w-[400px] rounded"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="number"
          placeholder="phone number"
          className="p-2 border w-[400px] rounded"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
        />
        <button className="bg-black text-white w-[400px] h-[50px] rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
