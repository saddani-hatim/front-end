import React from 'react'

export default function loading() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center">
      {/* Loading Spinner */}
      <div className="flex flex-col items-center gap-4">
        {/* Animated Logo */}
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary
            flex items-center justify-center text-white font-bold text-2xl
            animate-pulse shadow-glow">
            S
          </div>
          {/* Spinning ring */}
          <div className="absolute inset-0 -m-2">
            <div className="w-20 h-20 border-4 border-transparent border-t-primary 
              rounded-full animate-spin" />
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center">
          <p className="text-slate-300 font-medium">Loading</p>
          <div className="flex items-center justify-center gap-1 mt-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-bounce" 
              style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 rounded-full bg-primary-light animate-bounce" 
              style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 rounded-full bg-secondary animate-bounce" 
              style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
