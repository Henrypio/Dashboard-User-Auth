import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage(props) {
  const [generalError, setGeneralError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const loginValidationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().min(8, "8+ characters").required("Required"),
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  async function handleSubmit(values, { setSubmitting, setFieldError }) {
    setGeneralError("");

    try {
      await login(values.email, values.password);
      navigate("/dashboard");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setFieldError("email", "Invalid email or password");
        setFieldError("password", "Invalid email or password");
        setGeneralError("Invalid email or password");
      } else {
        setGeneralError("An unexpected error occurred. Please try again.");
      }
    }

    setSubmitting(false);
  }

  const initialValues = props.data || { email: "", password: "" };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex mb-4 justify-between">
          <ul className="flex">
            <li className="-mb-px mr-1">
              <Link
                to="/register"
                className="bg-white text-gray-500 inline-block py-2 px-4 hover:text-blue-800 font-semibold"
              >
                Register
              </Link>
            </li>
            <li className="mr-1">
              <p
                className="bg-white inline-block border-[#EF498F] border-b py-2 px-4 text-[#1A0710D9] font-[400px] leading-[24px]"
                href="#"
              >
                Log in
              </p>
            </li>
          </ul>
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

        <div className="mb-4 text-gray-500">or Login with email</div>

        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <Field
                  className="border rounded w-full h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="example@mail.com"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
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
                    className="text-red-500"
                  />
                </div>
              </div>

              {generalError && (
                <div className="text-red-500 mb-4">{generalError}</div>
              )}

              <div className="flex flex-auto items-center justify-center">
                <button
                  className="w-full h-[56px] bg-[#5932EA] hover:bg-[#9962EF] py-2 mt-4 px-4 rounded-xl focus:outline-none focus:shadow-outline tracking-[0.15px] text-white font-[700] text-[16px] leading-[24px]"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login to dashboard"}
                </button>
              </div>
              <div className="mt-4">
                <Field type="checkbox" className="form-checkbox" name="check" />
                <span className="ml-2 text-gray-700">Remember Me</span>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
