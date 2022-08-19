import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";


const Contact = () => {
    return (
      <div className="w-full h-[300px] bg__4b mb-10">
        <div className="container__wide h-full grid grid-cols-2">
          <div className="col-span-1 my-auto">
            <label htmlFor="email" className="text__label text-white">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form__input w-[400px]"
              placeholder="Enter Your Email "
            />
            <div className="my-6">
              <button className="btn btn__secondary">Submit</button>
            </div>
          </div>
          <div className="col-span-1 my-auto text-center">
            <h4 className="text-white font-semibold">Contact with Social</h4>
            <div className="flex justify-center items-center form__group w-full text-2xl">
              <i className="signin__icon hover:icon__hover text-white">
                <FaFacebookF className="m-auto translate-y-[50%]" />
              </i>
              <i className="signin__icon hover:icon__hover text-white">
                <FaGoogle className="m-auto translate-y-[50%]" />
              </i>
              <i className="signin__icon hover:icon__hover text-white">
                <FaGithub className="m-auto translate-y-[50%]" />
              </i>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact;
