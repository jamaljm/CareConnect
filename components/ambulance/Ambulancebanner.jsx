import React from 'react'
import Link from 'next/link'



export default function Ambulancebanner() {
  return (
    <div className="w-full sm:w-1/4 xl:w-1/3">
                           <div className="">
                                <div className="w-full shadow-lg min-w-40 p-4 bg-[url('/images/map.jpg')] bg-hero bg-no-repeat bg-cover bg-center rounded-2xl ">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center">
                                            <span className="relative p-2 bg-blue-100 rounded-xl">
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAADU0lEQVR4nO2VXUgUURTHt4Jegh6iXqqnHnTpIUjY0rKwZlb8AEtx090NBWclW1HXEBLKj9SoTPFFSkmzTDGN1AfzK3F1nRl3ZrW0FEQ0TXGbWbYgkxQtT9xbprkf7kpaDx74M2fuvef8uB/nXolky/5n+0rIfGYI2SDr6TnQJZV6bxr4y1lZ9wxxDFipFFhPT3bzwIRsbAnMSKVjfyWp0Wg92MULh5xpOvA091nuM8H4kRMMEcChNsMr8751AVl2Yg/Ni/0ML8J6RXMiz7LWA26BGc6SuDpRNzMJozl3wapWgFV9AUZz8nCbPeijagPUNvYBzQm9LX0fdrkBFjNXJmK7p8ASpQa0l3P5N7GQb4lW477VYEVcCgRHx0Nt4xugeaGhpgZ2rAs8nFeEQUgLLQ1YS//D+UV2wXKVBn9bO98Bwwt31gU2a7Uwl5sF3/p7YfGTFQv5qM0cr3UIRqJSssHAmoE1CZfcBk8l6WD2ShzMP34A30eGsZCP2qZ0yU7BSCnZ99B+zzOcQLgFHnhY53CpB8rq1wQj5d5/BjQvfjRwFg+XwUjjaVkYNJsUi4X88evZdk+1PbC/OhZKqzqA4cRRfc/UXpfBSP1VrTCeno2FfEc1fKOgAlJvFdsoPa8MOn9WQbvdk843vb3d09wPGym+ofeiDXgySdextIcbpUldctu/ASfpOmzAgyV1xUOF5bCRGiypK3bpcDXrR6C0Sg9P602oJl16KNoM41BW3QmVtUYwdJv/7OfETBswzQvpKwcVlbdCUNTlFbdRDrTT751CnzxnISQm4XeMOuEaNLUPL79evJBhO2OjcH5pQIt+BENJJQXegaFwOkyFE6HScARFV2SoRodjfILCwfdcJI5JTC9Yfng4i8JuLdMmIZnmhabCshd9KMg7MAw8vLxBKvPFSSK0V6dpTnxpT5W1nBGNORkSgWM8vHyAiIiB4CjtAsMLLQwnpgLANokz84+IPYGSoJki6FG/gF/LRzU7iiEjY/ajMWfCo+Dw8VNwxJcAUqUBUqkZcgpbaRkZGdtJJWVYdQUuEqpY0lkcqaIqVl+bcpWGchmMLECt3k2qqHxSSb1GM/WPpORrxSgUip1yJZUmV2lMcqVGT0ZqlG5Bt0yyAfYDB04s31kUcKEAAAAASUVORK5CYII=" />
                          </span>
                      </div>
                                        <div className="flex items-center">
                                           
                                            <button className="text-gray-200">
                                               
                                            </button>
                                        </div>
                                    </div>
                                   
                  <div className='flex mt-64 mb-5 px-5 justify-center flex-col text-center'>
                      <h1 className="text-2xl font-semibold font-display mt-44 font-2xl text-black">Ambulanace</h1>
                      
                       <Link href="/ambulance"> <button class="inline-flex font-body gap-3 w-full mt-4 justify-center items-center px-4 py-4 bg-gradient-to-r from-red-700 to-red-400 shadow-sm hover:bg-red-700 text-white text-sm font-medium rounded-md">
	<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAADU0lEQVR4nO2VXUgUURTHt4Jegh6iXqqnHnTpIUjY0rKwZlb8AEtx090NBWclW1HXEBLKj9SoTPFFSkmzTDGN1AfzK3F1nRl3ZrW0FEQ0TXGbWbYgkxQtT9xbprkf7kpaDx74M2fuvef8uB/nXolky/5n+0rIfGYI2SDr6TnQJZV6bxr4y1lZ9wxxDFipFFhPT3bzwIRsbAnMSKVjfyWp0Wg92MULh5xpOvA091nuM8H4kRMMEcChNsMr8751AVl2Yg/Ni/0ML8J6RXMiz7LWA26BGc6SuDpRNzMJozl3wapWgFV9AUZz8nCbPeijagPUNvYBzQm9LX0fdrkBFjNXJmK7p8ASpQa0l3P5N7GQb4lW477VYEVcCgRHx0Nt4xugeaGhpgZ2rAs8nFeEQUgLLQ1YS//D+UV2wXKVBn9bO98Bwwt31gU2a7Uwl5sF3/p7YfGTFQv5qM0cr3UIRqJSssHAmoE1CZfcBk8l6WD2ShzMP34A30eGsZCP2qZ0yU7BSCnZ99B+zzOcQLgFHnhY53CpB8rq1wQj5d5/BjQvfjRwFg+XwUjjaVkYNJsUi4X88evZdk+1PbC/OhZKqzqA4cRRfc/UXpfBSP1VrTCeno2FfEc1fKOgAlJvFdsoPa8MOn9WQbvdk843vb3d09wPGym+ofeiDXgySdextIcbpUldctu/ASfpOmzAgyV1xUOF5bCRGiypK3bpcDXrR6C0Sg9P602oJl16KNoM41BW3QmVtUYwdJv/7OfETBswzQvpKwcVlbdCUNTlFbdRDrTT751CnzxnISQm4XeMOuEaNLUPL79evJBhO2OjcH5pQIt+BENJJQXegaFwOkyFE6HScARFV2SoRodjfILCwfdcJI5JTC9Yfng4i8JuLdMmIZnmhabCshd9KMg7MAw8vLxBKvPFSSK0V6dpTnxpT5W1nBGNORkSgWM8vHyAiIiB4CjtAsMLLQwnpgLANokz84+IPYGSoJki6FG/gF/LRzU7iiEjY/ajMWfCo+Dw8VNwxJcAUqUBUqkZcgpbaRkZGdtJJWVYdQUuEqpY0lkcqaIqVl+bcpWGchmMLECt3k2qqHxSSb1GM/WPpORrxSgUip1yJZUmV2lMcqVGT0ZqlG5Bt0yyAfYDB04s31kUcKEAAAAASUVORK5CYII="/>
	Find Nearest Ambulance
  </button></Link>

                                    </div>
                                   
                                 
                                  
                                </div>
                            </div>
                       
                        </div>
  )
}
