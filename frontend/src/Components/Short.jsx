import React from 'react'

const Short = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
          <input
            type="url"
            placeholder="Paste your long URL here…"
            className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-sm text-white placeholder-zinc-500 outline-none"
          />
          <a href="/short" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium rounded-xl transition-colors text-center whitespace-nowrap">
            Shorten URL
          </a>
        </div>
    </div>
  )
}

export default Short
