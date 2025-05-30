import { useState } from "react";
import Footer from "../../Components/HomePage/Footer/Footer";
import Categories from "../../Components/HomePage/Categories/Categories";
import Header from "../../Components/HomePage/Header/Header";
import BlackFriday from "../../Components/HomePage/BlackFriday/BlackFriday";

const faqData = [
  {
    question: "How to create an account?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    question: "How can I make payment using Paypal?",
    answer:
      "Paypal payments are supported. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
  {
    question: "Can I cancel my plan?",
    answer:
      "Yes, you can cancel your plan anytime. Velit officia consequat duis enim velit mollit.",
  },
  {
    question: "How can I reach to support?",
    answer:
      "You can reach out to our support team via email or chat. Amet minim mollit non deserunt ullamco.",
  },
];

const faqPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />

      <main className="mx-auto max-w-screen-xl my-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                </p>
              </div>

              <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="transition-all duration-200 bg-white border border-gray-200 shadow-lg hover:bg-gray-50"
                  >
                    <button
                      type="button"
                      className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="flex text-lg font-semibold text-black">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeIndex === index && (
                      <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-center text-gray-600 text-base mt-9">
                Didn’t find the answer you are looking for?{" "}
                <a
                  href="#"
                  title=""
                  className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline"
                >
                  Contact our support
                </a>
              </p>
            </div>
          </section>

          {/* Support Form */}
          <aside className="bg-amber-100 p-6  h-fit">
            <h2 className="text-2xl font-semibold mb-4">
              Can't find your answer? Ask for Support.
            </h2>
            <p className="mb-6 text-gray-800">
              Our friendly team is happy to help. Send us your question and
              we’ll get back to you within 2 business days.
            </p>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
               
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 bg-white py-2 border  focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>
                 <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
              
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Subject"
                  className="w-full px-3 bg-white py-2 border  focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="question"
                  className="block text-sm font-medium mb-1"
                >
         
                </label>
                <textarea
                  id="question"
                  rows={4}
                  placeholder="Type your question here..."
                  className="w-full px-3 bg-white py-2 border  focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-900 text-white py-2  hover:bg-teal-600 transition"
              >
                Send Message →
              </button>
            </form>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default faqPage;
