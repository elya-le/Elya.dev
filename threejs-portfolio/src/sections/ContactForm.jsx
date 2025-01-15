import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveDimensions = () => {
    if (screenWidth > 1024) {
      return { height: "770px", width: "900px" }; // fullscreen
    } else if (screenWidth > 768) {
      return { height: "750px", width: "800px" }; // tablet
    } else {
      return { height: "680px", width: "99%" }; // mobile
    }
  };

  const responsiveDimensions = getResponsiveDimensions();

  return (
    <section 
      className="flex flex-col items-center justify-center bg-[#191B00] p-4"
      id="contact"
      >
      <div
      style={{
        height: responsiveDimensions.height,
        width: responsiveDimensions.width,
      }}>
        <div className="w-full text-left mb-2 pl-3 sm:pl-6 sm:mb-4">
          <p className="text-white text-lg sm:text-xl font-thin">Lets build together</p>
        </div>

        <div className="w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-1/2 bg-[#262900] p-6">
            {/* Placeholder content */}
          </div>
          <div className="w-full sm:w-1/2 max-w-lg bg-[#262900] p-6">
            <h2 className="text-2xl font-bold mb-6 text-left"></h2>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm peer"
                  placeholder="Name"
                  style={{ color: 'black', '::placeholder': { color: 'grey' } }}
                  required
                />

              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm peer"
                  placeholder="Email"
                  style={{ color: 'black', '::placeholder': { color: 'grey' } }}
                  required
                />
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm peer"
                  placeholder="Message"
                  style={{ color: 'black', '::placeholder': { color: 'grey' } }}
                  required
                ></textarea>
              </div>
              <div className="text-left">
                <button
                  type="submit"
                  className="text-white text-sm inline-flex items-center border border-white rounded-full pl-4 pr-3 py-1.5 transition-colors hover:bg-[#5F6600] bg-[#4C5200]"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ContactForm;