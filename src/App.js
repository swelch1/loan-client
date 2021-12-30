import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import CreateLoan from "./components/CreateLoan";
import FindLoan from "./components/FindLoan";
import UpdateLoan from "./components/UpdateLoan";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<CreateLoan />} />
          <Route path='/create' element={<CreateLoan />} />
          <Route path='/details' element={<FindLoan />} />
          <Route path='/update' element={<UpdateLoan />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
