import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

const Social = () => {
    return (
        <div className="flex justify-center items-center form__group w-full text-2xl">
          <i className="signin__icon hover:icon__hover">
            <FaFacebookF className="m-auto translate-y-[50%]" />
          </i>
          <i className="signin__icon hover:icon__hover">
            <FaGoogle className="m-auto translate-y-[50%]" />
          </i>
          <i className="signin__icon hover:icon__hover">
            <FaGithub className="m-auto translate-y-[50%]" />
          </i>
        </div>
    );
}

export default Social;
