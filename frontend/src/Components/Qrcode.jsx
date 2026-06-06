import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

const Qrcode = () => {

    const [url, seturl] = useState("")
    const [qrurl, setqrurl] = useState(null)

  const changed=(e) => {
    seturl(e.target.value)
  }
  
  const QrGenerate=async () => {
    try{
    const res=await fetch("https://urlshortner-0ez9.onrender.com/api/v1/qr",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        url:url
      })
    })
    const data=await res.json();
    console.log(data.qrCode)
    setqrurl(data.qrCode)
  }catch(e){
    console.log(e)
  }
  }

  return (

    <div
      className="min-h-screen text-slate-800 flex flex-col"
      style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #faf5ff 40%, #fdf2f8 70%, #f0f9ff 100%)' }}
    >

      <Navbar />

    <main className="flex-1 flex flex-col items-center px-4 py-16 md:py-24">
        <div className="w-full max-w-md">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-blue-900">Your QR Code</h1>
            <p className="text-slate-500 text-sm">Scan or download to share your link anywhere.</p>
          </div>

           <div className="bg-white/80 backdrop-blur-sm border border-slate-400 rounded-2xl p-6 mb-5 shadow-sm">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Your long URL</label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input onChange={changed}
              value={url}
                type="url"
                placeholder="https://example.com/very/long/url/here"
                className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-violet-400 transition-colors"
              />
              <button onClick={QrGenerate} className="px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white text-sm font-semibold rounded-xl transition-colors shadow-md shadow-violet-100 whitespace-nowrap">
                Generate QR
              </button>
            </div>
          </div>
        

          {/* Main Card */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">

            {/* QR Section */}
            <div className="flex flex-col items-center px-8 pt-8 pb-6">
              {qrurl && <div className="w-48 h-48 rounded-2xl border border-slate-100 bg-white p-3 shadow-inner flex items-center justify-center mb-5">
                <img
                  src={qrurl}
                  alt="QR Code"
                  width={180}
                  height={180}
                  className="block"
                />
              </div>}

              {/* Short URL pill */}
              <div className="flex items-center gap-2 bg-violet-50 border border-violet-100 rounded-full px-5 py-2 mb-2 max-w-full">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-violet-400 shrink-0">
                  <path d="M2 8C2 5.79 3.79 4 6 4h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M14 8c0 2.21-1.79 4-4 4H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="4" r="1.8" fill="currentColor"/>
                  <circle cx="4" cy="12" r="1.8" fill="currentColor"/>
                </svg>
              </div>

              {/* Original URL */}
              <p className="text-xs text-slate-400 truncate w-full text-center px-2">{url}</p>
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-100 mx-6" />
          </div>
        </div>
    </main>

      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-400 bg-white/40">
        © {new Date().getFullYear()} urlify. All rights reserved.
      </footer>
    </div>
  )
}

export default Qrcode