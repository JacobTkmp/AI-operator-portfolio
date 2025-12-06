function Intro() {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50 pt-20"
    >
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
          AI Operator helping businesses
          <span className="text-orange-500"> automate boring work</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          I design and build AI automation systems so your team can move faster with less work.
        </p>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {/* Primary Button */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="
              w-full sm:w-auto px-8 py-4 
              bg-orange-500 hover:bg-orange-600 
              text-white font-semibold text-base
              rounded-full shadow-lg shadow-orange-500/25
              transition-all duration-200 
              hover:shadow-xl hover:shadow-orange-500/30
              hover:-translate-y-0.5
            "
          >
            Get in Touch
          </button>

          {/* Secondary Button */}
          <button
            onClick={() => scrollToSection('#skills')}
            className="
              w-full sm:w-auto px-8 py-4 
              bg-white hover:bg-slate-50
              text-slate-900 font-semibold text-base
              rounded-full border border-slate-200
              transition-all duration-200 
              hover:border-slate-300
              hover:-translate-y-0.5
            "
          >
            View Services
          </button>
        </div>

        {/* Credibility Line */}
        <p className="text-sm text-slate-500">
          AI operations and automation for small businesses
        </p>
      </div>
    </section>
  )
}

export default Intro
