import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import {Toaster,toast} from "react-hot-toast"

const Short = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")

  const handlechange=(e) => {
    seturl(e.target.value)
  }
  
  const handleclick=async () => {
    try{
    const res=await fetch("https://urlshortner-0ez9.onrender.com/v1/short",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        url:url
      })
    })
    const data=await res.json();
    console.log(data)
    setshorturl(data.short)
  }catch(e){
    console.log(e)
  }
  }

  const copy=async() => {
    await navigator.clipboard.writeText(shorturl);
    toast.success("Copied to clipboard!")
  }
  
  const open=() => {
    try{
    window.open(shorturl,
      "_blank"
    )
  }catch(e){
    console.log(e)
  }
} 
  return (
    <div className="min-h-screen text-slate-800 flex flex-col bg-gradient-to-r from-[#d0f0df] to-[#dae9e4]">
        <Toaster/>
      <Navbar />

      <main className="flex-1 flex flex-col items-center px-6 py-16 md:py-24">
        <div className="w-full max-w-2xl">

          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-[#0a3c6b]">Shorten a URL</h1>
            <p className="text-slate-600 text-sm">Paste your long link below and get a clean short URL instantly.</p>
          </div>

          {/* Input card */}
          <div className="bg-white/80 backdrop-blur-sm border border-slate-400 rounded-2xl p-6 mb-5 shadow-sm">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Your long URL</label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input onChange={handlechange}
              value={url}
                type="url"
                placeholder="https://example.com/very/long/url/here"
                className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-violet-400 transition-colors"
              />
              <button onClick={handleclick} className="px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white text-sm font-semibold rounded-xl transition-colors shadow-md shadow-violet-100 whitespace-nowrap">
                Shorten URL
              </button>
            </div>
          </div>

          {/* Result card */}
        {shorturl && <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 mb-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              Link created
            </span>
            <span className="text-xs text-slate-400">Just now</span>
          </div>

          <div className="flex items-center gap-3 bg-violet-50 border border-violet-100 rounded-xl px-4 py-3 mb-4">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-violet-400 shrink-0">
              <path d="M2 8C2 5.79 3.79 4 6 4h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M14 8c0 2.21-1.79 4-4 4H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="12" cy="4" r="1.5" fill="currentColor"/>
              <circle cx="4" cy="12" r="1.5" fill="currentColor"/>
            </svg>
            <span className="text-blue-700 text-sm font-semibold flex-1">{shorturl}</span>
            <button onClick={copy} className="shrink-0 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors">
              Copy
            </button>
        
          </div>

          <p className="text-xs text-slate-400 mb-1">Original URL</p>
          <p className="text-xs text-slate-500 truncate mb-5">{url}</p>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
            <button onClick={open} className="px-3 py-1.5 bg-slate-50 hover:bg-slate-300 border border-slate-200 text-xs text-slate-700 rounded-lg transition-colors flex items-center gap-1">
              Open link
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 8L8 2M4 2h4v4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>}
        </div>
        
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-400 bg-white/40">
        © {new Date().getFullYear()} urlify. All rights reserved.
      </footer>
    </div>
  )

}

export default Short