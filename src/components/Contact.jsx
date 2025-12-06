function Contact() {
  const contactButtons = [
    {
      label: 'Email Me',
      href: 'mailto:tekampejacob45@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      primary: true,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jacob-t-117204386/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      primary: false,
    },
    {
      label: 'Text/Call',
      href: 'sms:+16024816508',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      primary: false,
    },
  ]

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-4">
            Ready to transform your business with AI and automation? 
            Reach out through any of the channels below.
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          {contactButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              target={button.href.startsWith('http') ? '_blank' : undefined}
              rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`
                w-full sm:w-auto
                inline-flex items-center justify-center gap-3
                px-8 py-4 rounded-full
                font-semibold text-base
                transition-all duration-200
                hover:-translate-y-0.5
                ${button.primary
                  ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900'
                }
              `}
            >
              {button.icon}
              {button.label}
            </a>
          ))}
        </div>

        {/* Optional Contact Form (Visual Placeholder Only) */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Or Send a Message
            </h3>
            <p className="text-sm text-slate-500">
              This form is a visual placeholder and is not connected to a backend.
            </p>
          </div>

          <form 
            onSubmit={(e) => e.preventDefault()} 
            className="max-w-lg mx-auto space-y-5"
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
                placeholder="How can I help you?"
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
        </div>
      </div>
    </section>
  )
}

export default Contact

