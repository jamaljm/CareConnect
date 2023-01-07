import React from 'react'
import Question from './Question'

export default function Banner() {
  return (
     <div className="w-full sm:w-1/2 xl:w-1/3">
                            <div className="">
                                <div className="w-full min-w-40 p-4 bg-[url('/images/signupbg.jpg')] bg-hero bg-no-repeat bg-cover bg-center rounded-t-2xl ">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center">
                                            <span className="relative p-2 bg-blue-100 rounded-xl">
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVR4nO3Wv3PSYBzHcVycbJATwo+UUlz0PN1Ugv+EtiU0RQxgurgkd73zztPBVZ9RPQlN+WmBGsDJRbt4jp5rR/8PJx/vSQoh5HmSPmXr5Xv3WljenzAEQqHgggvuot7a12eR7GS3sT6Rj5cysmSmxrJx3ajeoRqTHcuvspNdeCZjRIbri0bzns5kRrXvdGMmMvCNjclBM2rg1JBfxPDrW5fDyv03V/byN2efZUYyWCr4GW8NGWLHXAqreWFF4f8wKg8ZNf9lbkwN+DwdJMaQoyrZoOIYwyj5e4zC/7RGnFJywB5jVMG5g0NbelhxGlRgui+ZYyJ7d9OMyvcYlf/nGLI4Jn1UBZ5PN5yq4IMOkq0vQa5f/s2oubeMmvvrGkEcc55gX4KrJIdPTFy3dEIcgR0zkIDX061iWTEcDvmElGGqs0M3hjuUAE2Qm8WsoEvPlmpTjykDr6fj/IK9x05dW7whnDBK7oePF/aYXhlQBbskJZjqWJKn2A8blN8MGkMZTJK0dxzY95Rjkp0ScMS6HsG2OziVaM0TTbF3j+jHnCWYIARnmk7xpghZXaB7zyRbIsAHRd9YvLltOcBjD7bp3sCJlgiWCcYRvWhiF8R0ge63iW0WgW9Qx8dM+1OCS0wr0P1qs3oRLBVsLCrY6tgxjv8zK88f3LDH7Asv7SBlTHOLmrZgtI5sfgvRXLj98GpME7SoVjjGqpNsebpW3zQiHzduU40JLrjgLtr9B92DwDi81o30AAAAAElFTkSuQmCC" />
                          </span>
                                           
                                        </div>
                                        <div className="flex items-center">
                                           
                                            <button className="text-gray-200">
                                                <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                   
                  <div className=''>
                    <h1 className="text-2xl font-display mt-52 text-white">Consult a doctor</h1>
                                    </div>
                                   
                                 
                                  
                                </div>
                            </div>
                            <div className="">
                                <div className="w-full p-4 pt-0 bg-white shadow-lg rounded-b-2xl ">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center">
                                     
                                           
                                        </div>
                                        
                                    </div>
                                   
                                   
                                   <Question />
                                   
                                   
                                </div>
                            </div>
                        </div>
  )
}
