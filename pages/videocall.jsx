import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Video from '../components/videocall/Videocall'

export default function videocall() {
  return (
    
<main className="relative  h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
    <div className="flex items-start justify-between">
     <Sidebar />
              <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                <Navbar />
                <div className="h-screen w-full pt-2 pb-24 pl-2 pr-2 sm:overflow-hidden overflow-auto md:pt-0 md:pr-0 md:pl-0">
                    <div className="flex w-full flex-col gap-5 flex-wrap sm:flex-row ">
                          <Video />
                       {/* <Ambulancebanner />
                       <Medicinbanner /> */}
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
