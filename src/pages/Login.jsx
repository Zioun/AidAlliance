import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
const Login = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const { signIn, signInWithGoogle, signInWithGithub, user, loading } = useContext(AuthContext);
  useEffect(()=>{
    if(user){
      navigate('/')
    }
  },[navigate, user])
  // google singIng
  const handleGoogleSingIn = async () => {
    try {
      const result = await signInWithGoogle();
      //start jwt
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,{email:result?.user?.email},{withCredentials: true});
      console.log(data)
      //end jwt
      toast.success("Signin Successfully");
      navigate(location.state ? location.state : "/")
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  // github singIng
  const handleGithubSingIn = async () => {
    try {
      const result = await signInWithGithub();
      //start jwt
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,{email:result?.user?.email},{withCredentials: true});
      console.log(data)
      //end jwt
      toast.success("Signin Successfully");
      navigate(location.state ? location.state : "/")
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  //email password signIn
  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    console.log({ email, pass });
    if(email === ''|| pass === ''){
      return toast.error('Input must not be empty');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return toast.error("Email address is not valid!");
    } else if (!(pass.match(/[a-z]/) && pass.match(/[A-Z]/))) {
      return toast.error("Password must contain at least one uppercase letter and one lowercase letter");
    } else if(pass.length < 6){
      return toast.error('Password length must be at least 6 characters');
    }
    try {
      //User Login

      //start jwt
      const result = await signIn(email, pass);
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,{email:result?.user?.email},{withCredentials: true});
      console.log(data)
      //end jwt

      console.log(result);
      navigate(location.state ? location.state : "/")
      toast.success("Signin Successfully");
    } catch (err) {
      console.log(err);
      toast.error("email or password is incorrect");
    }
  };

  if(user) return
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)]">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl border">
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{
            backgroundImage: `url(https://i.ibb.co/3fK1k6M/New-Project-16.jpg)`,
          }}
        ></div>
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://i.ibb.co/PmpGsm2/360-F-272398712-z28-EMWLb-M9-Y8zojg51t-LZo4-D8-Ju3-R7-EG-1.jpg"
              alt=""
            />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 ">
            Welcome back!
          </p>

          <div className="">
            <div
              onClick={handleGoogleSingIn}
              className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
            >
              <div className="px-4 py-2">
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>

              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign in with Google
              </span>
            </div>
            <div
              onClick={handleGithubSingIn}
              className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
            >
              <div className="px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="h-6 w-6"
                  viewBox="0 0 64 64"
                >
                  <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                </svg>
              </div>

              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign in with GitHub
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  lg:w-1/4"></span>

            <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
              or login with email
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <form onSubmit={handleSignIn}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                autoComplete="current-password"
                name="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <Link
              to="/register"
              className="text-xs text-gray-500 uppercase  hover:underline"
            >
              or sign up
            </Link>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
