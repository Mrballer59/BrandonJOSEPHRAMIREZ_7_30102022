import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "./pages/Home/AddEmployee";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AddEmployee />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
