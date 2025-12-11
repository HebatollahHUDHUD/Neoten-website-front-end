"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Faqs } from "@/schemas/shared";

const FAQs = ({ faqs }: { faqs: Faqs["faqs"] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4 mb-20 px-2 md:px-0 mt-16">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`p-4 shadow-md transition-all duration-300 
                ${
                  isOpen
                    ? "bg-[#0066CC] border-s-[10px] border-s-[#00A699] text-[#EBEBEB]"
                    : "bg-[#E7F2F1] border-s-[15px] border-s-transparent"
                }`}
            >
              <button
                onClick={() => toggle(index)}
                className={`w-full flex justify-between items-center py-2 text-left font-semibold text-2xl cursor-pointer ${
                  isOpen ? "text-white" : "text-black"
                }`}
              >
                {faq.question}

                {isOpen ? (
                  <FiMinus size={20} color="white" />
                ) : (
                  <FiPlus size={20} color="#747474" />
                )}
              </button>
              {isOpen && (
                <p className="mt-4 max-w-[520px] font-normal text-lg">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQs;
