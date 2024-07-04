// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   FacebookAuthProvider,
// } from "firebase/auth";

// // Add this inside your SignUp component
// export const handleSocialSignUp = (provider) => {
//   const auth = getAuth();
//   let selectedProvider;

//   if (provider === "Google") {
//     selectedProvider = new GoogleAuthProvider();
//   } else if (provider === "Facebook") {
//     selectedProvider = new FacebookAuthProvider();
//   }

//   signInWithPopup(auth, selectedProvider)
//     .then((result) => {
//       // This gives you a Google/Facebook Access Token.
//       // You can use it to access the Google/Facebook API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       console.log("User signed in: ", user);
//       navigate("/dashboard");
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("Error: ", errorCode, errorMessage);
//     });
// };

