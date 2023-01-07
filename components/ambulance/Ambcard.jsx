import React from 'react'
import Cardamb from './Ambulancecard'
import AC1 from './AC1'
import AC2 from './AC2'
import AC3 from './AC3'
import AC4 from './AC4'


export default function Ambcard() {
  return (
   <div className="w-full sm:w-1/2 xl:w-1/3">
                            <div className="">
                                <div className="w-full sm:h-screen h-full bg-white rounded-t-2xl">
                                    <div className="flex w-full py-5 gap-4 flex-col px-5 items-center justify-between mb-6">
                                       <AC1 />
                                       <AC2 />
                                       <AC3 />
                      <AC4 />
                       
                                     
                                    </div>
                                   
                 
                                   
                                 
                                  
                                </div>
                            </div>
                            
                        </div>
  )
}
