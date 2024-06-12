import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const form = location.state || '/';
  const {createUser, updateUserProfile, user, setUser, loading} = useContext(AuthContext);
  useEffect(()=>{
    if(user){
      navigate('/')
    }
  },[navigate, user])

  //signUp or register
  const handleSignUp = async e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const pass = form.password.value;
    console.log({email, pass, name, photo})
    if(email === '' || name === '' || photo === '' || pass === ''){
      return toast.error('Input must not be empty');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return toast.error("Email address is not valid!");
    } else if (!(pass.match(/[a-z]/) && pass.match(/[A-Z]/))) {
      return toast.error("Password must contain at least one uppercase letter and one lowercase letter");
    } else if(pass.length < 6){
      return toast.error('Password length must be at least 6 characters');
    }
    try{
      //2. user registration
      const result = await createUser(email, pass)
      //start jwt
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,{email:result?.user?.email},{withCredentials: true});
      console.log(data)
      //end jwt
      console.log(result);
      await updateUserProfile(name, photo)
      //optimistic ui update
      setUser({...user, photoURL: photo, displayName: name})
      navigate(location.state ? location.state : "/")
      toast.success('Signup Successful')
    }catch(err){
      console.log(err)
      toast.error(err?.message)
    }
  }
  if(user) return
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-14">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl border">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://i.ibb.co/PmpGsm2/360-F-272398712-z28-EMWLb-M9-Y8zojg51t-LZo4-D8-Ju3-R7-EG-1.jpg"
              alt=""
            />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 ">
            Get Your Free Account Now.
          </p>
          <div className="flex items-center justify-between mt-4">
          </div>
          <form onSubmit={handleSignUp}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="name"
              >
                Username
              </label>
              <input
                id="name"
                autoComplete="name"
                name="name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                id="photo"
                autoComplete="photo"
                name="photo"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
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
                Sign Up
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <Link
              to="/login"
              className="text-xs text-gray-500 uppercase  hover:underline"
            >
              or sign in
            </Link>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
        </div>
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{
            backgroundImage: `url(https://i.ibb.co/7zD2YPb/New-Project-17.jpg)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Register;
