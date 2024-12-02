import React from "react";

const Contact = () => {
  return (
    <section className="bg-green-50 dark:bg-green-900" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-green-600 dark:text-green-300">
              Contact Us
            </p>
            <h2 className="font-heading mb-2 font-bold tracking-tight text-green-900 dark:text-white text-2xl sm:text-3xl">
              Reach Out to Us
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-green-700 dark:text-green-200">
              Have questions about visiting our national parks? Get in touch to
              learn more about park regulations, activities, or how you can help
              preserve these beautiful landscapes for generations to come.
            </p>
          </div>
              <h2 className="mb-5 text-2xl font-bold text-green-900 dark:text-white">
                Contact Form
              </h2>
              <form id="contactForm">
                <div className="mb-7">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="mb-5 w-full rounded-md border border-green-400 py-2 pl-2 pr-4 shadow-md"
                  />
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="mb-5 w-full rounded-md border border-green-400 py-2 pl-2 pr-4 shadow-md"
                  />
                  <textarea
                    id="textarea"
                    placeholder="Message"
                    rows="5"
                    className="mb-5 w-full rounded-md border border-green-400 py-2 pl-2 pr-4 shadow-md"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white px-6 py-3 rounded-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
      </div>
    </section>
  );
};

export default Contact;
