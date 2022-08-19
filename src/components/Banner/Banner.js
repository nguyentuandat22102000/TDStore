import React from 'react';
import Banners from '../../asset/image/banner.jpg'

const Banner = () => {
    return (
      <div className="grid">
        <div className="m-auto text-center h-[600px] flex-col relative w-full">
          <div className="h-full w-full">
            <img
              src={Banners}
              alt="Banner !!!"
              className="h-full w-full object-center"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <h1 className="text__shadow text-white">Shopping Now</h1>
            <h3 className=" mt-4 text-red-400 font-bold">Sale Of 70% All !!!</h3>
            <h4 className="mb-6 text-white">WellCome to TDstore</h4>
            <a href="#/" className="btn btn__primary py-5 px-10">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    );
}

export default Banner;
