import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
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

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="my-booking"
            element={user ? <Booking /> : <Navigate to="/sign-in" />}
          />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route
            path="details/:doctorId"
            element={user ? <Details /> : <Navigate to="/sign-in" />}
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
