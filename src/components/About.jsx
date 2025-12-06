function About() {
  const keyFacts = [
    { label: 'Location', value: 'Phoenix, Arizona' },
    { label: 'Focus', value: 'AI & Automation' },
  ]

  const credentials = [
    'AI Operator certified through The AI Exchange',
    'Completed AI Operations Bootcamp',
    'Trained in prompt engineering and workflow optimization',
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Text Content - Left on desktop */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Helping Businesses Embrace AI
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              I'm a certified AI Operator who builds practical, no-fluff solutions for businesses. I'm not here to automate for the sake of automating — I solve real problems. I map your processes, teach AI how they work, build the system, and deliver workflows your team can actually use. My experience in sales, operations, marketing, and automation means I think "business first, tech second," so every system I build supports real outcomes.
            </p>

            {/* Key Facts */}
            <div className="grid grid-cols-2 gap-4">
              {keyFacts.map((fact) => (
                <div 
                  key={fact.label}
                  className="p-4 bg-slate-50 rounded-xl"
                >
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">
                    {fact.label}
                  </p>
                  <p className="text-base font-semibold text-slate-900">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image - Right on desktop */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl -z-10"></div>
              
              {/* Image container */}
              <div className="w-72 h-80 sm:w-80 sm:h-96 bg-slate-200 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                    e.target.parentElement.innerHTML = '<span class="text-slate-400 text-sm">Profile Image</span>'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Subsection */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Credentials Text - Takes 3 columns */}
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Credentials & Experience
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                I've invested significant time mastering the tools and technologies that 
                power modern AI systems. My expertise spans multiple platforms and frameworks, 
                allowing me to create comprehensive solutions tailored to each client's needs.
              </p>

              <ul className="space-y-3">
                {credentials.map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 text-slate-600"
                  >
                    <span className="flex-shrink-0 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg 
                        className="w-3 h-3 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={3} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Optional Credentials Image - Takes 2 columns */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 bg-slate-200 rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/images/credentials.jpg"
                  alt="Credentials"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                    e.target.parentElement.innerHTML = '<span class="text-slate-400 text-sm text-center px-4">Credentials Image</span>'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
