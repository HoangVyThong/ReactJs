import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup
    .string()
    .required("Field is required")
    .max(20, "Must be 20 characters or less"),
  lastName: yup
    .string()
    .required("Field is required")
    .max(10, "Must be 10 characters or less"),
  email: yup
    .string()
    .required("Field is required")
    .max(50, "Must be 50 characters or less"),
});

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ resolver: yupResolver(schema) });
  console.log(
    "🚀 ~ file: SignUpFormHook.js:26 ~ SignUpFormHook ~ isSubmitting:",
    isSubmitting
  );
  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout((values) => {
        resolve();
        console.log(data);
      }, 5000);
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
          {...register("firstName")}
        />
        {errors?.firstName && (
          <div className="text-red-500">{errors?.firstName?.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="lastName" className="font-semibold">
          LastName
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-200"
          {...register("lastName")}
        />
        {errors?.lastName && (
          <div className="text-red-500">{errors?.lastName?.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="email" className="font-semibold">
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="p-4 rounded-md border border-gray-200"
          {...register("email")}
        />
        {errors?.email && (
          <div className="text-red-500">{errors?.email?.message}</div>
        )}
      </div>
      <button
        type="submit"
        className="w-full p-4 bg-blue-500 text-white font-semibold rounded-md text-center"
      >
        {isSubmitting ? (
          <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default SignUpFormHook;
