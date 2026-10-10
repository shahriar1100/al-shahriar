import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_axbtt7a",  // EmailJS Service ID
        "template_1ziboq3",  // EmailJS Template ID
        form.current,
        "Rz7W9pVF0HdDryNNL"  // EmailJS Public Key
      )
      .then(
        () => {
          setIsSubmitting(false);
          form.current.reset();
          toast.success("Message sent successfully! 🚀", {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          setIsSubmitting(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full py-16 sm:py-24 font-sans relative"
    >
      <ToastContainer />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            CONTACT
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Send me a message and let&apos;s connect!
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="w-full max-w-lg mx-auto bg-gray-900/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_0_35px_rgba(130,69,236,0.25)]">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">
            Let&apos;s Talk <span className="inline-block ml-1">💬</span>
          </h3>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="name@example.com"
                required
                className="w-full p-3 sm:p-3.5 rounded-xl bg-[#09061c] text-white border border-gray-700/80 focus:outline-none focus:border-purple-500 text-sm sm:text-base transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="John Doe"
                required
                className="w-full p-3 sm:p-3.5 rounded-xl bg-[#09061c] text-white border border-gray-700/80 focus:outline-none focus:border-purple-500 text-sm sm:text-base transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Project Inquiry / Job Opportunity"
                required
                className="w-full p-3 sm:p-3.5 rounded-xl bg-[#09061c] text-white border border-gray-700/80 focus:outline-none focus:border-purple-500 text-sm sm:text-base transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Hi Shahriar, I would like to discuss..."
                rows="4"
                required
                className="w-full p-3 sm:p-3.5 rounded-xl bg-[#09061c] text-white border border-gray-700/80 focus:outline-none focus:border-purple-500 text-sm sm:text-base transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 mt-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-xl text-sm sm:text-base hover:opacity-90 active:scale-95 shadow-lg transition-all duration-200 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
