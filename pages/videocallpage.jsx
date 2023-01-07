import React, { useEffect } from 'react'
import Sidebar from '../components/sidebar/2'
import Navbar from '../components/navbar/Navbar'
import Card from '../components/ambulance/Ambcard'
import Ambulancebanner from '../components/ambulance/Maparea'



export default function videocallpage() {

    function getLocalStream() {
  navigator.mediaDevices
    .getUserMedia({ video: false, audio: true })
    .then((stream) => {
      window.localStream = stream; // A
      window.localAudio.srcObject = stream; // B
      window.localAudio.autoplay = true; // C
    })
    .catch((err) => {
      console.error(`you got an error: ${err}`);
    });
        
       
    }
     useEffect(() => {
            getLocalStream();
        }, []);

  return (
    <main className="relative h-screen sm:overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
    <div className="flex items-start justify-between">
     <Sidebar />
              <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                <Navbar />
                <div className="h-screen w-full pt-2 pb-24 pl-2 pr-2 overflow-hidden md:pt-0 md:pr-0 md:pl-0">
            <div className="flex w-full h-full flex-col gap-5 flex-wrap sm:flex-row ">
                          <iframe
                              src="https://careconnect-vc.vercel.app/"
                              width="100%"
                              height="100%"
                              allow="camera; microphone"
                                ></iframe>

                       {/* <Medicinbanner /> */}
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
