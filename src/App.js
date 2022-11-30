import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "./pages/Home/AddEmployee";
import { DataProvider } from "./data/DataContext";
import ShowEmployee from "./pages/ShowEmployee/ShowEmployee";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Header />
        <Routes>
          <Route path="/" element={<AddEmployee />} />
          <Route path="/user-List" element={<ShowEmployee />} />
          <Route />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
