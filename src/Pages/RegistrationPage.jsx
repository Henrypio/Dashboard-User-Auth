import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import search from "../assets/search.svg";
import image from "../assets/image.png";

const Pages = (index) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    full_name: "",
    gender: "",
    country_code: "",
    phone: "",
    birthday: "",
    address: "",
    street_address: "",
    apartment: "",
    city: "",
    state: "",
    zip_code: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handlePrevStep = (newData) => {
    setUserData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const handleNextStep = (newData) => {
    setUserData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev + 1);
  };

  const steps = [
    <StepOne key={0} next={handleNextStep} data={userData} />,
    <StepTwo
      key={1}
      prev={handlePrevStep}
      next={handleNextStep}
      data={userData}
    />,
    <StepThree
      key={2}
      prev={handlePrevStep}
      next={handleNextStep}
      data={userData}
    />,
    <StepFour
      key={3}
      prev={handlePrevStep}
      next={handleNextStep}
      data={userData}
    />,
    <SignedUp key={4} />,
  ];

  return (
    <>
      <div key={index}>{steps[currentStep]}</div>
    </>
  );
};

const stepOneValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().min(8, "8+ characters").required("Required"),
});
const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex justify-between mb-4">
          <ul className="flex">
            <li className="-mb-px mr-1">
              <a
                className="bg-white inline-block border-[#EF498F] border-b py-2 px-4 text-[#1A0710D9] font-[400px] leading-[24px]"
                href="#"
              >
                Register
              </a>
            </li>
            <li className="mr-1">
              <Link
                to={"/login"}
                className="bg-white inline-block py-2 px-4 text-gray-500 hover:text-blue-800 font-semibold"
                href="#"
              >
                Log in
              </Link>
            </li>
          </ul>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            cursor="pointer"
            onClick={() => navigate("/")}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.70699 5.29298C6.51839 5.11082 6.26579 5.01003 6.00359 5.01231C5.74139 5.01458 5.49058 5.11975 5.30517 5.30516C5.11976 5.49057 5.01459 5.74138 5.01232 6.00358C5.01004 6.26578 5.11083 6.51838 5.29299 6.70698L10.586 12L5.29299 17.293C5.19748 17.3852 5.1213 17.4956 5.06889 17.6176C5.01648 17.7396 4.98889 17.8708 4.98774 18.0036C4.98659 18.1364 5.01189 18.268 5.06217 18.3909C5.11245 18.5138 5.1867 18.6255 5.28059 18.7194C5.37449 18.8133 5.48614 18.8875 5.60904 18.9378C5.73193 18.9881 5.86361 19.0134 5.99639 19.0122C6.12917 19.0111 6.26039 18.9835 6.38239 18.9311C6.5044 18.8787 6.61474 18.8025 6.70699 18.707L12 13.414L17.293 18.707C17.4816 18.8891 17.7342 18.9899 17.9964 18.9877C18.2586 18.9854 18.5094 18.8802 18.6948 18.6948C18.8802 18.5094 18.9854 18.2586 18.9877 17.9964C18.9899 17.7342 18.8891 17.4816 18.707 17.293L13.414 12L18.707 6.70698C18.8891 6.51838 18.9899 6.26578 18.9877 6.00358C18.9854 5.74138 18.8802 5.49057 18.6948 5.30516C18.5094 5.11975 18.2586 5.01458 17.9964 5.01231C17.7342 5.01003 17.4816 5.11082 17.293 5.29298L12 10.586L6.70699 5.29298Z"
              fill="#1A0710"
              fillOpacity="0.85"
            />
          </svg>
        </div>

        <div className="flex items-center justify-start gap-2 mb-4">
          <div className="flex justify-center items-center bg-[#F6F6F6] p-2 rounded-[50%] w-[48px] h-[48px]">
            <svg
              width="22"
              height="25"
              viewBox="0 0 22 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.6113 0C15.8313 1.49418 15.2231 2.95799 14.4208 3.99365C13.5624 5.10453 12.0829 5.96372 10.6495 5.91888C10.3878 4.48834 11.0578 3.0144 11.873 2.02359C12.7673 0.930068 14.3 0.0911264 15.6113 0ZM19.9175 21.0314C20.6565 19.8988 20.9326 19.3274 21.5062 18.0488C17.3338 16.462 16.6652 10.5301 20.7945 8.25341C19.535 6.67389 17.7651 5.75828 16.0944 5.75828C14.8906 5.75828 14.0658 6.07243 13.3159 6.35803C12.691 6.59603 12.1182 6.81419 11.4216 6.81419C10.6687 6.81419 10.002 6.57515 9.30392 6.32485C8.53683 6.04981 7.73182 5.76118 6.73292 5.76118C4.85804 5.76118 2.86238 6.90677 1.59713 8.86526C-0.181423 11.6236 0.121951 16.8092 3.00616 21.2266C4.03706 22.8076 5.41446 24.5838 7.21602 24.5998C7.96355 24.6072 8.46099 24.3841 8.99929 24.1426C9.61542 23.8663 10.2851 23.5659 11.4446 23.5598C12.6109 23.5528 13.27 23.8568 13.8779 24.1372C14.4024 24.3791 14.8888 24.6035 15.63 24.5954C17.433 24.581 18.8866 22.6123 19.9175 21.0314Z"
                fill="#0B0B0A"
              />
            </svg>
          </div>
          <div className="flex justify-center items-center bg-[#F6F6F6] p-2 rounded-[50%] w-[48px] h-[48px]">
            <svg
              width="13"
              height="27"
              viewBox="0 0 13 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.50155 26.1115V13.0542H12.1059L12.5836 8.5546H8.50155L8.50768 6.30251C8.50768 5.12894 8.61918 4.50012 10.3048 4.50012H12.5581V0H8.95319C4.62314 0 3.09907 2.18279 3.09907 5.85357V8.55511H0.4V13.0547H3.09907V26.1115H8.50155Z"
                fill="#3B5998"
              />
            </svg>
          </div>
          <div className="flex justify-center items-center bg-[#F6F6F6] p-2 rounded-[50%] w-[48px] h-[48px]">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 4.62131C12.9529 4.62131 14.2702 5.46486 15.0213 6.16975L17.9564 3.30398C16.1538 1.62842 13.808 0.599976 11 0.599976C6.93244 0.599976 3.41955 2.9342 1.70933 6.33153L5.072 8.94309C5.91555 6.43553 8.24978 4.62131 11 4.62131Z"
                fill="#EA4335"
              />
              <path
                d="M20.984 11.2311C20.984 10.376 20.9147 9.75197 20.7644 9.10486H11V12.9644H16.7316C16.616 13.9235 15.992 15.368 14.6053 16.3386L17.8871 18.8809C19.8516 17.0666 20.984 14.3973 20.984 11.2311Z"
                fill="#4285F4"
              />
              <path
                d="M5.08355 13.0569C4.864 12.4098 4.73689 11.7164 4.73689 11C4.73689 10.2835 4.864 9.59021 5.072 8.9431L1.70933 6.33154C1.00444 7.74132 0.599998 9.32443 0.599998 11C0.599998 12.6755 1.00444 14.2587 1.70933 15.6684L5.08355 13.0569Z"
                fill="#FBBC05"
              />
              <path
                d="M11 21.4C13.808 21.4 16.1653 20.4756 17.8871 18.8809L14.6053 16.3387C13.7271 16.9511 12.5484 17.3787 11 17.3787C8.24977 17.3787 5.91555 15.5644 5.08355 13.0569L1.72089 15.6684C3.43111 19.0658 6.93244 21.4 11 21.4Z"
                fill="#34A853"
              />
            </svg>
          </div>
        </div>

        <div className="mb-4 text-gray-500">or register with email</div>

        <Formik
          initialValues={props.data}
          validationSchema={stepOneValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <Field
                className="border rounded w-full h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                placeholder="Email address"
                name="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="mb-4">
              <div className="relative">
                <Field
                  className="border rounded w-full h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="********"
                  name="password"
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <svg
                      fill="#000000"
                      width="24px"
                      height="24px"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M47.0849493,2.84217094e-14 L185.740632,138.655563 C194.095501,134.657276 203.45297,132.418278 213.333333,132.418278 C248.679253,132.418278 277.333333,161.072358 277.333333,196.418278 C277.333333,206.299034 275.094157,215.656855 271.095572,224.011976 L409.751616,362.666662 L379.581717,392.836561 L320.374817,333.628896 C291.246618,353.329494 255.728838,367.084945 213.333333,367.084945 C64,367.084945 7.10542736e-15,196.418278 7.10542736e-15,196.418278 C7.10542736e-15,196.418278 22.862032,135.452859 73.1408088,86.3974274 L16.9150553,30.169894 L47.0849493,2.84217094e-14 Z M103.440016,116.694904 C74.7091717,144.512844 55.9626236,177.598744 46.7136,196.424891 C64.7370667,233.114811 119.071573,324.418278 213.333333,324.418278 C242.440012,324.418278 267.739844,315.712374 289.339919,302.595012 L240.926035,254.180993 C232.571166,258.17928 223.213696,260.418278 213.333333,260.418278 C177.987413,260.418278 149.333333,231.764198 149.333333,196.418278 C149.333333,186.537915 151.572331,177.180445 155.570618,168.825577 Z M213.333333,25.7516113 C362.666667,25.7516113 426.666667,196.418278 426.666667,196.418278 C426.666667,196.418278 412.428071,234.387867 381.712212,274.508373 L351.151213,243.941206 C364.581948,225.697449 374.142733,208.239347 379.954347,196.410385 C361.9296,159.721745 307.595093,68.418278 213.333333,68.418278 C201.495833,68.418278 190.287983,69.858232 179.702584,72.449263 L145.662385,38.4000762 C165.913597,30.494948 188.437631,25.7516113 213.333333,25.7516113 Z"
                        transform="translate(42.667 59.582)"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.57442 12.7075C2.39493 12.4296 2.25004 12.1889 2.14075 12C2.25004 11.8111 2.39493 11.5704 2.57442 11.2925C3.03544 10.5787 3.71817 9.6294 4.60454 8.68394C6.39553 6.77356 8.89952 5 12 5C15.1005 5 17.6045 6.77356 19.3955 8.68394C20.2818 9.6294 20.9646 10.5787 21.4256 11.2925C21.6051 11.5704 21.75 11.8111 21.8593 12C21.75 12.1889 21.6051 12.4296 21.4256 12.7075C20.9646 13.4213 20.2818 14.3706 19.3955 15.3161C17.6045 17.2264 15.1005 19 12 19C8.89952 19 6.39553 17.2264 4.60454 15.3161C3.71817 14.3706 3.03544 13.4213 2.57442 12.7075ZM23.8941 11.5521C23.8941 11.5521 24.0463 12.1426 23.8941 12.4479L23.8925 12.4511L23.889 12.458L23.8777 12.4802C23.8681 12.4987 23.8547 12.5247 23.8373 12.5576C23.8025 12.6233 23.752 12.7168 23.686 12.834C23.5542 13.0684 23.3602 13.3985 23.1057 13.7925C22.5979 14.5787 21.8432 15.6294 20.8545 16.6839C18.8955 18.7736 15.8995 21 12 21C8.1005 21 5.10449 18.7736 3.14547 16.6839C2.15684 15.6294 1.40207 14.5787 0.894343 13.7925C0.639857 13.3985 0.445799 13.0684 0.313979 12.834C0.248031 12.7168 0.197547 12.6233 0.162761 12.5576C0.145364 12.5247 0.131882 12.4987 0.122345 12.4802L0.110997 12.458L0.107546 12.4511L0.106377 12.4488L0.105932 11.5521L0.107546 11.5489L0.110997 11.542L0.122345 11.5198C0.131882 11.5013 0.145364 11.4753 0.162761 11.4424C0.197547 11.3767 0.248031 11.2832 0.313979 11.166C0.445799 10.9316 0.639857 10.6015 0.894343 10.2075C1.40207 9.42131 2.15684 8.3706 3.14547 7.31606C5.10449 5.22644 8.1005 3 12 3C15.8995 3 18.8955 5.22644 20.8545 7.31606C21.8432 8.3706 22.5979 9.42131 23.1057 10.2075C23.3602 10.6015 23.5542 10.9316 23.686 11.166C23.752 11.2832 23.8025 11.3767 23.8373 11.4424C23.8547 11.4753 23.8681 11.5013 23.8777 11.5198L23.889 11.542L23.8925 11.5489L23.8941 11.5521ZM23.8941 12.4479C24.0348 12.1664 24.0348 11.8336 23.8941 11.5521C23.8941 11.5521 24.0463 12.1426 23.8941 12.4479ZM0.10558 12.4472L0.105756 11.9996L0.105932 11.5521C-0.0348316 11.8336 -0.0351837 12.1657 0.10558 12.4472ZM12 8C10.9391 8 9.92173 8.42143 9.17158 9.17157C8.42143 9.92172 8.00001 10.9391 8.00001 12C8.00001 13.0609 8.42143 14.0783 9.17158 14.8284C9.92173 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8ZM13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142Z"
                        fill="#1A0710"
                        fillOpacity="0.85"
                      />{" "}
                    </svg>
                  )}
                </span>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
            </div>

            <div className="flex flex-auto items-center justify-center">
              <button
                className="w-full h-[56px] bg-[#5932EA] hover:bg-[#9962EF] py-2 mt-4 px-4 rounded-xl focus:outline-none focus:shadow-outline tracking-[0.15px] text-white font-[700] text-[16px] leading-[24px]"
                type="submit"
              >
                Create account
              </button>
            </div>

            <div className="mt-4">
              <Field type="checkbox" className="form-checkbox" name="check" />
              <span className="ml-2 text-gray-700">
                Send me news and promotions
              </span>
            </div>

            <p className="text-center text-gray-500 text-xs mt-4">
              By continuing I agree with the{" "}
              <a href="#" className="text-blue-500">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500">
                Privacy Policy
              </a>
              .
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

const stepTwoValidationSchema = yup.object().shape({
  full_name: yup.string().required("Required"),
  gender: yup
    .string()
    .oneOf(["male", "female"], "Invalid gender")
    .required("Required"),
  country_code: yup
    .number()
    .max(999, "country code cannot exceed three values")
    .typeError("country code must be a number")
    .required("Required"),
  phone: yup.number().typeError("must be a number").required("Required"),
  birthday: yup.date(),
});

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex justify-between">
          <div className="flex mb-4 gap-2">
            <h1>Personal Information</h1>
            <h1 className="text-green-500 font-[700]">2 of 3</h1>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            cursor="pointer"
            onClick={props.prev}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.70699 5.29298C6.51839 5.11082 6.26579 5.01003 6.00359 5.01231C5.74139 5.01458 5.49058 5.11975 5.30517 5.30516C5.11976 5.49057 5.01459 5.74138 5.01232 6.00358C5.01004 6.26578 5.11083 6.51838 5.29299 6.70698L10.586 12L5.29299 17.293C5.19748 17.3852 5.1213 17.4956 5.06889 17.6176C5.01648 17.7396 4.98889 17.8708 4.98774 18.0036C4.98659 18.1364 5.01189 18.268 5.06217 18.3909C5.11245 18.5138 5.1867 18.6255 5.28059 18.7194C5.37449 18.8133 5.48614 18.8875 5.60904 18.9378C5.73193 18.9881 5.86361 19.0134 5.99639 19.0122C6.12917 19.0111 6.26039 18.9835 6.38239 18.9311C6.5044 18.8787 6.61474 18.8025 6.70699 18.707L12 13.414L17.293 18.707C17.4816 18.8891 17.7342 18.9899 17.9964 18.9877C18.2586 18.9854 18.5094 18.8802 18.6948 18.6948C18.8802 18.5094 18.9854 18.2586 18.9877 17.9964C18.9899 17.7342 18.8891 17.4816 18.707 17.293L13.414 12L18.707 6.70698C18.8891 6.51838 18.9899 6.26578 18.9877 6.00358C18.9854 5.74138 18.8802 5.49057 18.6948 5.30516C18.5094 5.11975 18.2586 5.01458 17.9964 5.01231C17.7342 5.01003 17.4816 5.11082 17.293 5.29298L12 10.586L6.70699 5.29298Z"
              fill="#1A0710"
              fillOpacity="0.85"
            />
          </svg>
        </div>

        <Formik
          initialValues={props.data}
          validationSchema={stepTwoValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <Field
                className="border rounded w-full h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Full Name"
                name="full_name"
              />
              <ErrorMessage
                name="full_name"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="flex items-center mb-4 gap-x-2">
              <p className="block text-gray-700 text-sm font-bold">Gender</p>
              <div className="relative">
                <label className="mb-2">
                  <Field
                    type="radio"
                    name="gender"
                    value="male"
                    className="mr-2"
                  />
                  Male
                </label>
                <label className="ml-2">
                  <Field
                    type="radio"
                    name="gender"
                    value="female"
                    className="mr-2"
                  />
                  Female
                </label>
              </div>
            </div>
            <ErrorMessage
              name="gender"
              component="div"
              className="text-red-500 text-xs"
            />

            <div className="flex text-[#1A0710A6] gap-x-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_132_31183)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14ZM7 5.333C7 4.78072 7.44772 4.333 8 4.333H8.007C8.55928 4.333 9.007 4.78072 9.007 5.333C9.007 5.88528 8.55928 6.333 8.007 6.333H8C7.44772 6.333 7 5.88528 7 5.333ZM8 7C8.55228 7 9 7.44772 9 8V10.667C9 11.2193 8.55228 11.667 8 11.667C7.44772 11.667 7 11.2193 7 10.667V8C7 7.44772 7.44772 7 8 7Z"
                    fill="#1A0710"
                    fillOpacity="0.65"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_132_31183">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="text-[12px] text-[#1A0710A6] font-[700] leading-[20px]">
                This phone number and birthday are only visible to you
              </span>
            </div>

            <div className="flex justify-between relative my-2">
              <Field
                className="w-[30%] border rounded h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                placeholder="+***"
                name="country_code"
              />
              <ErrorMessage
                name="country_code"
                component="div"
                className="text-red-500 text-xs"
              />
              <Field
                className="w-[65%] border rounded h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                placeholder="Phone Number"
                name="phone"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="relative">
              <input
                className="border rounded w-full h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                type="date"
                placeholder="Birthday"
                name="birthday"
              />
              <span className="absolute inset-y-0 right-0 mr-10 pr-[-2px] flex items-center">
                Optional
              </span>
            </div>
            <span className="text-[13px] font-[400]">
              Let us know about your birthday so as not to miss a gift
            </span>

            <div className="flex flex-auto items-center justify-center mt-2">
              <button
                className="w-full h-[56px] bg-[#5932EA] hover:bg-[#9962EF] py-2 mt-4 px-4 rounded-xl focus:outline-none focus:shadow-outline tracking-[0.15px] text-white font-[700] text-[16px] leading-[24px]"
                type="submit"
              >
                Save Information
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

const stepThreeValidationSchema = yup.object().shape({
  address: yup.string(),
});

const StepThree = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex justify-between">
          <div className="flex mb-4 gap-2">
            <h1>Add Address</h1>
            <h1 className="text-green-500 font-[700]">3 of 3</h1>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            cursor="pointer"
            onClick={props.prev}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.70699 5.29298C6.51839 5.11082 6.26579 5.01003 6.00359 5.01231C5.74139 5.01458 5.49058 5.11975 5.30517 5.30516C5.11976 5.49057 5.01459 5.74138 5.01232 6.00358C5.01004 6.26578 5.11083 6.51838 5.29299 6.70698L10.586 12L5.29299 17.293C5.19748 17.3852 5.1213 17.4956 5.06889 17.6176C5.01648 17.7396 4.98889 17.8708 4.98774 18.0036C4.98659 18.1364 5.01189 18.268 5.06217 18.3909C5.11245 18.5138 5.1867 18.6255 5.28059 18.7194C5.37449 18.8133 5.48614 18.8875 5.60904 18.9378C5.73193 18.9881 5.86361 19.0134 5.99639 19.0122C6.12917 19.0111 6.26039 18.9835 6.38239 18.9311C6.5044 18.8787 6.61474 18.8025 6.70699 18.707L12 13.414L17.293 18.707C17.4816 18.8891 17.7342 18.9899 17.9964 18.9877C18.2586 18.9854 18.5094 18.8802 18.6948 18.6948C18.8802 18.5094 18.9854 18.2586 18.9877 17.9964C18.9899 17.7342 18.8891 17.4816 18.707 17.293L13.414 12L18.707 6.70698C18.8891 6.51838 18.9899 6.26578 18.9877 6.00358C18.9854 5.74138 18.8802 5.49057 18.6948 5.30516C18.5094 5.11975 18.2586 5.01458 17.9964 5.01231C17.7342 5.01003 17.4816 5.11082 17.293 5.29298L12 10.586L6.70699 5.29298Z"
              fill="#1A0710"
              fillOpacity="0.85"
            />
          </svg>
        </div>

        <Formik
          initialValues={props.data}
          validationSchema={stepThreeValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="flex flex-col justify-center mb-4">
              <img src={search} alt="" className="absolute mb-5 ml-2" />
              <Field
                className="border rounded w-full h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline placeholder:pl-5"
                placeholder="Search for address"
                name="address"
              />
              <span>Your address is not visible to other users</span>
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex gap-1 justify-center">
              <button
                type="button"
                className="border px-[12px] h-[32px] w-[168px] rounded-xl text-[#5932EA] text-center text-[13px] font-[700] leading-[20px]"
              >
                Use current location
              </button>
              <button
                type="submit"
                className="border px-[12px] h-[32px] w-[168px] rounded-xl text-[#5932EA] text-center text-[13px] font-[700] leading-[20px]"
              >
                Add Manually
              </button>
            </div>

            <div className="flex flex-col justify-end">
              <h2 className="font-[700] text-[20px] leading-[28px] text-[#1A0710D9] mt-20 pb-3">
                Sharing your address shows:
              </h2>
              <div className="flex items-center gap-2 py-0.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 14V12.637C15 12.033 14.803 11.447 14.44 10.969C14.0817 10.4943 13.5748 10.1531 13 10M10.667 2.08701C11.2412 2.23327 11.7503 2.56665 12.1139 3.0345C12.4776 3.50234 12.6749 4.07798 12.6749 4.67051C12.6749 5.26304 12.4776 5.83868 12.1139 6.30653C11.7503 6.77437 11.2412 7.10775 10.667 7.25401M11 14V12.667C11.0035 11.9684 10.7419 11.2944 10.268 10.781C10.0427 10.5365 9.7694 10.341 9.46524 10.2067C9.16109 10.0723 8.83254 10.002 8.50003 10H3.50003C2.83703 10 2.20103 10.281 1.73203 10.781C1.25812 11.2944 0.99653 11.9684 1.00003 12.667V14H11ZM6.00003 7.33301C6.35455 7.33988 6.70687 7.27598 7.0364 7.14506C7.36593 7.01414 7.66604 6.81882 7.91918 6.57054C8.17232 6.32225 8.37342 6.02597 8.51069 5.69904C8.64797 5.37211 8.71868 5.02109 8.71868 4.66651C8.71868 4.31193 8.64797 3.96091 8.51069 3.63398C8.37342 3.30705 8.17232 3.01078 7.91918 2.76249C7.66604 2.5142 7.36593 2.31888 7.0364 2.18796C6.70687 2.05704 6.35455 1.99315 6.00003 2.00001C5.30178 2.01353 4.63668 2.30041 4.14765 2.799C3.65862 3.2976 3.38468 3.96812 3.38468 4.66651C3.38468 5.3649 3.65862 6.03543 4.14765 6.53402C4.63668 7.03261 5.30178 7.31949 6.00003 7.33301Z"
                    stroke="#1A0710"
                    strokeOpacity="0.65"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="font-[400] text-[15px] leading-[24px] text-[#1A0710D9]">
                  People near you
                </p>
              </div>
              <div className="flex items-center gap-2 py-0.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_132_31425)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.9504 0.890461C10.0094 0.510762 9.00232 0.321644 7.98765 0.334071C5.97065 0.358775 4.04465 1.17736 2.62707 2.61241C1.20949 4.04746 0.414551 5.98335 0.414551 8.0005C0.414551 10.0176 1.20949 11.9535 2.62707 13.3886C4.04465 14.8236 5.97065 15.6422 7.98765 15.6669C9.00232 15.6793 10.0094 15.4902 10.9504 15.1105C11.8914 14.7308 12.7477 14.1681 13.4696 13.455C14.1916 12.7419 14.7647 11.8925 15.1559 10.9562C15.5471 10.0199 15.7486 9.01524 15.7486 8.0005C15.7486 6.98575 15.5471 5.9811 15.1559 5.04479C14.7647 4.10848 14.1916 3.25914 13.4696 2.54601C12.7477 1.83289 11.8914 1.27016 10.9504 0.890461ZM8.01215 2.33392C8.76213 2.32474 9.50648 2.46452 10.202 2.74517C10.8976 3.02582 11.5305 3.44176 12.0641 3.96886C12.5977 4.49596 13.0214 5.12374 13.3105 5.81581C13.5997 6.50787 13.7486 7.25045 13.7486 8.0005C13.7486 8.75054 13.5997 9.49312 13.3105 10.1852C13.0214 10.8772 12.5977 11.505 12.0641 12.0321C11.5305 12.5592 10.8976 12.9752 10.202 13.2558C9.50648 13.5365 8.76213 13.6763 8.01215 13.6671C6.5213 13.6488 5.09771 13.0438 4.04991 11.9831C3.00212 10.9224 2.41455 9.49146 2.41455 8.0005C2.41455 6.50954 3.00212 5.07864 4.04991 4.01794C5.09771 2.95723 6.5213 2.35218 8.01215 2.33392ZM9 4C9 3.44772 8.55229 3 8 3C7.44772 3 7 3.44772 7 4V8C7 8.37883 7.21406 8.72513 7.55292 8.89449L10.2199 10.2275C10.7139 10.4744 11.3146 10.2741 11.5615 9.78008C11.8084 9.28606 11.6081 8.68542 11.1141 8.43851L9 7.38186V4Z"
                      fill="#1A0710"
                      fillOpacity="0.65"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_132_31425">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="font-[400] text-[15px] leading-[24px] text-[#1A0710D9] py-1">
                  Estimated delivery time
                </p>
              </div>
              <div className="flex items-center gap-2 py-0.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_139_31631)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 0.960002C9 0.429808 8.55228 0 8 0C7.44772 0 7 0.429808 7 0.960002V2.55997H6.33333C5.44928 2.55997 4.60143 2.89711 3.97631 3.49723C3.35119 4.09735 3 4.91128 3 5.75998C3 6.60867 3.35119 7.42261 3.97631 8.02272C4.60143 8.62284 5.44928 8.95998 6.33333 8.95998H7V11.52H4C3.44772 11.52 3 11.9498 3 12.48C3 13.0102 3.44772 13.44 4 13.44H7V15.04C7 15.5702 7.44772 16 8 16C8.55228 16 9 15.5702 9 15.04V13.44H9.66667C10.5507 13.44 11.3986 13.1029 12.0237 12.5027C12.6488 11.9026 13 11.0887 13 10.24C13 9.39129 12.6488 8.57736 12.0237 7.97724C11.3986 7.37712 10.5507 7.03998 9.66667 7.03998H9V4.47997H11.3333C11.8856 4.47997 12.3333 4.05016 12.3333 3.51997C12.3333 2.98978 11.8856 2.55997 11.3333 2.55997H9V0.960002ZM7 4.47997H6.33333C5.97971 4.47997 5.64057 4.61483 5.39052 4.85488C5.14048 5.09492 5 5.4205 5 5.75998C5 6.09945 5.14048 6.42503 5.39052 6.66507C5.64057 6.90512 5.97971 7.03998 6.33333 7.03998H7V4.47997ZM9 8.95998V11.52H9.66667C10.0203 11.52 10.3594 11.3851 10.6095 11.1451C10.8595 10.905 11 10.5795 11 10.24C11 9.90051 10.8595 9.57494 10.6095 9.33489C10.3594 9.09484 10.0203 8.95998 9.66667 8.95998H9Z"
                      fill="#1A0710"
                      fillOpacity="0.65"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_139_31631">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="font-[400] text-[15px] leading-[24px] text-[#1A0710D9]">
                  Estimated shopping costs
                </p>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

const stepFourValidationSchema = yup.object().shape({
  street_address: yup.string().required("Required"),
  apartment: yup.string(),
  city: yup.string().required("Required"),
  state: yup.string().required("Required"),
  zip_code: yup.number().required("Required"),
});

const StepFour = (props) => {
  const { signup } = useAuth();

  async function handleSubmit(values, { setSubmitting }) {
    try {
      await signup(values.email, values.password);
      props.next(values);
      console.log(
        "data",
        userData,
        `user ${values.email} and ${values.password} registered as ${values.full_name}`
      );
    } catch (error) {
      console.log("error", error);
    }
    setSubmitting(false);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex justify-between">
          <div className="flex mb-4 gap-2">
            <h1>Add Address</h1>
            <h1 className="text-green-500 font-[700]">3 of 3</h1>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            cursor="pointer"
            onClick={props.prev}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.70699 5.29298C6.51839 5.11082 6.26579 5.01003 6.00359 5.01231C5.74139 5.01458 5.49058 5.11975 5.30517 5.30516C5.11976 5.49057 5.01459 5.74138 5.01232 6.00358C5.01004 6.26578 5.11083 6.51838 5.29299 6.70698L10.586 12L5.29299 17.293C5.19748 17.3852 5.1213 17.4956 5.06889 17.6176C5.01648 17.7396 4.98889 17.8708 4.98774 18.0036C4.98659 18.1364 5.01189 18.268 5.06217 18.3909C5.11245 18.5138 5.1867 18.6255 5.28059 18.7194C5.37449 18.8133 5.48614 18.8875 5.60904 18.9378C5.73193 18.9881 5.86361 19.0134 5.99639 19.0122C6.12917 19.0111 6.26039 18.9835 6.38239 18.9311C6.5044 18.8787 6.61474 18.8025 6.70699 18.707L12 13.414L17.293 18.707C17.4816 18.8891 17.7342 18.9899 17.9964 18.9877C18.2586 18.9854 18.5094 18.8802 18.6948 18.6948C18.8802 18.5094 18.9854 18.2586 18.9877 17.9964C18.9899 17.7342 18.8891 17.4816 18.707 17.293L13.414 12L18.707 6.70698C18.8891 6.51838 18.9899 6.26578 18.9877 6.00358C18.9854 5.74138 18.8802 5.49057 18.6948 5.30516C18.5094 5.11975 18.2586 5.01458 17.9964 5.01231C17.7342 5.01003 17.4816 5.11082 17.293 5.29298L12 10.586L6.70699 5.29298Z"
              fill="#1A0710"
              fillOpacity="0.85"
            />
          </svg>
        </div>

        <Formik
          initialValues={props.data}
          validationSchema={stepFourValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <Field
                className="border rounded w-full h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                placeholder="Street Address"
                name="street_address"
              />
              <ErrorMessage
                name="street_address"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="mb-4">
              <div className="relative">
                <Field
                  className="border rounded w-full h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                  placeholder="Apartment"
                  name="apartment"
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  Optional
                </span>
              </div>
            </div>

            <div className="mb-4">
              <Field
                className="border rounded w-full h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                placeholder="City"
                name="city"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex justify-between mb-4">
              <Field
                className="border rounded w-[45%] h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                placeholder="State"
                name="state"
              />
              <ErrorMessage
                name="state"
                component="div"
                className="text-red-500 text-xs"
              />
              <Field
                className="border rounded w-[45%] h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                placeholder="Zip code"
                name="zip_code"
              />
              <ErrorMessage
                name="zip_code"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="flex flex-auto items-center justify-center">
              <button
                className="w-full h-[56px] bg-[#5932EA] hover:bg-[#9962EF] py-2 mt-4 px-4 rounded-xl focus:outline-none focus:shadow-outline tracking-[0.15px] text-white font-[700] text-[16px] leading-[24px]"
                type="submit"
              >
                Save Information
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

const SignedUp = () => {
  const navigate = useNavigate();
  const submit = () => {
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md w-full max-w-sm">
        <div className="bg-[#EF498F24]">
          <img src={image} alt="" height={"295px"} className="rounded w-full" />
        </div>
        <div className="p-6">
          <h1 className="text-center font-[700] text-[44px] leading-[48px] text-[#1A0710D9] py-4">
            You are successfully registered!
          </h1>
          <div className="flex flex-auto items-center justify-center">
            <button
              className="w-full bg-[#5932EA] hover:bg-[#9962EF] py-2 mt-4 px-4 rounded-xl focus:outline-none focus:shadow-outline tracking-[0.15px] text-white font-[700] text-[16px] leading-[24px]"
              type="button"
              onClick={submit}
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
