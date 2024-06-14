import axios from "axios";
import { useSignInWithGithub } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "./../../../firebase/firebase.config";

function GithubLoginBtn() {
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleGithubLogin = async () => {
    try {
      const data = await signInWithGithub();

      console.log(data)
      if (data?.user?.photoURL) {
        const userInfo = {
          photoURL: data?.user?.photoURL,
          name: data?.user?.displayName,
        };
        const response = await axios.post(
          "https://bookshop-backend-x3im.onrender.com/user",
          userInfo,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

      }
    } catch (error) {
      toast.error("Login failed: " + error.message);
    }
    if (auth.currentUser) {
      toast.success("You logged in successfully");
      navigate(from, { replace: true } || "/");
    }
  };

  return (
    <div className="flex justify-center">
      <button
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        onClick={() => handleGithubLogin()}
      >
        <FaGithub className="h-5" />
        Login
      </button>
    </div>
  );
}

export default GithubLoginBtn;
