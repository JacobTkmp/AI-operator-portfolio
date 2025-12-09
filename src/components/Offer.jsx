function Offer() {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const deliverables = [
    {
      number: '1',
      title: '30-Minute Bottleneck Diagnostic',
      description: 'We identify the single highest-ROI bottleneck in your workflow.',
    },
    {
      number: '2',
      title: 'Minute 31 Implementation',
      description: 'At minute 31, we start solving it. Immediately.',
    },
    {
      number: '3',
      title: 'Free First Automation',
      description: 'I build your first automation for free so you can see the value before you ever pay.',
    },
    {
      number: '4',
      title: 'Done-For-You Automation Build',
      description: 'I design, build, test, and roll out the automation that removes the bottleneck and replaces hours of manual work.',
    },
    {
      number: '5',
      title: 'End-to-End Execution',
      description: 'No learning AI, no process mapping, no tool migrations. I handle everything.',
    },
    {
      number: '6',
      title: 'Team Rollout and Adoption',
      description: 'Your team gets a simple activation script so the system is actually used.',
    },
  ]

  const bonuses = [
    {
      title: 'Process Clarity Map',
      description: 'Your entire workflow visualized so you see exactly where time is leaking.',
      value: '$500',
    },
    {
      title: 'Automation Blueprint',
      description: 'The documentation and SOP so you can scale or update your automation easily.',
      value: '$750',
    },
    {
      title: 'Team Training Script',
      description: 'Rapid team adoption equals immediate ROI.',
      value: '$300',
    },
    {
      title: '30-Day Optimization',
      description: 'We iterate until it is perfect.',
      value: '$500',
    },
  ]

  return (
    <section id="offer" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            The AI Leverage System
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-4">
            Turn 10 hours of messy manual work into 1 hour of clean automated execution without hiring, learning AI, or changing tools.
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* What You Get */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-900 text-center mb-10">
            What You Get
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item) => (
              <div
                key={item.number}
                className="bg-white rounded-2xl p-6 border border-slate-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{item.number}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* #7 - Centered Full Width */}
          <div className="mt-6 max-w-xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="flex items-start gap-4 justify-center">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">7</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">
                    30-Day Optimization
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We refine it together to make it bulletproof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bonuses */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-900 text-center mb-10">
            Bonuses Included
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-100"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-slate-900">
                    {bonus.title}
                  </h4>
                  <span className="text-sm font-medium text-orange-500">
                    Value: {bonus.value}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee - Prominent */}
        <div className="bg-white border-2 border-orange-500 rounded-2xl p-8 sm:p-10 mb-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            My Guarantee
          </h3>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            If we do not save you at least 10 hours per month, I work with you until we do.
          </p>
        </div>

        {/* Price Box */}
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-10 mb-6 text-center">
          <p className="text-slate-300 text-lg mb-4">
            Most AI Operators charge $5,000/month. I charge...
          </p>
          <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
            $2,800/month
          </div>
          <p className="text-slate-300 text-lg mb-6">
            <span className="font-bold underline">After</span> your first free automation.
          </p>
          <button
            onClick={() => window.Calendly?.initPopupWidget({url: 'https://calendly.com/tekampejacob45/ai-solution-discovery-call'})}
            className="
              inline-block px-10 py-4 
              bg-orange-500 hover:bg-orange-600 
              text-white font-semibold text-base
              rounded-full shadow-lg shadow-orange-500/25
              transition-all duration-200 
              hover:shadow-xl hover:shadow-orange-500/30
              hover:-translate-y-0.5
              cursor-pointer
            "
          >
            Book a Call to Get Leverage
          </button>
        </div>

        {/* Scarcity - Prominent */}
        <div className="text-center bg-orange-50 border border-orange-200 rounded-xl p-6">
          <p className="text-lg font-semibold text-slate-900">
            I take 4 new clients per month.
          </p>
          <p className="text-slate-600">
            When those fill, the next openings are the following month.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Offer
