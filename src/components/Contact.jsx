function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Prefer to send details first?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-4">
            We will review your information and reach out to you.
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 mb-10 max-w-lg mx-auto">
          <form 
            action="https://formspree.io/f/xovgnkrd"
            method="POST"
            className="space-y-5"
          >
            {/* Name Field */}
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="
                  w-full px-4 py-3 
                  bg-white border border-slate-200 rounded-xl
                  text-slate-900 placeholder-slate-400
                  focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500
                  transition-all duration-200
                "
              />
            </div>

            {/* Email Field */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your@email.com"
                className="
                  w-full px-4 py-3 
                  bg-white border border-slate-200 rounded-xl
                  text-slate-900 placeholder-slate-400
                  focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500
                  transition-all duration-200
                "
              />
            </div>

            {/* Message Field */}
            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me about your business and what you'd like to automate..."
                className="
                  w-full px-4 py-3 
                  bg-white border border-slate-200 rounded-xl
                  text-slate-900 placeholder-slate-400
                  focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500
                  transition-all duration-200
                  resize-none
                "
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
                w-full px-8 py-4
                bg-orange-500 hover:bg-orange-600
                text-white font-semibold
                rounded-xl
                shadow-lg shadow-orange-500/25
                transition-all duration-200
                hover:shadow-xl hover:shadow-orange-500/30
              "
            >
              Send Message
            </button>
          </form>
        </div>

        {/* P.S. Guarantee */}
        <div className="text-center">
          <p className="text-sm text-slate-500 max-w-lg mx-auto">
            P.S: If I can not save you at least 10 hours a month within the first 30 days, I keep working at no extra cost.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
