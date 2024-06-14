import { useForm } from "react-hook-form";
import logo from "../assets/image/logo.png";
import GithubLoginBtn from "../components/shared/auth/GithubLoginBtn";
import GoogleLoginBtn from "../components/shared/auth/GoogleLoginBtn";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "sakibuddin832@gmail.com",
      password: "123456",
    },
  });

  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = async (data) => {
    try {
      const user = await signInWithEmailAndPassword(data.email, data.password);
      console.log(user);
    } catch (err) {
      toast.error("Error logging in: " + err.message);
    }
  };

  useEffect(() => {
    if (user) {
      toast.success("You are logged in successfully!");
      navigate(from, { replace: true } || "/");
    }
  }, [user, navigate]);

  return (
    <div className="grid place-items-center bg-[#F9FAFB">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src={logo} alt="Tasker" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* <input type="hidden" name="remember" value="true" /> */}
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  // id="email-address"
                  // name="email"
                  // type="email"
                  // autoComplete="email"
                  {...register("email", { required: true })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                 {errors.email && <span>This field is required</span>}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  // id="password"
                  // name="password"
                  // type="password"
                  {...register("password", { required: true })}
                  autoComplete="current-password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                 {errors.password && <span>This field is required</span>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <GoogleLoginBtn />
          <GithubLoginBtn />
        </div>
      </div>
    </div>
  );
}

export default Login;
