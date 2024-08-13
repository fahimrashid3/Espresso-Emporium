// import { Link } from "react-router-dom";
// import Navbar from "../../Shared/Navbar/Navbar";
import fb from "../../assets/images/icons/fb.png";
import google from "../../assets/images/icons/google.png";
import { IoArrowBack } from "react-icons/io5";
import BackgroundImg from "../../assets/images/more/11.png";

import { Link } from "react-router-dom";

// import google from "../../../src/assets/images/icons/google.png";
const SignIn = () => {
  const handelLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
  };
  return (
    <div style={{ backgroundImage: `url(${BackgroundImg})` }}>
      <div className="lg:max-w-7xl md:max-w-full md:mx-20 mx-10 lg:mx-auto lg:my-20 md:my-16 my-10">
        <Link to="/">
          <button
            className="
    flex items-center gap-2 lg:mt-20 md:mt-16 mt-12 font-rancho lg:font-bold md:font-semibold lg:text-3xl md:text-2xl text-primary-2
    "
          >
            <IoArrowBack /> Back to home
          </button>
        </Link>
        <div className="hero ">
          <div className=" bg-primary-4 w-full shrink-0 shadow-2xl lg:max-w-[60%] rounded-[20px]">
            <form onSubmit={handelLogin} className="px-20 py-10">
              <div className="form-control">
                <h1 className="text-5xl font-bold text-center mb-10">
                  Login now!
                </h1>

                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label flex mt-3">
                  <div className="flex gap-2">
                    <input type="checkbox" name="rememberMe" id="" />
                    <p>Remember me</p>
                  </div>
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="font-rancho text-xl text-white hover:text-black bg-[#E3B577] hover:bg-transparent border px-3 py-1 hover:border-primary-5 border-[#E3B577] rounded-lg"
                >
                  Sign In
                </button>{" "}
              </div>
              <label className="form-control mt-3 gap-2">
                <p>
                  Do not have an account?
                  <Link className="text-yellow-500" to="/signUp">
                    Create an account
                  </Link>
                </p>
              </label>
            </form>
          </div>
        </div>
        <div className="mx-auto mt-10">
          <h1 className="text-center font-semibold text-xl">Or</h1>
          <div className="flex border rounded-full mt-5 lg:max-w-[20%] mx-auto items-center lg:font-bold md:font-semibold lg:text-xl text-sm">
            <img className="h-16 mx-3 my-1" src={fb} alt="" />
            <p>Continue with Facebook</p>
          </div>
          <div className="flex border rounded-full mt-5 lg:max-w-[20%] mx-auto items-center lg:font-bold md:font-semibold lg:text-xl text-sm">
            <img className="h-16 mx-3 my-1" src={google} alt="" />
            <p>Continue with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
