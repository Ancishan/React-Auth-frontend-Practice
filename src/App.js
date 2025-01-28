import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Registration from "./pages/auth/Registration";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";





function App() {
  return (
    <>
  <Layout></Layout>
    <Routes>
      <Route path="/register" element={<Registration></Registration> }></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard> }></Route>
    </Routes>
    </>
  )
}

export default App;
