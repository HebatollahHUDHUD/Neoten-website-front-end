"use client";

import { useState } from "react";
const ContactForm = () => {
const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // بعد 3 ثواني يختفي المسج
    setTimeout(() => setSubmitted(false), 3000);
  };

    return(
        <section className="mb-14 max-w-3xl mx-auto bg-[#E6F4F2] shadow-[#00000029] rounded-2xl py-8 px-10">
            <h1 className="font-bold text-3xl text-center uppercase "><p className="max-w-xs mx-auto">Share Your</p> Thoughts & Concerns</h1>
            <p className="font-semibold text-[#666666] text-sm text-center max-w-lg mx-auto pt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 mt-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-lg font-bold text-black">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            required
            className="mt-1 block w-full rounded-md bg-white text-[#CBCBCB] shadow-sm  sm:text-sm p-3"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-lg font-bold text-black">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="mt-1 block w-full rounded-md bg-white text-[#CBCBCB] shadow-sm  sm:text-sm p-3"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-lg font-bold text-black">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            required
            className="mt-1 block w-full rounded-md bg-white text-[#CBCBCB] sm:text-sm p-3"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-lg font-bold text-black">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="mt-1 block w-full rounded-md bg-white text-[#CBCBCB] sm:text-sm p-3"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
        <button
          type="submit"
          className="w-44 bg-[#0066CC] text-white py-2 px-4 rounded-md hover:bg-gray-800 transition cursor-pointer items-center"
        >
          Submit
        </button>
        </div>
      </form>

      {/* رسالة نجاح */}
      {submitted && (
        <p className="text-green-600 font-medium mt-4">
          ✅ Your message has been submitted successfully!
        </p>
      )}
        </section>
    );
}
export default ContactForm;