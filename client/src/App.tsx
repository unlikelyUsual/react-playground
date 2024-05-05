import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/Signup";
import Countdown from "./pages/counter/Countdown";
import Counter from "./pages/counter/Counter";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
