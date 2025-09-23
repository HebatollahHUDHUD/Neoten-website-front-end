"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
const faqs = [
  { 
    question: "What is Cargo?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  { 
    question: "What is Cargo?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  { 
    question: "What is Cargo?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  { 
    question: "What is Cargo?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { locale } = useParams<{ locale: string }>();
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-center">
      <p className="font-normal text-sm text-center my-10 max-w-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>
      </div>
      <div className="space-y-4 mb-20 px-2 md:px-0">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`p-4 shadow-md transition-all duration-300 
                ${isOpen ?
                   locale ==="ar" ?
                    "bg-[#0066CC] border-r-[10px] border-r-[#00A699] text-[#EBEBEB] "
                    : "bg-[#0066CC] border-l-[10px] border-l-[#00A699] text-[#EBEBEB] "
                    : "bg-[#E7F2F1] border-l-[15px] border-l-transparent"}`}
            >
              <button
                onClick={() => toggle(index)}
                className={`w-full flex justify-between items-center py-2 text-left font-semibold text-2xl ${isOpen ? "text-white" : "text-black"}`}
              >
                {faq.question}
                {isOpen ? <FiMinus size={20} color="white" /> : <FiPlus size={20} color="#747474" />}
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
