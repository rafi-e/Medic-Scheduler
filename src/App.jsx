import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Details from "./pages/Details";
import ContactUs from "./pages/ContactUs";
import Search from "./pages/Search";
import Booking from "./pages/Booking";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import Blogs from "./pages/Blogs";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="my-booking" element={user ? <Booking /> : <Login />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route
            path="details/:doctorId"
            element={user ? <Details /> : <Login />}
          />
          <Route path="search/:categoriesName" element={<Search />} />
          <Route path="sign-in" element={<Login />} />
          <Route path="sign-up" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
