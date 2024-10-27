// AuthContainer.jsx
import { useState } from "react";
import Login from "./Login";
import Signup from "./Register";

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchToSignup = () => {
    setIsLogin(false);
  };

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl h-[600px] relative flex items-center justify-center bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left Container - Signup */}
        <div
          className={`absolute w-[40%] h-[90%] transition-all duration-500 ease-in-out 
            ${isLogin ? "left-0 translate-x-0" : "left-[60%] translate-x-0"}`}
        >
          <div className="w-full h-full bg-slate-100 shadow-2xl rounded-lg flex items-center justify-center p-5 md:p-0">
            <div
              className={`transition-all duration-500 ${
                isLogin ? "opacity-100" : "opacity-0"
              }`}
            >
              <Signup onSwitchToLogin={handleSwitchToLogin} />
            </div>
          </div>
        </div>

        {/* Right Container - Login */}
        <div
          className={`absolute w-[40%] h-[90%] transition-all duration-500 ease-in-out
            ${isLogin ? "right-0 translate-x-0" : "right-[60%] translate-x-0"}`}
        >
          <div className="w-full h-full bg-slate-100 shadow-2xl rounded-lg flex items-center justify-center p-5 md:p-0">
            <div
              className={`transition-all duration-500 ${
                isLogin ? "opacity-0" : "opacity-100"
              }`}
            >
              <Login onSwitchToSignup={handleSwitchToSignup} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
