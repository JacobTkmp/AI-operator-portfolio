function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-slate-500">
            © {currentYear} Jacob TeKampe. All rights reserved.
          </p>

          {/* Built With */}
          <p className="text-sm text-slate-400">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

