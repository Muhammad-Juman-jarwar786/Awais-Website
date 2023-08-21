const ContactSection = () => {
  return (
    <>
      <div className="overflow-hidden md:grid md:grid-cols-2 mt-10 lg:mt-20 mx-5 lg:mx-20">
        <div className="text-center md:text-left tracking-wider font-bold lg:mt-0">
          <div className="text-slate-700  text-lg md:text-xl lg:text-2xl ">
            GET IN TOUCH
          </div>
          <div className="text-black mt-5 lg:mt-9 text-2xl md:text-3xl lg:text-4xl lg:mr-16">
            Visit one of our agency locations or contact us today
          </div>
          <div className="text-black text-lg md:text-xl lg:text-2xl  mt-5 lg:mt-9">
            Head Office
          </div>

          <div className="text-md md:text-lg lg:text-xl xl:text-2xl text-gray-400 mt-5 lg:mt-16 text-left">
            <div className="lg:flex lg:flex-row lg:gap-x-10">
              <span className="text-gray-700">
                <i className="fa-regular fa-map"></i>
              </span>{" "}
              56 Glassford Street Glasgow GI IUL New York
            </div>
            <div className="lg:flex lg:flex-row lg:gap-x-10">
              <span className="text-gray-700">
                <i className="fa-regular fa-envelope"></i>
              </span>{" "}
              contact@example.com
            </div>
            <div className="lg:flex lg:flex-row lg:gap-x-10">
              <span className="text-gray-700">
                <i className="fa-solid fa-phone"></i>
              </span>{" "}
              0315010498
            </div>
            <div className="lg:flex lg:flex-row lg:gap-x-10">
              <span className="text-gray-700">
                <i className="fa-regular fa-clock"></i>
              </span>{" "}
              Monday to Saturday, 10:00 - 18:00
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13711.03143086391!2d68.71205718565974!3d25.465274725071725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3929e65b54040a2d%3A0x1d84f4e48b60759d!2sTando%20Allahyar%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1632131658831!5m2!1sen!2sus"
            className="w-full h-96 lg:h-[30rem] lg:w-[50rem]"
            allowFullScreen={true}
            aria-controls="map"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
