import { useFormik } from "formik";
import { ContactFormValidation } from "../../validation/ContactFormValidation";

import people1 from "../../assets/people/1.png";
import people2 from "../../assets/people/2.png";
import people3 from "../../assets/people/3.png";
import { FormValues } from "../../interface/Interfaces";
import { Button } from "../buttons/Buttons";

const ContactForm = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: ContactFormValidation,
    onSubmit: (values) => {
      formik.resetForm();
      console.log(values);
    },
  });

  const borderColorName =
    formik.touched.name && formik.errors.name
      ? "border-red-400"
      : "border-gray-300";

  const borderColorEmail =
    formik.touched.email && formik.errors.email
      ? "border-red-400"
      : "border-gray-300";

  const borderColorSubject =
    formik.touched.subject && formik.errors.subject
      ? "border-red-400"
      : "border-gray-300";

  const borderColorMessage =
    formik.touched.message && formik.errors.message
      ? "border-red-400"
      : "border-gray-300";

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 mt-10 lg:mt-20 border-2 border-slate-600 mx-5 md:gap-5 ">
      <div className="text-center tracking-wider col-span-7">
        <div className="mt-4 lg:text-left lg:mx-4 lg:text-lg">
          LEAVE A MESSAGE
        </div>
        <h1 className="text-2xl font-bold mt-4 lg:text-left lg:mx-4 lg:text-3xl">
          We love to hear from you
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="mx-2 lg:mx-4 mt-4 lg:mt-6 grid grid-cols-1 items-center gap-2 lg:gap-5"
        >
          <input
            className={`${borderColorName} border-2  p-2 lg:p-3 rounded-md outline-none`}
            type="text"
            name="name"
            placeholder="Your Name"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-left mt-[-12px] text-sm lg:text-lg lg:mt-[-25px]">
              {formik.errors.name}
            </div>
          ) : null}
          <input
            className={`${borderColorEmail} border-2  p-2 lg:p-3 rounded-md outline-none`}
            type="email"
            name="email"
            placeholder="E-mail"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-left mt-[-12px] text-sm lg:text-lg lg:mt-[-25px]">
              {formik.errors.email}
            </div>
          ) : null}
          <input
            className={`${borderColorSubject} border-2  p-2 lg:p-3 rounded-md outline-none`}
            type="text"
            name="subject"
            placeholder="Subject"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
          />
          {formik.touched.subject && formik.errors.subject ? (
            <div className="text-red-500 text-left mt-[-12px] text-sm lg:text-lg lg:mt-[-25px]">
              {formik.errors.subject}
            </div>
          ) : null}
          <textarea
            className={`${borderColorMessage} border-2  p-2 lg:p-3 rounded-md outline-none`}
            name="message"
            rows={4}
            placeholder="Your Message"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-left mt-[-12px] text-sm lg:text-lg lg:mt-[-25px]">
              {formik.errors.message}
            </div>
          ) : null}
          <Button className="btn bg-emerald-600 mt-4 lg:mt-6 lg:w-32 p-2 lg:p-3 rounded-md text-white text-lg">
            Submit
          </Button>
        </form>
      </div>
      <div className="mt-10 md:mt-0 text-center tracking-wider col-span-5 lg:grid lg:grid-cols-1">
        <div className="mt-4 lg:mt-10 grid-cols-1 grid justify-items-center ">
          <div
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-back"
            className="lg:flex lg:flex-col lg:justify-items-end"
          >
            <img
              className="md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full  "
              src={people1}
              alt=""
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-back"
            className=""
          >
            <h1 className="text-xl font-bold md:text-lg lg:text-xl">
              John Doe
            </h1>
            <p className="text-left text-gray-500 md:text-xs lg:text-sm">
              Senior Marketing Manager
            </p>
            <p className="text-left text-gray-500 md:text-xs lg:text-sm">
              Phone: 0123 000 77 88
            </p>
            <p className="text-left text-gray-500 md:text-xs lg:text-sm">
              Email: contact@gmail.com
            </p>
          </div>
        </div>
        <div className="mt-4 lg:mt-10 grid-cols-1 grid justify-items-center ">
          <div
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-back"
          >
            <img
              className="md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full"
              src={people2}
              alt=""
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-back"
          >
            <h1 className="text-xl font-bold md:text-lg lg:text-xl">
              William Smith
            </h1>
            <p className="text-left text-gray-500 md:text-xs lg:text-sm">
              Senior Marketing Manager
            </p>
            <p className="text-left text-gray-500 md:text-xs lg:text-sm">
              Phone: 0123 000 77 88
            </p>
            <p className="text-left text-gray-500 md:text-xs lg:text-sm">
              Email: contact@gmail.com
            </p>
          </div>
        </div>
        <div className="mt-4 lg:mt-10 grid-cols-1 grid justify-items-center ">
          <div
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-back"
          >
            <img
              className="md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full"
              src={people3}
              alt=""
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-back"
          >
            <h1 className="text-xl font-bold md:text-lg lg:text-xl">
              Emma Stone
            </h1>
            <p className="text-left text-gray-500 md:text-xs lg:text-sm">
              Senior Marketing Manager
            </p>
            <p className="text-left text-gray-500 md:text-xs lg:text-sm">
              Phone: 0123 000 77 88
            </p>
            <p className="text-left text-gray-500 mb-10 md:text-xs lg:text-sm">
              Email: contact@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
