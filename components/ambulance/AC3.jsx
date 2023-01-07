import Link from 'next/link'
import React from 'react'

export default function AC3() {
  return (
     <div className="py-0 w-full sm:w-full">
  <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="w-1/3 flex justify-center">
                  <img src='/images/amb.jpg' alt=''></img>
    </div> 
    <div className="w-2/3 p-4">
      <h1 className="text-black font text-xl">Apollo Hospital</h1>
                  <p className="mt-2 text-gray-600 text-sm">
        </p>
      <div className="flex item-center mt-2">
        <p>+91 8138816173</p>
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
