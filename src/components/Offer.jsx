function Offer() {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const steps = [
    {
      number: '1',
      title: 'Break Down',
      description: 'We map your current process and simplify it so AI can follow and improve it.',
    },
    {
      number: '2',
      title: 'Automate',
      description: 'We build the workflow that replaces the manual steps your team wastes time on.',
    },
    {
      number: '3',
      title: 'Roll Out',
      description: 'We deploy the system and refine it until it consistently saves hours every week.',
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
            A simple process to turn messy manual work into clean automated systems your team can actually use.
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* 3-Step Mechanism */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-8 border border-slate-100 text-center"
            >
              <div className="text-4xl font-bold text-orange-500 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantee Box */}
        <div className="bg-white border-2 border-orange-500 rounded-2xl p-8 sm:p-10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              My Guarantee
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              If I cannot leverage AI to save you at least ten hours a month within the first thirty days, I will keep improving the workflow at no extra cost until it does.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offer

