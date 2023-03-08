import React from "react";

export const About: React.FC = () => {
  return (
    <div id="about-us" className="h-screen flex flex-col items-center bg-white">
      <h2 className="text-3xl font-bold mt-20">About us</h2>
      <div className="w-1/2 relative top-48">
        <p className="text-xl">
          We are passionate about design and have dedicated ourselves to
          crafting high-quality templates that are not only visually appealing
          but also optimized for a seamless user experience. <br /> At our core, we
          believe that good design is essential for success in today's
          competitive online marketplace. That's why we're passionate about
          creating templates that not only look great, but also provide a
          seamless user experience for your customers.
        </p>
      </div>
      <div className="z-0">
        <div className="w-20 h-20 bg-brown rounded-full blur-lg translate-x-96"></div>
        <div className="w-40 h-40 bg-brown rounded-full blur-xl -translate-x-96 -translate-y-64"></div>
        <div className="w-16 h-16 bg-brown rounded-full blur-xl -translate-x-96 translate-y-34"></div>
      </div>
    </div>
  );
};
