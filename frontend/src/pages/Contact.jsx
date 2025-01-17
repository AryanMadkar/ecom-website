import React, { useState } from "react";

const Contact = () => {
  return (
    <div>
      <section className="text-white body-font relative">
        <div className="absolute inset-0 bg-black">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Mumbai&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-black rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-white text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-white">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <form action="https://formspree.io/f/xvgperzv" method="POST">
              {" "}
              <div className="relative mb-4">
                <input
                  required
                  autoComplete="off"
                  placeholder="Enter your name"
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <input
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="off"
                  className="w-full bg-gray-800 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <textarea
                  required
                  autoComplete="off"
                  placeholder="Enter your message"
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <input
                type="submit"
                value="Submit"
                className="text-white w-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              />
            </form>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
