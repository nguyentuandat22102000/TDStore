import React, { useState ,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import loginImage from "../asset/image/login_img.jpg";
import Header from '../components/Nav/Header';


const SignUp = () => {
  let navigate = useNavigate()
  let isEmpty;
  const [dbUser, setdbUser] = useState([]);
  const dataUser = "http://localhost:3001/user";
  useEffect(() => {
    fetch(dataUser)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setdbUser(data);
      });
  }, []);
  const checkUser = (dataUser) => {   
      isEmpty = dbUser.every((input) => {
          console.log(input.userName);
          return dataUser.userName !== input.userName;  // Every kiểm tra theo điều kiện nếu sai sẽ dừng lại
      });
  };
  const addUser = (infoUser) =>{
    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(infoUser),
    };
    fetch(dataUser,options)
    }
  const formik = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      password: "",
      confirmPW: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required("Please Input Your FullName !!!")
        .min(6, "Must Be 6 Characters or More !!!"),
      userName: Yup.string()
        .required("Please Input Your UserName !!!")
        .matches(
          /^[a-z][a-z0-9_]{4,20}$/gi,
          "Please Input Valid Your UserName!!!"
        )
        ,
      password: Yup.string()
        .required("Please Input Your Password !!!")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gi,
          "Please Input Valid Your Password !!!"
        ),
      confirmPW: Yup.string()
        .required("Please Input Confirm Password !!!")
        .oneOf([Yup.ref("password"),null],"Please Input Valid Your Confirm Password !!!"),
      
    }),
    onSubmit: (values) => {
      const dataValues = {
        fullName: values.fullName,
        userName: values.userName.toLowerCase(),
        password: values.password,
      };
      checkUser(dataValues)
      if(isEmpty){
        addUser(dataValues)
        navigate("/signin");
      }else{
        alert('UserName already is used')
      }
    },
  });
    return (
      <div className="grid grid-cols-1 h-screen w-full">
        <Header />
        <div className="relative">
          <img className="w-full h-full object-cover" src={loginImage} alt="" />
        </div>
        <div className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] w-[400px] sm:w-[100%] sm:px-4">
          <form
            method="POST"
            onSubmit={formik.handleSubmit}
            className="
            bg-gray-500 flex flex-col p-4 h-full opacity-90 rounded-3xl
              text-white  
            "
          >
            <div className="py-4 text-center font-semibold	">
              <h4>Sign In</h4>
            </div>
            <div className="form__group">
              <label htmlFor="fullName" className="text__label">
                Full Name{" "}
              </label>
              <input
                value={formik.values.fullName}
                onChange={formik.handleChange}
                className="form__input"
                type="text"
                id="fullName"
                placeholder="Enter Full Name ..."
                autoComplete="userName"
              />
              {formik.errors.fullName && (
                <p className="msg__signup">{formik.errors.fullName}</p>
              )}
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
                placeholder="Enter PassWord ..."
                autoComplete="userName"
              />
              {formik.errors.password && (
                <p className="msg__signup">{formik.errors.password}</p>
              )}
            </div>
            <div className="form__group">
              <label htmlFor="confirmPW" className="text__label">
                PassWord
              </label>
              <input
                value={formik.values.confirmPW}
                onChange={formik.handleChange}
                className="form__input"
                type="password"
                id="confirmPW"
                placeholder="Enter Confirm PassWord ..."
                autoComplete="userName"
              />
              {formik.errors.confirmPW && (
                <p className="msg__signup">{formik.errors.confirmPW}</p>
              )}
            </div>
            <div className="form__group grid grid-cols-2 text-lg pt-2">
              <button
                className="btn btn__primary m-0 float-right col-span-2 "
                type="submit"
              >
                Sign Up
              </button>
              <div className="col-span-2 mt-6 text-center">
                <span>
                  Are you a member !!!
                  <Link className="text-blue-400 hover:underline" to="/signin">
                    {" "}
                    Sign In
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}

export default SignUp;
