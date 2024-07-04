Here's a README file for my project:

---

# User Authentication Project

This project is a web application that includes a signup page, login page, and dashboard. The application uses Firebase for authentication and is deployed on Vercel.

## Project Links

- [Project Link 1](https://dashboard-user-auth-q6o308ztn-henry-s-projects-59f57949.vercel.app)
- [Project Link 2](https://dashboard-user-auth.vercel.app)

## Technologies Used

- **Frontend:** React, Tailwind CSS
- **Backend:** Firebase Authentication
- **Deployment:** Vercel

## Features

1. **Signup Page:** Allows new users to create an account using their email and password and other details.
2. **Login Page:** Allows existing users to log in using their email and password.
3. **Dashboard:** A protected route that can only be accessed by authenticated users.

## Getting Started

### Prerequisites

- Node.js
- npm 
- Firebase account

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Henrypio/Dashboard-User-Auth
   cd Dashboard-User-Auth
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up Firebase:

   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project.
   - Enable Email/Password authentication in the Authentication section.
   - Get your Firebase config object from the project settings and add it to your project.

4. Create a `firebase.js` file in the root of your project and add your Firebase configuration:

   ```sh
 import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNMLcT3xdmPyuU17kKfI3QIeZzzkOeC4U",
  authDomain: "dashboard-user-auth.firebaseapp.com",
  projectId: "dashboard-user-auth",
  storageBucket: "dashboard-user-auth.appspot.com",
  messagingSenderId: "451539326664",
  appId: "1:451539326664:web:47877404f4d74e2855f7fd",
  measurementId: "G-FBY7M4HN2K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

};
   ```

### Running the Application

1. Start the development server:

   ```sh
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`.

### Deployment

This project is deployed on Vercel. Follow these steps to deploy your own version:

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/).
3. Create a new project and import your GitHub repository.
4. Set up your environment variables in the Vercel project settings.
5. Deploy the project.

## Usage

### Signup

- Navigate to the signup page.
- Enter your email and password.
- Fill other required details
- You will be redirected to the login page

### Login

- Navigate to the login page.
- Enter your email and password.
- Click the "Login" button.

### Dashboard

- After logging in, you will be redirected to the dashboard.
- The dashboard is a protected route and can only be accessed by authenticated users.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
