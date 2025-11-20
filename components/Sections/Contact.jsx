import React, { useState } from "react";
import { Mail, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyOUrVDeh87iUQLis0sGhXmzXjk0oBFPN6shCHOHLQCqqF1MRuDcW-lWwg8GdH25MP6/exec";

    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("message", formData.message);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formPayload,
        mode: "no-cors",
      });

      console.log("Form submitted:", formData);
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-neutral-900/40 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-black/50 border border-white/5">
          <div className="text-center mb-10">
            <div className="inline-block p-3 rounded-full bg-violet-500/10 backdrop-blur-sm border border-violet-500/20 mb-6">
              <Mail className="w-6 h-6 text-violet-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-futura text-white mb-4">
              Let's connect
            </h2>
            <p className="text-base text-neutral-400 max-w-lg mx-auto leading-relaxed">
              Have a project in mind or just want to say hello? Fill out the
              form below and I'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-neutral-950/50 border border-white/10 rounded-xl shadow-inner focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/50 outline-none transition-all duration-200 text-white placeholder:text-neutral-600"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-neutral-950/50 border border-white/10 rounded-xl shadow-inner focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/50 outline-none transition-all duration-200 text-white placeholder:text-neutral-600"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-neutral-950/50 border border-white/10 rounded-xl shadow-inner focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/50 outline-none transition-all duration-200 text-white placeholder:text-neutral-600"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition-colors duration-300 shadow-lg shadow-white/5 text-base"
              disabled={formStatus === "sending"}
            >
              {formStatus === "sending" ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {formStatus === "success" && (
              <p className="text-center text-emerald-400 mt-4 text-sm bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
                Thank you for your message! I'll get back to you shortly.
              </p>
            )}
            {formStatus === "error" && (
              <p className="text-center text-red-400 mt-4 text-sm bg-red-500/10 p-2 rounded-lg border border-red-500/20">
                Oops! Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
