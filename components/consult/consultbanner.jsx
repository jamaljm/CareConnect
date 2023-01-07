import React from 'react'
import Question from './Question'

export default function Consultbanner() {
  return (
     <div className="w-full sm:w-1/2 xl:w-1/3">
                            <div className="">
                                <div className="w-full min-w-40 p-4 bg-[url('/images/signupbg.jpg')] bg-hero bg-no-repeat bg-cover bg-center rounded-t-2xl">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center">
                                            <span className="relative p-2 bg-blue-100 rounded-xl">
                                               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADr0lEQVR4nO2Wy0/UQBjAJ/F103jGI3pQvPgPeKEHDx65LLuLstsufe2z064C24WYGDWoRHwdCGfccOSEeBRNTDAR22jiI/FxEhTwRDRjvtl2Ydml2Z20DSb7Jb/Q9Ntpv9/wzXQQ6kQnOuF/GPZZhK1JhO0VpNu/KfTauosKVg/at6G+P4Kw9QBh6y/SbdIc6w/C9hQyVw6jfVe8bj3bu/BdYGtxf0no1sOWi69J2PdCmFU7jXT7Ra2X4VqzVZqr73mPtvFoJ/3tmWCKz73rQth67VHAMv0NBCzYtouvcTuoxehV/LZE9b/0tln+2K2P5Oz8KuXozQ97PeON/wLVtmm1DRSE7c1mOSj83OJPSs/8j73Gb/gvgK2XLc8ktpdoEewC6wEI1M+oZyHV3zZtIZCFsTAm3BbCbQjADMIXlnURY3si8BbynEloITge0C2RYRstrJz2XwD2+XYWMZW2p9qffWsSBRLVrXG5hSKWa8cB+KvbT9sQWEDCq0MosICPlLfE9ofMDZCA44FnO8FhzpoMtng36KzSfX6JLuzq4n5O73kdxOB4AF9Y2GG2x8H1RDA93yRU3TyhGGMVpTi2oRbHiV/Q5xljc2k8fhIFWbxslFcVo0yCAp6funqtvgV3RF/fkwOyUZ4cuTFFXFoWkHGpIusmCRxcmm32frF4/biklxdkvUyYBCSttCHhEgkcrfSr4d1Fs1vWTEvCJv0Nk4CojRK/uPt4hnz++p1y59FMQx7VvdfslQqlNUkDuWqeSWCoMEL84tPX72RtY5Py6cu3hjxyiy+MCqI2uiUWRolYGKFAnk0gP0z8okFgV567cJFSk8qP1HKp/DCbQCp3lfjF7QfTtHBg4v50Q55zBaDg3HBDnklAyF4hYcE5AlBsQz5TZBPgM0USFpwjIGSLtODtnEH4tMEmkEwbJCw4RwCK5Wv39SqqziaQUDEJC84RgGKBuryCGQUUjYQF5whAsVU0MgjIQIFNAAaGBecIuAUDlwEJyLMJwMCw4ByB3fcviTkKk4A7OAw4R6Du/lCWDDgwCbiDwwC57xSzQnwouzUwlCEDqQyJOzAJuIPDAO2IGK/0xoX0WlxIEyAmqIwCfHrdfUiQxIR0w3E6mpC6o7xixXiFRHmFTSDKq3MxXiVBE+WVSrP3R0TxeH9CWuhPymwCsaR8qj+p/IgmFRIc8irM9l41nDfNg5GEdJ9JACIeT3VFEuJsJCGu9yck4hfwvMigWPEqvhOd6EQn0H8T/wDCcvOxn2QmtwAAAABJRU5ErkJggg=="/>
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
                    <h1 className="text-2xl font-semibold mt-52 text-white">Consult a doctor</h1>
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
