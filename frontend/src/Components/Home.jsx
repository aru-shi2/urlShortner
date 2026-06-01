import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 py-24 md:py-26">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          Free to use — no sign-up required
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-3xl mb-6">
          Turn every URL into{' '}
          <span className="text-[#555ec0]">something better</span>
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
          Create cleaner links and beautiful QR codes for effortless sharing — in seconds.
        </p>

        <a href="/short" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium rounded-xl transition-colors">
            Get started free
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto w-full px-6 py-5">
        <div className="text-center mb-12">
          <p className="text-3xl font-bold tracking-widest text-indigo-400 uppercase mb-3">Features</p>
          <h2 className="text-3xl md:text-xl font-bold tracking-tight text-gray-300">Everything you need</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 mb-5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M8 5H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-2" strokeLinecap="round"/>
                <path d="M15 3h2v2M17 3l-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Instant Link Transformation</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">Paste any long URL and get a clean, shareable link in seconds.</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 mb-5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="6" height="6" rx="1"/>
                <rect x="11" y="3" width="6" height="6" rx="1"/>
                <rect x="3" y="11" width="6" height="6" rx="1"/>
                <rect x="13" y="13" width="4" height="4" rx="0.5"/>
              </svg>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Generate QR Codes Instantly</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">Turn any link into a scannable QR code for effortless access across all devices.</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 mb-5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 14l4-5 3 3 4-6 3 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Understand Your Audience</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">Track clicks, monitor engagement and gain insights into how your links perform.</p>
          </div>

        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-6xl mx-auto w-full px-6 pb-20">
        <div className="rounded-2xl bg-indigo-500/10 border border-indigo-500/20 px-8 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to shorten your first link?</h2>
          <p className="text-zinc-400 mb-6 text-sm">No account needed. Start in seconds.</p>
          <a href="/short" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium rounded-xl transition-colors">
            Get started free
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} urlify. All rights reserved.
      </footer>
    </div>
  )
}

export default Home