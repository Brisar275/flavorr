import React from 'react'
import Link from 'next/link'

const FlechaAtras = () => {
  return (
    <div className="w-full max-w-6xl mx-auto flex justify-start mb-8">
            <Link 
              href="/" 
              className="flex gap-2 text-blue-900 hover:text-blue-950 font-[Aurora] text-xl transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Volver al inicio
            </Link>
          </div>
  )
}

export default FlechaAtras