import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};

//   // validate first name
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "First name should be less than 20 characters";
//   }

//   // validate last name
//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Last name should be less than 20 characters";
//   }
//   return errors;
// };

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("🚀 ~ file: SignUpForm.js:10 ~ SignUpForm ~ values:", values);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="firstName" className="font-semibold">
          FirstName
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-200 mb-4"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-red-500">{formik.errors.firstName}</div>
        ) : null}
        <label htmlFor="lastName" className="font-semibold">
          LastName
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-200"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-red-500">{formik.errors.lastName}</div>
        ) : null}
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

export default SignUpForm;
