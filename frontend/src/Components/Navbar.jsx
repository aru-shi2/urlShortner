import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#4b9bbb] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8C2 5.79 3.79 4 6 4h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M14 8c0 2.21-1.79 4-4 4H6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="4" r="2" fill="white"/>
              <circle cx="4" cy="12" r="2" fill="white"/>
            </svg>
          </div>
          <span className="text-slate-800 font-bold text-lg tracking-tight">urlify</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          <a href="/" className="px-4 py-2 rounded-lg text-sm text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors">Home</a>
          <a href="/short" className="px-4 py-2 rounded-lg text-sm text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors">URL Shortener</a>
          <a href="/qr" className="px-4 py-2 rounded-lg text-sm text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors">QR Code</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="px-4 py-2 bg-[#4b9bbb] hover:bg-[#0a5674] text-white text-sm font-medium rounded-lg transition-colors">Get started</a>
        </div>

        <a href="#" className="md:hidden px-4 py-2 bg-violet-600 text-white text-sm font-medium rounded-lg">Get started</a>
      </div>
    </nav>
  )
}

export default Navbar