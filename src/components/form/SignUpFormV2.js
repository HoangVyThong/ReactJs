import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpFormV2 = () => {
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
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(10, "Must be 10 characters or less")
          .required("Required"),
      })}
      onSubmit={(values) => {
        console.log(
          "🚀 ~ file: SignUpForm.js:10 ~ SignUpForm ~ values:",
          values
        );
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto">
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="firstName" className="font-semibold">
            FirstName
          </label>
          <Field
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            className="p-4 rounded-md border border-gray-200 mb-4"
          ></Field>
          <div className="text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
          <label htmlFor="lastName" className="font-semibold">
            LastName
          </label>
          <Field
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            className="p-4 rounded-md border border-gray-200"
          ></Field>
          <div className="text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-500 text-white font-semibold rounded-md text-center"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpFormV2;
