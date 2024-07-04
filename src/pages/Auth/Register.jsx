import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../components/shadcn/ui/button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          name: name,
          photo: "",
        });
      }
      toast.success("User Registered Successfully!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
      });
      navigate("/sign-in");
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
      });
      return;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-5 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your first account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto w-3/4 sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary/50 focus:border-primary/50 focus:z-10 sm:text-sm"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary/50 focus:border-primary/50 focus:z-10 sm:text-sm"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary/50 focus:border-primary/50 focus:z-10 sm:text-sm"
                    placeholder="Enter your password"
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 z-20"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <Eye className="fas fa-eye-slash text-gray-400" />
                    ) : (
                      <EyeOff className="fas fa-eye-slash text-gray-400" />
                    )}
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="relative mt-1">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary/50 focus:border-primary/50 focus:z-10 sm:text-sm"
                    placeholder="Confirm your password"
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 z-20"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <Eye className="fas fa-eye-slash text-gray-400" />
                    ) : (
                      <EyeOff className="fas fa-eye-slash text-gray-400" />
                    )}
                  </span>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium shadow-md rounded-md text-white bg-primary/70 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
        <p className="mt-5 text-center text-sm text-gray-600 max-w">
          Already have an account?{" "}
          <Link to="/sign-in">
            <span className="font-medium text-blue-600 hover:text-blue-500 hover:underline">
              click here
            </span>
          </Link>
        </p>
        <ToastContainer />
      </div>
    </>
  );
}
