import React,{useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import loginImage from '../asset/image/login_img.jpg';
import Social from '../components/Socials/Social.js';
import Header from '../components/Nav/Header';


const SignIn = () => {
    let itemUser;
    const navigate = useNavigate();
    const [dbUser, setdbUser] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3001/user")
        .then(res =>{
          return res.json();
        })
        .then(data =>{
          setdbUser(data);
        })
    }, []);
    const checkUserName = (dataUser)=>{
      // Find kiểm tra nếu có sẽ trả về true
      itemUser = dbUser.find((input) => {
          return input.userName === dataUser.userName; 
      });
    }
    const checkUserPassWord = (dataUser) =>{
        checkUserName(dataUser);
        if(itemUser){
          if(itemUser.password === dataUser.password){
            localStorage.setItem('userName',JSON.stringify(dataUser.userName))
            navigate('/')
          }else{
            alert('PassWord is not already !!!')
          }
        }else{
          alert('User Name is not already !!!')
        }
    }
    const formik = useFormik({
      initialValues: {
        userName: "",
        password: "",
      },
      validationSchema: Yup.object({
        userName: Yup.string()
          .required("Please Input Your UserName !!!"),
        password: Yup.string()
          .required("Please Input Your PassWord !!!"),
      }),
      onSubmit: (values) => {
        checkUserPassWord(values)
        },
    });
    return (
      <div className="grid grid-cols-1 h-screen w-full">
        <Header />
        <div className="relative">
          <img className="w-full h-full object-cover" src={loginImage} alt="" />
        </div>
        <div className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] w-[400px] h-[500px] sm:w-[100%] sm:px-4">
          <form
            onSubmit={formik.handleSubmit}
            action="#"
            className="
            bg-gray-500 flex flex-col p-4 h-full opacity-90 rounded-3xl
              text-white  
            "
          >
            <div className="py-4 text-center font-semibold	">
              <h4>Sign In</h4>
            </div>
            <div className="form__group">
              <label htmlFor="userName" className="text__label">
                User Name{" "}
              </label>
              <input
                value={formik.values.userName}
                onChange={formik.handleChange}
                className="form__input"
                type="text"
                id="userName"
                name="userName"
                placeholder="Enter User Name ..."
                autoComplete="userName"
              />
              {formik.errors.userName && (
                <p className="msg__signup">{formik.errors.userName}</p>
              )}
            </div>
            <div className="form__group">
              <label htmlFor="password" className="text__label">
                PassWord
              </label>
              <input
                value={formik.values.password}
                onChange={formik.handleChange}
                className="form__input"
                type="password"
                id="password"
                name="password"
                placeholder="Enter PassWord ..."
                autoComplete="current-password"
              />
              {formik.errors.password && (
                <p className="msg__signup">{formik.errors.password}</p>
              )}
            </div>
            <div className="form__group grid grid-cols-2 text-lg pt-2">
              <button
                className="btn btn__primary m-0 float-right col-span-2"
                type="submit"
              >
                Sign In
              </button>
              <div className="col-span-2 mt-6 text-center">
                <span>
                  Not a member !!!
                  <Link className="text-blue-400 hover:underline" to="/signup">
                    {" "}
                    Sign Up
                  </Link>
                </span>
              </div>
            </div>
            <Social />
          </form>
        </div>
      </div>
    );
}

export default SignIn;
