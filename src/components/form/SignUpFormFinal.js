import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const SignUpFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      // validationSchema={Yup.object({
      //   firstName: Yup.string().required("Required"),
      //   lastName: Yup.string().required("Required"),
      //   email: Yup.string().email().required("Required"),
      //   intro: Yup.string().required("Required"),
      //   job: Yup.string().required("Required"),
      // })}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            job: "",
            terms: false,
          });
          actions.setSubmitting(false);
        }, 5000);
        console.log(
          "🚀 ~ file: SignUpForm.js:10 ~ SignUpForm ~ values:",
          values
        );
      }}
    >
      {(formik) => {
        return (
          <Form className="p-10 w-full max-w-[500px] mx-auto">
            {/* First name */}
            {/* <div className="flex flex-col gap-2 mb-4">
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
        </div> */}
            <MyInput
              id="firstName"
              label="First Name"
              name="firstName"
              placeholder="Enter your first name"
            ></MyInput>
            {/* Last name */}
            {/* <div className="flex flex-col gap-2 mb-4">
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
        </div> */}
            <MyInput
              id="lastName"
              label="Last Name"
              name="lastName"
              placeholder="Enter your last name"
            ></MyInput>
            {/* Email */}
            <MyInput
              id="email"
              label="Email address"
              name="email"
              placeholder="Enter your email address"
              type="email"
            ></MyInput>
            {/* <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="email" className="font-semibold">
            Email address
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="p-4 rounded-md border border-gray-200"
          ></Field>
          <div className="text-red-500">
            <ErrorMessage name="email"></ErrorMessage>
          </div>
        </div> */}
            {/* Intro */}
            <MyTextArea
              id="intro"
              name="intro"
              label="Introduce myself"
              placeholder="Enter your introduce myself"
              className="p-4 rounded-md border border-gray-200 h-[150px] resize-none"
            ></MyTextArea>
            {/* <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="intro" className="font-semibold">
            Introduce myself
          </label>
          <Field
            type="text"
            id="intro"
            name="intro"
            placeholder="Enter your introduce myself"
            className="p-4 rounded-md border border-gray-200 h-[150px] resize-none"
            as="textarea"
          ></Field>
          <div className="text-red-500">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div> */}
            {/* Job */}
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="job" className="font-semibold">
                Select your job
              </label>
              <Field
                type="text"
                id="job"
                name="job"
                placeholder="Enter your introduce myself"
                className="p-4 rounded-md border border-gray-200"
                as="select"
              >
                <option value="frontend">Frontend Dev</option>
                <option value="backend">Backend Dev</option>
                <option value="fullstack">Fullstack Dev</option>
              </Field>
              <div className="text-red-500">
                <ErrorMessage name="job"></ErrorMessage>
              </div>
            </div>
            {/* Terms */}
            <div className="flex items-center gap-2 mb-4">
              <Field
                type="checkbox"
                id="terms"
                name="terms"
                className="p-4 rounded-md border border-gray-200"
              ></Field>
              <p>I accept the term and conditions</p>
              <div className="text-red-500">
                <ErrorMessage name="terms"></ErrorMessage>
              </div>
            </div>
            <button
              type="submit"
              className="w-full p-4 bg-blue-500 text-white font-semibold rounded-md text-center"
              disabled={formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label className="font-semibold" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-200"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label className="font-semibold" htmlFor={props.id || props.name}>
        {label}
      </label>
      <textarea
        type="text"
        className="p-4 rounded-md border border-gray-200 h-[150px] resize-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SignUpFormFinal;
