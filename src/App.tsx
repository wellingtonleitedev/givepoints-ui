import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Callback from "./pages/Callback";
import "./App.css";

const App = () => (
  <main className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/callback/:provider" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  </main>
);

export default App;
