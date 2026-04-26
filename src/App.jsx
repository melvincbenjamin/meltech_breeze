// App.jsx
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // make sure this file exists
import NotFound from "./pages/NotFound"; // import your NotFound component
import { Toaster } from "react-hot-toast";
import Success from "./pages/Success";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home count={count} setCount={setCount} />} />
          <Route path="*" element={<NotFound />} /> 
           <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
