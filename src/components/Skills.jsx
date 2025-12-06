function Skills() {
  const services = [
    {
      title: 'AI Workflow Automation',
      description: 'Design and implement automated workflows that connect your tools and eliminate repetitive tasks, saving hours every week.',
      tags: ['Zapier'],
    },
    {
      title: 'Custom AI Solutions',
      description: 'Build tailored AI applications and integrations that solve your specific business challenges and enhance productivity.',
      tags: ['ChatGPT', 'Custom GPTs'],
    },
    {
      title: 'No-Code App Development',
      description: 'Create powerful business applications without traditional coding, enabling rapid deployment and easy maintenance.',
      tags: ['Base44', 'Zapier', 'Cursor'],
    },
    {
      title: 'Process Optimization',
      description: 'Analyze and streamline your existing processes, identifying opportunities for automation and efficiency gains.',
      tags: ['Consulting', 'Strategy'],
    },
    {
      title: 'AI Training & Support',
      description: 'Empower your team with the knowledge and skills to leverage AI tools effectively in their daily work.',
      tags: ['Training', 'Documentation'],
    },
    {
      title: 'Integration Services',
      description: 'Connect your existing software stack with AI capabilities, ensuring seamless data flow and unified operations.',
      tags: ['APIs', 'Workflows'],
    },
  ]

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Skills & Services
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-4">
            From automation to AI implementation, I offer a range of services designed 
            to transform how your business operates.
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group bg-white rounded-2xl p-6 sm:p-8
                border border-slate-100
                transition-all duration-300
                hover:shadow-xl hover:shadow-slate-200/50
                hover:-translate-y-1
                hover:border-orange-100
              "
            >
              {/* Accent Line */}
              <div className="w-10 h-1 bg-orange-500 rounded-full mb-5 transition-all duration-300 group-hover:w-16"></div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="
                      px-3 py-1 text-xs font-medium
                      bg-slate-100 text-slate-600
                      rounded-full
                      transition-colors duration-200
                      group-hover:bg-orange-50 group-hover:text-orange-600
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
