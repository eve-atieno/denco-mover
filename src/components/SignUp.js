import React from "react";
import { AuthContext } from "./AuthContext";
import { useContext, useState } from "react";

function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { register } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        register(name, email, password);
    };


  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-white h-auto rounded-lg shadow-2xl max-w-md w-11/12 mb-2 p-8">
        <h1 className="text-4xl mt-5 text-yellow-400 font-bold">Sign Up</h1>
        <p className="text-gray-black text-2xl">Create an account</p>
        <form
            onSubmit={handleSubmit}
         className="flex flex-col items-center justify-center mt-8">
          <div className="w-full mb-2 flex flex-col">
            <label
              htmlFor="username"
              className="text-gray-500 font-bold mb-2"
            >
              Username
            </label>
            <input
            value={name}
            onChange={(e) => setName(e.target.value)}
              type="text"
              id="username"
              placeholder="Username"
              className="border-2 border-gray-400 rounded-lg w-full h-12 px-3 text-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="w-full mb-2 flex flex-col">
            <label htmlFor="email" className="text-gray-500 font-bold mb-2">
              Email
            </label>
            <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="email"
              placeholder="Email"
              className="border-2 border-gray-400 rounded-lg w-full h-12 px-3 text-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="w-full mb-2 flex flex-col">
            <label
              htmlFor="password"
              className="text-gray-500 font-bold mb-2"
            >
              Password
            </label>
            <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Password"
              className="border-2 border-gray-400 rounded-lg w-full h-12 px-3 text-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button className="bg-yellow-400 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full mt-4">
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default SignUp;
