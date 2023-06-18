import React from "react";
import Welcomepage from "./components/WelcomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Table } from "./components/Table";
//import BasicTable from "./components/BasicTable";
//import BasicTextFields from "./components/BasicTextFields";
import Home from "./components/Home";
import BasicTable from "./components/BasicTable";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/Update";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcomepage />} />
        <Route path="/Table" element={<Table />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/BasicTable" element={<BasicTable />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/Update/:id" element={<UpdateUser/>} />
        
      </Routes>
    </BrowserRouter>
  );
};
export default App;