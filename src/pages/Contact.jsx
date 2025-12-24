import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import Toast from "../components/Toast";

export const Contact = () => {
 
  const EMAILJS_SERVICE_ID = "service_dlvtc6f";
  const EMAILJS_TEMPLATE_ID = "template_e96b7m7";
  const EMAILJS_PUBLIC_KEY = "J1zBTED4no0ZC3pPm";
  // ===========================================================

  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState({ title: "", body: "" });

  
  const containerLeft = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.12, when: "beforeChildren" },
    },
  };

  const containerRight = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.12, when: "beforeChildren" },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  function showToast(title, body = "") {
    setToastMsg({ title, body });
    setToastOpen(true);
    setTimeout(() => setToastOpen(false), 3500);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    // use EmailJS sendForm
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setSending(false);
      showToast("Configuration error", "Please set your EmailJS IDs in the component.");
      return;
    }

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(
        (result) => {
          console.log("EmailJS result:", result.text);
          setSending(false);
          showToast("Message sent!", "Thank you for reaching out. We'll get back to you soon.");
          formRef.current.reset();
        } 
        ,(error) => {
          console.error("EmailJS error:", error);
          setSending(false);
          showToast("Error sending message", "Please try again later.");
          console.error("EmailJS error:", error);
        }
      );
  };
  return (
    <div className="min-h-screen  py-35 px-6 md:px-12">
      <div className="text-white max-w-6xl mx-auto">
            <h1

      className="text-4xl md:text-5xl text-white font-extrabold text-center"
    >
      Get in Touch
    </h1>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08 }}
          className="text-center text-white mt-3 max-w-2xl mx-auto"
        >
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </motion.p>

        <div className="mt-10 grid  grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT: FORM */}
          <motion.div
            variants={containerLeft}
            initial="hidden"
            animate="show"
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <motion.form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <motion.div variants={item}>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  name="from_name"
                  required
                  className="mt-2 w-full rounded-lg border text-black border-gray-200 p-3 text-sm outline-none focus:ring-2 focus:ring-gray-700"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={item}>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  name="reply_to"
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border text-black border-gray-200 p-3 text-sm outline-none focus:ring-2 focus:ring-gray-700"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div variants={item}>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows="6"
                  required
                  className="mt-2 w-full rounded-lg border text-black border-gray-200 p-3 text-sm outline-none focus:ring-2 focus:ring-gray-700 resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </motion.div>

              <motion.div variants={item}>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-[#171aae] hover:bg-[#3be652] transition-colors text-white py-3 rounded-lg font-semibold"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* RIGHT: CONTACT INFO */}
          <motion.div
            variants={containerRight}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.div variants={item} className="px-2">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-white mt-2">Feel free to reach out through any of these channels. We're here to help!</p>
            </motion.div>

            {/* card 1 */}
            <motion.div variants={item} className="relative bg-white rounded-2xl p-5 shadow-sm border border-gray-100 overflow-hidden">
              {/* floating icon */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-5 top-4 w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-blue-500"
              >
                <FiMail className="w-5 h-5" />
              </motion.div>

              <div className="ml-16">
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm text-gray-600 mt-1">foundationmoa@gmail.com</p>
              </div>
            </motion.div>

            {/* card 2 */}
            <motion.div variants={item} className="relative bg-white rounded-2xl p-5 shadow-sm border border-gray-100 overflow-hidden">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-5 top-4 w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-blue-500"
              >
                <FiPhone className="w-5 h-5" />
              </motion.div>

              <div className="ml-16">
                <h4 className="font-semibold">Phone</h4>
                <p className="text-sm text-gray-600 mt-1">+234 809 976 1346, +234 802 669 9163</p>

              </div>
            </motion.div>

            {/* card 3 */}
            <motion.div variants={item} className="relative bg-white rounded-2xl p-5 shadow-sm border border-gray-100 overflow-hidden">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-5 top-4 w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-blue-500"
              >
                <FiMapPin className="w-5 h-5" />
              </motion.div>

              <div className="ml-16">
                <h4 className="font-semibold">Address</h4>
                <p className="text-sm text-gray-600 mt-1"> C/O St. Peter Catholic Church, Ikpa Ozuakoli-Urualla<br />
                  Ideato LGA, Imo State, Nigeria.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* toast */}
      <Toast
        open={toastOpen}
        message={{ title: toastMsg.title, body: toastMsg.body }}
        onClose={() => setToastOpen(false)}
      />
    </div>
  );
}
