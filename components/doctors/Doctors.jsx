import React from 'react'
import Card1 from '../consult/Card1'
import Card2 from '../consult/Card2'
import Card3 from '../consult/Card3'
import Card4 from '../consult/Card4'
import Card5 from '../consult/Card5'
import Card6 from '../consult/Card6'
import Card7 from '../consult/Card7'


export default function Doctors() {
  return (
     <div className="w-full sm:w-full xl:w-full">
                            <div className="">
                                <div className="w-full h-screen bg-white rounded-t-2xl">
                                    <div className="flex w-full py-5 gap-4 flex-col sm:flex-row flex-wrap px-5 items-center justify-start mb-6">
                                       <Card1 />
                                       <Card2 />
                                       <Card3 />
                      <Card4 />
                       <Card5 />   
                       <Card7 />
                                     
                                    </div>
                                   
                 
                                   
                                 
                                  
                                </div>
                            </div>
                            
                        </div>
  )
}
