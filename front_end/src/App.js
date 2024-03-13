import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { WorkoutsContextProvider } from "./context/WorkoutsContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <WorkoutsContextProvider>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </WorkoutsContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
