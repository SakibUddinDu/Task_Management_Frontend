import axios from "axios";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginGif from "../assets/image/login-security.gif";
import GoogleLoginBtn from "../components/shared/auth/GoogleLoginBtn";
import GithubLoginBtn from "./../components/shared/auth/GithubLoginBtn";
import { useForm } from "react-hook-form";

import { auth } from "../firebase/firebase.config";

function Register() {
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async(formData) => {
    console.log(formData);
    console.log(formData.password,formData.confirmPassWord )
    if (formData.password !== formData.confirmPassWord) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const userData = await createUserWithEmailAndPassword(
        formData.email,
        formData.password
      );
      console.log(userData)
      // if (userData?.user?.email) {
      //   const userInfo = {
      //     email: userData?.user?.email,
      //     name: formData.name,
      //   };
      //   //todo : mongodb userData is not creATED
      //   const response = await axios.post(
      //     "https://bookshop-backend-x3im.onrender.com/user",
      //     userInfo,
      //     {
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     }
      //   );
      // }
      if (auth.currentUser) {
        toast.success("You are logged in successfully");
        navigate(from, { replace: true } || "/");
      }
    } catch (err) {
      console.error("Error creating user:", err); // Log the error for debugging
      toast.error("Error creating user: " + err.message); // Ensure the message is a string
    }
  };
  

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter Your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: true })}
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                {...register("confirmPassWord", { required: true })}
                placeholder="Confirm password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                type="submit"
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
            {error && <p className="text-red-500">{error.message}</p>}
            <p>
              Already have an account?<Link to="/login"> Login</Link>
            </p>
          </form>
          <div className="mt-5">
            <GoogleLoginBtn />
          </div>

          <div className="mt-5">
            <GithubLoginBtn />
          </div>
        </div>
        <div className="text-center lg:text-left">
          <img src={loginGif} alt="Login Security" />
        </div>
      </div>
    </div>
  );
}

export default Register;

// import React, { useEffect, useState } from "react";
// import { useForm, useWatch } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { FaChevronLeft } from "react-icons/fa";

// function Register() {
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();
//     const onSubmit = userData => console.log(userData);

//     const businessCategory = [
//         "Automotive",
//         "Business Support & Supplies",
//         "Computers & Electronics",
//         "Construction & Contractors",
//         "Design Agency",
//         "Education",
//         "Entertainment",
//         "Food & Dining",
//         "Health & Medicine",
//         "Home & Garden",
//         "IT Farm",
//         "Legal & Financial",
//         "Manufacturing, Wholesale, Distribution",
//         "Merchants (Retail)",
//         "Miscellaneous",
//         "Personal Care & Services",
//         "Real Estate",
//         "Travel & Transportation",
//       ];

//       const employeeRange = ["1 - 10", "11 - 50", "51 - 100", "Above 100"];

//     // const handleSubmit=()=>{
//     //     console.log("first")
//     // }
//     return (
//         <div className='pt-14'>
//       <div
//         onClick={() => navigate("/register")}
//         className='cursor-pointer w-fit mt-5 flex items-center'
//       >
//         <FaChevronLeft />
//         <p>back</p>
//       </div>
//       <div className='flex justify-center items-center overflow-auto p-10'>
//         <form
//           className='bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between'
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <h1 className='w-full text-2xl text-primary mb-5'>Candidate</h1>
//           <div className='flex flex-col w-full max-w-xs'>
//             <label className='mb-2' htmlhtmlFor='firstName'>
//               First Name
//             </label>
//             <input type='text' id='firstName' {...register("firstName")} />
//           </div>
//           <div className='flex flex-col w-full max-w-xs'>
//             <label className='mb-2' htmlhtmlFor='lastName'>
//               Last Name
//             </label>
//             <input type='text' id='lastName' {...register("lastName")} />
//           </div>
//           <div className='flex flex-col w-full max-w-xs'>
//             <label className='mb-2' htmlhtmlFor='email'>
//               Email
//             </label>
//             <input type='email' id='email' disabled {...register("email")} />
//           </div>
//           <div className='flex flex-col w-full max-w-xs'>
//             <h1 className='mb-3'>Gender</h1>
//             <div className='flex gap-3'>
//               <div>
//                 <input
//                   type='radio'
//                   id='male'
//                   {...register("gender")}
//                    />
//                 <label className='ml-2 text-lg' htmlFor='male'>
//                   Male
//                 </label>
//               </div>
//               <div>
//                 <input
//                   type='radio'
//                   id='female'
//                   {...register("gender")}
//                      />
//                 <label className='ml-2 text-lg' htmlFor='female'>
//                   Female
//                 </label>
//               </div>
//               <div>
//                 <input
//                   type='radio'
//                   id='other'
//                   {...register("gender")}
//                     />
//                 <label className='ml-2 text-lg' htmlFor='other'>
//                   Other
//                 </label>
//               </div>
//             </div>
//           </div>
//           <hr className='w-full mt-2 bg-black' />
//           <div className='flex flex-col w-full max-w-xs'>
//             <label className='mb-2' htmlhtmlFor='companyName'>
//               Company's name
//             </label>
//             <input type='text' {...register("companyName")} id='companyName' />
//           </div>
//           <div className='flex flex-col w-full max-w-xs'>
//             <label className='mb-3' htmlFor='employeeRange'>
//               Number of employee
//             </label>
//             <select {...register("employeeRange")} id='employeeRange'>
//               {employeeRange
//                 .sort((a, b) => a.localeCompare(b))
//                 .map((category) => (
//                   <option tion>
//                 ))}
//             </select>
//           </div>

//           <div className='flex flex-col w-full max-w-xs'>
//             <label className='mb-3' htmlFor='companyCategory'>
//               Company's Category
//             </label>
//             <select {...register("companyCategory")} id='companyCategory'>
//               {businessCategory
//                 .sort((a, b) => a.localeCompare(b))
//                 .map((category) => (
//                   <option tion>
//                 ))}
//             </select>
//           </div>
//           <div className='flex flex-col w-full max-w-xs'>
//             <label className='mb-2' htmlhtmlFor='roleInCompany'>
//               Your role in company
//             </label>
//             <input
//               type='text'
//               {...register("roleInCompany")}
//               id='roleInCompany'
//             />
//           </div>

//           <div className='flex justify-between items-center w-full mt-3'>
//             <div className='flex  w-full max-w-xs'>
//               <input
//                 className='mr-3'
//                 type='checkbox'
//                 {...register("term")}
//                 id='terms'
//               />
//               <label htmlFor='terms'>I agree to terms and conditions</label>
//             </div>
//             <button className='btn' type='submit'>
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//     )
// }

// export default Register
