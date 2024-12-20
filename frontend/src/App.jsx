import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import MyAppointments from "./Pages/MyAppointments";
import Login from "./Pages/Login";
import Doctors from "./Pages/Doctors";
import Contact from "./Pages/Contact";
import MyProfile from "./Pages/MyProfile";
import Appointment from "./Pages/Appointment";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="mx-4 sm:mx-[10]">
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="about" element={<About />} />
          <Route path="myAppointment" element={<MyAppointments />} />
          <Route path="Login" element={<Login />} />
          <Route path="doctors/:speciallity" element={<Doctors />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="appointment/:docId" element={<Appointment />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
