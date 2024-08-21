import React from "react";

const SignUpFormHook = () => {
  return (
    <form className="p-10 w-full max-w-[500px] mx-auto">
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="firstName" className="font-semibold">
          FirstName
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-200 mb-4"
        />
        <label htmlFor="lastName" className="font-semibold">
          LastName
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-200"
        />
      </div>
      <button
        type="submit"
        className="w-full p-4 bg-blue-500 text-white font-semibold rounded-md text-center"
      >
        Submit
      </button>
    </form>
  );
};

export default SignUpFormHook;
