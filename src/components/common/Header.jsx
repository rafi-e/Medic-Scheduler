import { Link, useNavigate } from "react-router-dom";
import Logo from "/logo-nav.png";
import { Button } from "../shadcn/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../shadcn/ui/popover";
import { MenuIcon, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Blogs",
      path: "/blogs",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contact",
    },
  ];

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user);

        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("User is not logged in");
        }
      } else {
        setUserDetails(null);
        console.log("User is not logged in");
      }
    });
  };

  async function handleLogout() {
    try {
      await auth.signOut();
      setUserDetails(null);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <nav className="sticky top-0 flex items-center justify-between p-4 bg-white z-30 shadow-md">
        <div className="flex items-center gap-10">
          <Link to="/">
            <img src={Logo} alt="Logo" width={180}  />
          </Link>
          <ul className="md:flex gap-8 hidden">
            {Menu.map((item) => (
              <Link to={item.path} key={item.id}>
                <li className="hover:text-[#0D7DFF] font-semibold cursor-pointer hover:scale-105 transition-all ease-in-out">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-2 mr-5">
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 bg-gray-50 hover:bg-gray-200 rounded-full text-primary"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <X /> : <MenuIcon />}
          </button>
          {userDetails ? (
            <Popover>
              <PopoverTrigger>
                <div className="relative h-10 w-10 flex justify-center items-center rounded-full border-2 border-gray-300 ">
                  {userDetails.photo ? (
                    <img
                      src={userDetails.photo}
                      alt="User Image"
                      className="h-full rounded-3xl w-full object-cover object-top"
                    />
                  ) : (
                    <User className="w-8 h-8 text-gray-500 object-cover" />
                  )}
                </div>
              </PopoverTrigger>
              <PopoverContent className="mx-5">
                <ul className="flex flex-col gap-2">
                  <Link
                    to="/my-booking"
                    className="cursor-pointer hover:bg-slate-100 p-2 rounded-md"
                  >
                    My Booking
                  </Link>
                  <li
                    onClick={handleLogout}
                    className="cursor-pointer hover:bg-slate-100 p-2 rounded-md"
                  >
                    <div className="text-red-500"> Logout </div>
                  </li>
                </ul>
              </PopoverContent>
            </Popover>
          ) : (
            <Link to="/sign-in">
              <Button>Get Started</Button>
            </Link>
          )}
        </div>
        {showMenu && (
          <ul
            onClick={() => setShowMenu(!showMenu)}
            className="flex flex-col h-screen justify-center items-center gap-10 absolute top-0 right-0 px-10 py-10 w-full bg-white/80 text-primary z-50"
          >
            {Menu.map((item) => (
              <Link to={item.path} key={item.id}>
                <li className="hover:text-[#0D7DFF] text-2xl font-semibold cursor-pointer hover:scale-105 transition-all ease-in-out">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}
