import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  })
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: "",
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus({ submitting: true, success: false, error: "" })
    
    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/23016629/uf5i0io/', {
        method: 'POST',
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setStatus({ submitting: false, success: true, error: "" })
        setFormData({ name: "", email: "", subject: "" })
      } else {
        setStatus({ submitting: false, success: false, error: "Failed to send. Please try again." })
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: "Something went wrong. Please try again." })
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-4">
            Ready to start using AI to get leverage in your business
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Call to action button */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <button
            onClick={() => window.Calendly?.initPopupWidget({url: 'https://calendly.com/tekampejacob45/ai-solution-discovery-call'})}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-200 cursor-pointer"
          >
            Book a Call to Get Leverage
          </button>
          <p className="text-sm text-slate-500 text-center max-w-md">
            Prefer to send details first? Fill out the form below and we will reach out to you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                What can we help you with
              </label>
              <textarea
                id="subject"
                name="subject"
                rows={5}
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Tell us about your business and what you would like to automate"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 resize-none"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status.submitting}
              className="w-full px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status.submitting ? "Sending..." : "Submit"}
            </button>

            {/* Status messages */}
            {status.success && (
              <p className="text-sm text-green-600 mt-2">
                Thanks for reaching out. I will get back to you soon.
              </p>
            )}
            {status.error && (
              <p className="text-sm text-red-600 mt-2">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
