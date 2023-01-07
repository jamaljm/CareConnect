import Link from 'next/link'
import React from 'react'

export default function Ambulancecard() {
  return (
     <div className="py-0 w-full sm:w-full">
  <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="w-1/3 flex justify-center">
                  <img src='/images/amb.jpg' alt=''></img>
    </div> 
    <div className="w-2/3 p-4">
      <h1 className="text-black font text-xl">Allen reji</h1>
                  <p className="mt-2 text-gray-600 text-sm">
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
      </div>
      <div className="flex item-center justify-between mt-3">
                      <h1 className="text-gray-700 font-bold text-lg">kochi</h1>
                      <Link href="tel:956456456565">
        <button className="px-3 py-2 bg-blue-800 text-white text-xs font-bold uppercase rounded">call</button></Link>
      </div>
    </div>
  </div>
</div>
  )
}
