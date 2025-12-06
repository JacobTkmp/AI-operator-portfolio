import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Intro', href: '#intro' },
    { name: 'About', href: '#about' },
    { name: 'Skills & Services', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-white/90 backdrop-blur-md
        transition-all duration-300
        ${scrolled ? 'shadow-sm border-b border-slate-100' : ''}
      `}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#intro"
            onClick={(e) => handleNavClick(e, '#intro')}
            className="text-xl font-semibold text-slate-900 hover:text-orange-500 transition-colors duration-200"
          >
            Jacob TeKampe
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="
                    text-sm font-medium text-slate-600
                    hover:text-slate-900 transition-colors duration-200
                    relative after:absolute after:bottom-[-4px] after:left-0
                    after:w-0 after:h-[2px] after:bg-orange-500
                    after:transition-all after:duration-200
                    hover:after:w-full
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300
            ${mobileMenuOpen ? 'max-h-64 mt-4' : 'max-h-0'}
          `}
        >
          <ul className="flex flex-col gap-4 pb-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="
                    block text-base font-medium text-slate-600
                    hover:text-orange-500 transition-colors duration-200
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

