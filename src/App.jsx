import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
// import CreatePipeline from "./pages/CreatePipeline";

function App() {
  return (
    <div>
   
    {/* <h1>hello</h1> */}
   
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
   
    </div>
  );
}

export default App;
