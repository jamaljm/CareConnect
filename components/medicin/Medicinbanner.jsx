import React from 'react'

export default function Medicinbanner() {
  return (
      <div className="w-full sm:w-1/2 xl:w-1/3">
                            <div className="mb-4">
                                <div className="p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                    <div className="flex flex-wrap overflow-hidden">
                                        <div className="w-full rounded shadow-sm">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="text-xl font-bold text-left text-black dark:text-white">
                                                    Dec 2021
                                                </div>
                                                <div className="flex space-x-4">
                                                    <button className="p-2 text-white bg-blue-500 rounded-full">
                                                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                    <button className="p-2 text-white bg-blue-500 rounded-full">
                                                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="-mx-2">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                    <p className="font-bold text-black text-md dark:text-white">
                                        Messages
                                    </p>
                                    <ul>
                                        <li className="flex items-center my-6 space-x-2">
                                            <a href="#" className="relative block">
                                                <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                            <div className="flex flex-col">
                                                <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                                                    Charlie Rabiller
                                                </span>
                                                <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                                                    Hey John ! Do you read the NextJS doc ?
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-center my-6 space-x-2">
                                            <a href="#" className="relative block">
                                                <img alt="profil" src="/images/person/5.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                            <div className="flex flex-col">
                                                <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                                                    Marie Lou
                                                </span>
                                                <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                                                    No I think the dog is better...
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-center my-6 space-x-2">
                                            <a href="#" className="relative block">
                                                <img alt="profil" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                            <div className="flex flex-col">
                                                <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                                                    Ivan Buck
                                                </span>
                                                <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                                                    Seriously ? haha Bob is not a child !
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-center my-6 space-x-2">
                                            <a href="#" className="relative block">
                                                <img alt="profil" src="/images/person/7.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                            <div className="flex flex-col">
                                                <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                                                    Marina Farga
                                                </span>
                                                <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                                                    Do you need that design ?
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
  )
}
