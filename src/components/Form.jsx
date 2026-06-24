import React from "react";

const Form = () => {
  return (
    <>
      <div className="w-full max-w-md border-2 border-black rounded-md" pd-6>
        <h1 className="text-2xl font-bold mb-4 text-center">Application Form</h1>
        <form>
          <div className="mb-4">
          <label htmlFor="username" className=" block mb-1 font-medium">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            className="w-full border border-gray-400 rounded-md pd-4"
          />
          </div>
          <div className="mb-4">
          <label htmlFor="mbNo" className=" block mb-1 font-medium">Mobile no:</label>
          <input
            type="tel"
            name="MobileNo"
            id="mbNo"
            placeholder="Enter your 10 digit mobile no"
            required
            className=" w-full border border-gray-400 rounded-md pd-4 "
          />
          </div>
          <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="pass"> Set Password:</label>
          <input
            type="password"
            id="pass"
            placeholder="Enter your password"
            required
            className="w-full border border-gray-400 rounded-md pd-4"
          />
          </div>
         <div className="mb-4">
          <label className=" block mb-1 font-medium mx-auto" htmlFor="dob">Enter DOB:</label>
          <input className=" w-full border border-gray-400 rounded-md pd-4 mx-auto" type="date" id="dob" name="dob" required />
          </div>
          <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className=" w-full border border-gray-400 rounded-md pd-4"
          />
          </div>
          <button type="submit" className="rounded-md bg-amber-950 text-white px-4 py-2 cursor-pointer hover:bg-black">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
