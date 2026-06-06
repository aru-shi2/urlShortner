import React from 'react'
import Navbar from './Navbar'
import { Link, BarChart3, QrCode } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate()

  const start=()=>{
    navigate("/short")
  }

  const qr=()=>{
    navigate("/qr")
  }
  return (
    <div
      className="min-h-screen text-slate-800 flex flex-col relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #f5f3ff 50%, #fce7f3 100%)' }}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto w-full px-6 py-20 flex flex-col md:flex-row items-center gap-17">
        
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[10%] left-[5%] w-16 h-16 bg-violet-400 rounded-full opacity-30"></div>
          <div className="absolute top-[15%] right-[10%] w-20 h-20 border-4 border-indigo-500 rotate-12 opacity-40"></div>
          <div className="absolute bottom-[20%] left-[10%] w-24 h-24 bg-pink-400 rounded-3xl opacity-30 -rotate-12"></div>
          <div className="absolute top-[60%] right-[25%] w-12 h-12 bg-blue-500 rounded-full opacity-40"></div>
          <div className="absolute bottom-[10%] right-[15%] w-28 h-28 border-[6px] border-violet-500 rounded-full opacity-20"></div>
          <div className="absolute top-[40%] left-[30%] w-10 h-10 bg-indigo-300 rotate-45 opacity-50"></div>
        </div>

        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start text-left z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            Free to use — no sign-up required
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800 mb-6 leading-tight">
            Turn every URL into <span className="bg-gradient-to-r to-teal-700 from-blue-500 bg-clip-text text-transparent">something better</span>
          </h1>

          <p className="text-slate-600 text-xl max-w-lg mb-8 leading-relaxed">
            Create cleaner links and beautiful QR codes for effortless sharing — in seconds. No account needed.
          </p>

<div className="btns flex gap-5">
          <button onClick={start} className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 shadow-lg shadow-blue-500/25 hover:scale-103 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-200">
            Url shortener
          </button>

          <button onClick={qr} className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 shadow-lg shadow-blue-500/25 hover:scale-103 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-200">
            Generate QR
          </button>
</div>
        </div>

        {/* Right */}
        <div className="flex-1 w-full max-w-md z-10 flex justify-center">
          <div 
            className="w-90 h-80 relative shadow-2xl"
            style={{
              maskImage: "radial-gradient(circle at 50% 50%, black 70%, transparent 90%)",
              WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 70%, transparent 90%)"
            }}
          >
            <img
              src="https://www.awardspace.com/wp-content/uploads/2024/05/how-to-update-drupal-core-featured-image.jpeg"
              alt="URL management"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}

<section id="features" className="max-w-6xl mx-auto w-full px-6 py-8 z-10">
  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-16">
    <span className=" text-gradient-to-r from-blue-500 to-teal-500">Features</span>
  </h1>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { 
        title: "One Link, Endless Reach", 
        desc: "Shrink bulky URLs into sleek, shareable links that look cleaner and travel faster across social media, messages, and marketing campaigns.",
        icon: <Link className="w-8 h-8 text-indigo-600" /> 
      },
      { 
        title: "Every Click Has a Story", 
        desc: "See who's engaging with your links through real-time analytics. Track performance, measure reach, and uncover insights that help you grow smarter.",
        icon: <BarChart3 className="w-8 h-8 text-indigo-600" /> 
      },
      { 
        title: "From Scan to Destination", 
        desc: "Generate beautiful QR codes instantly and connect the physical world to the digital one. One scan is all it takes to reach your content anywhere, anytime.",
        icon: <QrCode className="w-8 h-8 text-indigo-600" /> 
      }
    ].map((feat, i) => (
      <div key={i} className="bg-white p-8 rounded-3xl border shadow-lg hover:bg-[#d9f3eb] border-indigo-300 transition-all duration-300 group">
        {/* Icon Container */}
        <div className="mb-6 p-3 bg-indigo-50 w-fit rounded-2xl group-hover:bg-white transition-colors">
          {feat.icon}
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
        <p className="text-slate-600 leading-relaxed">{feat.desc}</p>
      </div>
    ))}
  </div>
</section>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 bg-white/50">
        © {new Date().getFullYear()} urlify. All rights reserved.
      </footer>
    </div>
  )
}

export default Home