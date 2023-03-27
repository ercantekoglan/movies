import React from "react";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addmovie from "./components/Addmovie";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/add" element={<Addmovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
