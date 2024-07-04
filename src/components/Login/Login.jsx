// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { auth } from "../../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate, NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import Apple from "../../assets/Apple.png";
// import Facebook from "../../assets/Facebook.png";
// import Google from "../../assets/Google.png";
// import "./Login.css";

// const SignUpSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Invalid email")
//     .required("enter your email address"),
//   password: Yup.string().min(8, "Too Short!").required("enter your password"),
// });

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="container">
//       <div className="Link-div">
//         <NavLink to="/signup" activeClassName="active">
//           Register
//         </NavLink>
//         <NavLink to="/login" activeClassName="active">
//           Log in
//         </NavLink>
//         <div className="close-button" onClick={() => navigate("/")}>
//           &times;
//         </div>
//       </div>

//       <div className="social-signup">
//         <img src={Apple} alt="apple-logo" />
//         <img src={Facebook} alt="facebook-logo" />
//         <img src={Google} alt="google-logo" />
//       </div>

//       <p>or login with email</p>

//       <Formik
//         initialValues={{ email: "", password: "" }}
//         validationSchema={SignUpSchema}
//         onSubmit={(values, { setSubmitting }) => {
//           createUserWithEmailAndPassword(auth, values.email, values.password)
//             .then(() => {
//               setSubmitting(false);
//               navigate("/personinfo");
//             })
//             .catch((error) => {
//               console.error(error);
//               setSubmitting(false);
//             });
//         }}
//       >
//         {({ isSubmitting, errors, touched }) => (
//           <Form>
//             <div className="input-wrapper">
//               <div className="input-container">
//                 <Field
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   className={errors.email && touched.email ? "error" : ""}
//                 />
//                 <label>Email</label>
//                 <ErrorMessage
//                   name="email"
//                   component="div"
//                   className="error-message"
//                 />
//               </div>
//               <div className="input-container">
//                 <div className="password-input-wrapper">
//                   <Field
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     placeholder="Password"
//                     className={
//                       errors.password && touched.password ? "error" : ""
//                     }
//                   />
//                   <label>Password</label>
//                   <FontAwesomeIcon
//                     icon={showPassword ? faEyeSlash : faEye}
//                     onClick={togglePasswordVisibility}
//                     className="password-toggle-icon"
//                   />
//                 </div>
//                 <ErrorMessage
//                   name="password"
//                   component="div"
//                   className="error-message"
//                 />
//                 <p className="length-para">8+ characters</p>
//               </div>
//               <button type="submit" disabled={isSubmitting}>
//                 Create account
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//       <div className="checkbox-container">
//         <input type="checkbox" className="myCheckbox" />
//         <p className="p-checkbox">Remember me</p>
//       </div>

//       <div className="Terms-Div"></div>
//     </div>
//   );
// };

// export default SignUp;
