import React from 'react'
import Link from 'next/link'

export default function Card3() {
  return (
    <div className="py-0 w-full">
  <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="w-1/3 bg-cover bg-[url('/images/doc3.jpg')] bg-hero bg-no-repeat bg-center ">
    </div> 
    <div className="w-2/3 p-4">
      <h1 className="text-black font text-xl">Dr Josef TJ</h1>
                  <p className="mt-2 text-gray-600 text-sm">Physiotherapist
        </p>
      <div className="flex item-center mt-2">
        <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <p></p>
      </div>
      <div className="flex item-center justify-between mt-3">
        <h1 className="text-gray-700 font-bold text-xl">₹250</h1>
 <Link href="/videocallpage">
              <button className="px-3 py-2 bg-blue-800 text-white text-xs font-bold uppercase rounded">Video call</button>
              </Link>      </div>
    </div>
  </div>
</div>
  )
}
