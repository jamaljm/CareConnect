import React from 'react'
import Card1 from '../consult/Card11'
import Card2 from '../consult/Card22'
import Card3 from '../consult/Card33'
import Card4 from '../consult/Card44'
import Card5 from '../consult/Card55'

export default function consultbaner() {
  return (
     <div className="w-full sm:w-1/2 xl:w-1/3">
                            <div className="">
                                <div className="w-full h-screen bg-white rounded-t-2xl">
                                    <div className="flex py-5 gap-4 flex-col px-5 items-center justify-between mb-6">
                                       <Card1 />
                                       <Card2 />
                                       <Card3 />
                      <Card4 />
                       
                                     
                                    </div>
                                   
                 
                                   
                                 
                                  
                                </div>
                            </div>
                            
                        </div>
  )
}
