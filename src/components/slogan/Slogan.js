import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";



const Slogan = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const localUserName = JSON.parse(localStorage.getItem('userName'))
    setUserName(localUserName);
  }, []);
  const handleClick = () =>{
    localStorage.removeItem("userName");
    window.location.reload();
  }
  return (
    <div
      id="header__menu"
      className="lg:w-8/12 md:header__menu sm:header__menu "
    >
      <div className="text-lg text-black sm:px-2 sm:text-center md:text-center sm:block sm:container__wide  md:container__wide md:block lg:flex__end ">
        <li className="list-none lg:ml-8 md:py-2 sm:py-2 sm:ml-0 cursor-pointer hover:text-grad-pur  ">
          <Link to="/">Home</Link>
        </li>
        <li className="list-none lg:ml-8 md:py-2 sm:py-2 sm:w-full sm:ml-0 cursor-pointer hover:text-grad-pur">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="list-none lg:ml-8 md:py-2 sm:py-2 sm:w-full sm:ml-0 cursor-pointer hover:text-grad-pur">
          <Link to="/about">About</Link>
        </li>
        <li className="list-none lg:ml-8 md:py-2 sm:py-2 sm:w-full sm:ml-0 cursor-pointer hover:text-grad-pur">
          <Link to="/contact">Contact</Link>
        </li>
        <button className="lg:ml-6 md:py-2 sm:py-2 sm:w-full sm:ml-0 cursor-pointer">
          {!userName ? (
            <div className="flex">
              <Link to="/signin" className="btn btn__primary ">
                Sign In
              </Link>
              <Link to="/signup" className="btn btn__secondary">
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex">
              <li className="list-none md:py-2 sm:py-2 sm:w-full sm:ml-0 hover:text-grad-pur ">
                <Link to="/">{userName}</Link>
              </li>
              <li className="list-none lg:ml-6 md:py-2 sm:py-2 sm:w-full sm:ml-0 hover:text-grad-pur">
                <p onClick={handleClick}>Log Out</p>
              </li>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Slogan;
