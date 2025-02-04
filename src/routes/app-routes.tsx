import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import About from "../components/about/about";
import Transactions from "../components/transactions/Transactions";
import DepartmentList from "../components/redux/departmentList";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/departments" element={<DepartmentList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;