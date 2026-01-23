import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_dlvtc6f";
const EMAILJS_TEMPLATE_ID = "template_e96b7m7";
const EMAILJS_PUBLIC_KEY = "J1zBTED4no0ZC3pPm";

const Donate = () => {
  // Reference to the form for EmailJS
  const formRef = useRef(null);

  // UI state management
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  /* ===== Handle Form Submission ===== */
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current.reset(); // Clear form after success
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <div className="flex justify-center p-28 items-center h-24 text-white text-center">
        <h1 className="text-2xl md:text-3xl font-bold">
          Donate for a Cause and Make the World a Better Place
        </h1>
      </div>

      <section className="p-6">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          
          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div>
              <h2 className="text-2xl font-bold mb-4">Why Your Donation Matters</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your contribution directly supports our scholarship mission, helping
                talented students overcome financial barriers and gain access to
                quality education. Every donation, no matter the size, creates
                real opportunities and lasting impact.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Donation Account Details</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                   Bank Name:<strong> Polaris Bank</strong>
                  </li>
                  <li>
                    Account Name: <strong> M.O. Agbakaja Educational Foundation (MAEF)</strong>
                  </li>
                  <li>
                    Account Number: <strong> 1771919561</strong>
                  </li>
                  <li>
                    Account Type: <strong> Savings</strong> 
                  </li>
                </ul>

                <p className="mt-4 text-sm text-gray-600">
                  For transfers, please include your name as the payment reference.
                </p>
              </div>
            </div>

            {/* ===== Right Column: Donation Form ===== */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">
                Support Our Mission
              </h2>

              <form className="space-y-6"
                              ref={formRef}
                onSubmit={handleSubmit}>
                
                {/* Full Name */}
                <div>
                  <label
                    className="block mb-2 font-medium"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    required
                  />
                </div>

                {/* Email */}
                {/* <div>
                  <label
                    className="block mb-2 font-medium"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    required
                  />
                </div> */}

                {/* Donation Amount */}
                <div>
                  <label
                    className="block mb-2 font-medium"
                    htmlFor="amount"
                  >
                    Donation Amount (NGN)
                  </label>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="number"
                    id="amount"
                    placeholder="Enter amount in NGN"
                    min="1"
                    required
                  />
                </div>

                {/* Optional Message */}
                <div>
                  <label
                    className="block mb-2 font-medium"
                    htmlFor="message"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="message"
                    rows="4"
                    placeholder="Leave a message of support"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold
                               hover:bg-blue-700 hover:scale-105
                               transition-all duration-300 disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Donate Now"}
                  </button>
                </div>
              </form>

                    {success && (
                        <p className="text-green-600 text-center font-medium animate-fadeIn">
                            Thank you! Your donation message has been sent successfully 💙
                        </p>
                        )}
                    </div>
                </div>
                </div>
            </section>

      {/* ===== Footer Thank You Banner ===== */}
      <div className="flex justify-center items-center h-24  text-white text-center px-4">
        <h1 className="text-3xl font-bold">
          Thank You for Your Support!
        </h1>
      </div>
    </>
  );
};

export default Donate;
