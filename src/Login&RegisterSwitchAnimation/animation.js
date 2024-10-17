import React from "react";

const AuthToggle = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[300px] h-[60px] bg-[#D8E9F8] rounded-full">
        <div className="flex justify-between items-center mt-1">
          <div className=" w-[50%] h-[50px] rounded-full flex justify-center items-center">
            <div>
              <p>Login</p>
            </div>
          </div>
          <div className=" w-[50%] h-[50px] rounded-full flex justify-center items-center">
            <div>
              <p>Signup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthToggle;
