function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Ready to Get Leverage?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-4">
            Find out if we can use AI to leverage your time so you can save hours every week.
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Book a Call CTA */}
        <div className="text-center mb-10">
          <a
            href="https://calendly.com/tekampejacob45/ai-solution-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-3
              px-8 py-4 rounded-full
              bg-orange-500 hover:bg-orange-600 
              text-white font-semibold text-base
              shadow-lg shadow-orange-500/25
              transition-all duration-200
              hover:shadow-xl hover:shadow-orange-500/30
              hover:-translate-y-0.5
            "
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book a Call to Get Leverage
          </a>
        </div>

        {/* Bridge Line */}
        <div className="text-center mb-10">
          <p className="text-slate-600 mb-4">Prefer to send details first? Fill out the form below and we will reach out to you.</p>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 mb-10 max-w-lg mx-auto">
          <form 
            onSubmit={(e) => e.preventDefault()} 
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
                bg-slate-900 hover:bg-slate-800
                text-white font-semibold
                rounded-xl
                transition-all duration-200
                hover:shadow-lg
              "
            >
              Send Message
            </button>
          </form>
          
          <p className="text-xs text-slate-400 text-center mt-4">
            This form is a placeholder — not connected to a backend yet.
          </p>
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
