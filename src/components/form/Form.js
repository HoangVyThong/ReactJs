import React, { useState } from "react";
import useHandlerChange from "../../hooks/useHandlerChange";

const Form = () => {
  // const [values, setValues] = useState({
  //   fullName: "",
  //   email: "",
  //   hobby: false,
  // });

  // const handlerInputChange = (e) => {
  //   const type = e.target.type;
  //   setValues({
  //     ...values,
  //     [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
  //   });
  // };

  const { values, handlerChange } = useHandlerChange({
    fullName: "",
    email: "",
    hobby: false,
  });

  const [nameError, setNameError] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();

    // Validate
    if (values.fullName === "") {
      setNameError("Full name is required");
    } else {
      setNameError("");
    }
  };

  return (
    <form className="flex gap-x-5" autoComplete="off" onSubmit={handlerSubmit}>
      {/* Thẻ input */}
      <div className="flex flex-col gap-y-3">
        <input
          type="text"
          name="fullName"
          id=""
          className="w-full max-w-[300px] p-5 border rounded-lg border-gray-200"
          placeholder="Enter your full name"
          onChange={handlerChange}
        />
      </div>
      <input
        type="email"
        name="email"
        id=""
        className="w-full max-w-[300px] p-5 border rounded-lg border-gray-200"
        placeholder="Enter your email"
        onChange={handlerChange}
      />
      <input type="checkbox" name="hobby" onChange={handlerChange} />

      <button type="submit" className="p-3 rounded-lg text-white bg-blue-500">
        Submit
      </button>
    </form>
  );
};

export default Form;
