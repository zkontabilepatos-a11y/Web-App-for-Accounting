import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationMenu from "./components/NavigationMenu";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const App: FC = () => {
  return (
    <BrowserRouter>
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
