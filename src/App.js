import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "./pages/Home/AddEmployee";
import { DataProvider } from "./data/DataContext";
import SummaryList from "./pages/SummaryList";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Header />
        <Routes>
          <Route path="/" element={<AddEmployee />} />
          <Route path="/User-List" element={<SummaryList />} />
          <Route />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
