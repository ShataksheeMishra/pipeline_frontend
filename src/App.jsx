import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
   
    {/* <h1>hello</h1> */}
   
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
   
    </div>
  );
}

export default App;
