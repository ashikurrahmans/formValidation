import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const LeftForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  const schema = yup.object({
    firstName: yup
      .string()
      .required("First Name is required")
      .min(3, "First Name is required"),
    userName: yup
      .string()
      .required("User  Name is required")
      .min(5, "Minimum charecter is 5"),
    email: yup.string().email().required("Email address is required"),
    phoneNumber: yup
      .number()
      .required()
      .required("Phone Number is Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    url: yup.string().url(),
    question: yup.string().min(20, "Minimum 20 charecter "),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="w-[650px] bg-[#fcfbfb] py-8 px-6 rounded-2xl border mr-8">
        <h1 className="text-2xl text-black font-bold mb-6 mx-auto">
          Questions? We're Ready To Help You.
        </h1>

        <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                className="shadow-lg appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
                name="fullName"
                type="text"
                placeholder="Full Name*"
                {...register("fullName")}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="shadow-lg appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="userName"
                type="text"
                placeholder="Username*"
                {...register("userName")}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                className="shadow-lg appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="email"
                type="email"
                placeholder="Email*"
                {...register("email")}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="shadow-lg appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                {...register("phoneNumber")}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                className="shadow-lg appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="password"
                type="password"
                placeholder="Password*"
                {...register("password")}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="shadow-lg appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password*"
                {...register("confirmPassword")}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                className="shadow-lg appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                name="url"
                placeholder="Valid URL"
                {...register("url")}
              />
            </div>

            <div className="w-full md:w-1/2 px-3 ">
              <DatePicker
                selected={startDate}
                className="shadow-lg appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                dateFormat="dd/MM/yyyy"
                placeholderText='Enter "tomorrow"'
                fixedHeight
                dropdownMode="select"
              ></DatePicker>
            </div>
          </div>
          <textarea
            name="question"
            cols="30"
            rows="10"
            className="w-full border-gray-200 ronded focus:bg-white mt-2 mb-6 shadow-2xl"
            {...register("question")}
          ></textarea>
          <button
            className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LeftForm;

// maxDate={new Date()} - maximum date
// fixedHeight - calender fixed height
// inline - for fixed design
// showTimeInput - show calender with time input bottom
// showTimeSelect - show calender with left time input
// showMonthYearPicker - Only month picker
// showFullMonthYearPicker
// showMonthDropdown - show month as dropdown
// withPortal - popup
// todayButton="Hello baby" - footer button
// showMonthDropdown - Month Dropdown
// showYearDropdown - year dropdown
