import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Medicinbanner() {
  return (
      <div className="w-full sm:w-1/2 xl:w-1/4">
                           <div className="">
                                <div className="w-full min-w-40 p-4 bg-[url('/images/medbg.jpg')] bg-hero bg-no-repeat bg-cover bg-center rounded-2xl dark:bg-gray-700">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center">
                                            <span className="relative p-2 bg-blue-100 rounded-xl">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlklEQVR4nO3VPS9DURwG8GfXwcsuYSq+QpOr1ReJeFlJGGwMtLe43Tr6CERCwtfoItEoddXVdNDWvY2RLr32cx5pkTBUz8WdeJJnPb/8T07+B/gPAFoYoYVVWtB5gwVWEPi1i2EFAVHGsbAgpAV2egOKEpo0sfRzoIwBUYYpb98OfwNkCZTXr/0RRAVAmqAookkLfb4B8gqURZBFzPoKyEuQBWwqA63dkGdAXoC8wIoS0JjP9jcSRtE9Hst7AUQBgmcYVgYaiQydhEH3KJhXATrIOY48A07coB3foXsYzCsAVz1fVjfAjrW7zdb+xGlXoIASzzH4JfCoZQPOdMbsBtxH293i88F47ltAZ4pp46QXUJ9Ksx5J090P5j4BlxjqCTzMZEaduCFUgFpEZy2s090L5pSBzhRxY9ULUA2nWNWSZisTGoBq7JiR8gqUQ2vqQDtOwpj3FWinomUDdmyn6RvwHju6teQr8J77qL5Yj6SfPgJ3k0lR1VKHFW39975XK5buq4f1uVoklbwLJ5ft6EbvZYe/kBdnDaQH1f2PEwAAAABJRU5ErkJggg=="/>                          </span>
                      </div>
                                        <div className="flex items-center">
                                           
                                            <button className="text-gray-200">
                                               
                                            </button>
                                        </div>
                                    </div>
                                   
                  <div className='flex mt-64 mb-6 px-5 justify-center flex-col text-center'>
                      <h1 className="text-2xl font-semibold mt-44 font-display text-white">Find any Medicin</h1>
                      
                        <Link href="/medicine"><button class="inline-flex font-body w-full gap-2 mt-4 justify-center items-center px-4 py-4 bg-gradient-to-r from-blue-700 to-blue-400 shadow-sm hover:bg-red-700 text-white text-sm font-medium rounded-md">
	<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABAklEQVR4nM2VTQ6CMBCFewO4g7pED6AeBPbqxp+NiSsToxsTjoFeSt3qNT7TpMZSQJlGiJNM0j763mNKmFGqrQBCYApsrIxq8AYOR2sEZeI3IAOOVkY1DPoOJzNabxNgph94l+8EcAImNrDTae3HwNop/VPqs+MqvRwArIALkDqlf8rUcBZ1DB5ARwkD6AH3KoPo9UEBLPwiXOPqlb0Jv1hXhkOIhbjYIBHiYgN8139pEEtwH4NEgrd7RTT9o1FsFd2vpQpbhW2wBK7AXtBND4Yz/2pg9iNgK+im+uywSk+ZMdfowAnNmDt5zOTI4ZzNdRXmcqBdPWayNrA5WiMv3mQ8Aao9ECbJn1NzAAAAAElFTkSuQmCC"/>
	Scan now
  </button></Link>

                                    </div>
                                   
                                 
                                  
                                </div>
                            </div>
                       
                        </div>
  )
}
