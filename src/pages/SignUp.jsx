import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpUI from "../components/SignUpUI";

const SignUp = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (input) => {
    setUser({ ...user, [input.target.name]: input.target.value });
  };

  const handleSubmit = (input) => {
    input.preventDefault();
    localStorage.setItem("user", JSON.stringify(user)); // Save user locally
    alert("Signup Successful!");
    navigate("/dashboard"); // Redirect to login page
  };

  return <SignUpUI handleSubmit={handleSubmit} handleChange={handleChange} />;
    // return <h1>signup page</h1>
};

export default SignUp;
