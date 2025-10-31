import React, { useState } from "react";
import eyeOpen from "../assets/eye.png";
import eyeClosed from "../assets/eye-slash.png";

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-container">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        className="password-field"
      />
      <img
        src={showPassword ? eyeClosed : eyeOpen}
        alt="toggle password visibility"
        className="password-eye"
        onClick={() => setShowPassword(!showPassword)}
      />
    </div>
  );
}

export default PasswordInput;
