import Link from 'next/link';
import React from 'react'
import { useState } from 'react'

export default function Question() {

    // // define answeroption
    

       const questions = [
      {
        questionText: "select your age range",
        answerOptions: [
          { answerText: "0-12", isCorrect: false },
          { answerText: "13-17", isCorrect: false},
          { answerText: "18-40", isCorrect: false },
          { answerText: "40+", isCorrect: false },
        ],
      },
      {
        questionText: "what you feeling?",
        answerOptions: [
          { answerText: "Physical Pain", isCorrect: false },
          { answerText: "Headache", isCorrect: false },
          { answerText: "Fever", isCorrect: false },
          { answerText: "Other", isCorrect: false },
        ],
      },
      {
        questionText: "Where do you feel pain?",
        answerOptions: [
          { answerText: "arms or legs", isCorrect: false },
          { answerText: "ear", isCorrect: false},
          { answerText: "mouth", isCorrect: false },
          { answerText: "chest", isCorrect: false },
        ],
      },
      {
        questionText: "Are you on any medications?",
        answerOptions: [
          { answerText: "yes", isCorrect: false },
          { answerText: "no", isCorrect: false},
          
        ],
      },
      
      
    ];
    	const [currentQuestion, setCurrentQuestion] = useState(0);
      const [showScore, setShowScore] = useState(false);
      const [score, setScore] = useState(0);

      const handleAnswerOptionClick = (isCorrect) => {
        isCorrect =true;
        if (isCorrect) {
          setScore(score + 1);
          console.log(score);
        }

        if(score>0){
          console.log("doc1")
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setShowScore(true);
        }
      };
    
    return (
    <>
      
        { showScore?(
                  <div class="b mt-48 mb-12 animate-bounce mx-auto h-16 w-64 flex justify-center items-center">
           <Link href="/consult" class=" text-white font-semibold z-10 flex justify-center items-center"> <div class="i h-16 w-64 bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-xl shadow-2xl flex justify-center  cursor-pointer overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
              
                  <span class="">
                <svg class="w-5 h-5 right-1.5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </span><span>Consult Now</span>
      </div>
           </Link>
            
              
    </div>

            
            ) : (
                <>
    <div>
      <h3 className="mb-3 font-semibold text-gray-900 ">{questions[currentQuestion].questionText}</h3>
<ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
    {questions[currentQuestion].answerOptions.map((answerOption) => ( <li key={answerOption.answerText} className="w-full border-b border-gray-200 rounded-t-lg">
        <div className="flex items-center pl-3">
            <input id="list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
            <label for="list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">{answerOption.answerText}</label>
        </div>
    </li>))}
   
          </ul>
          <button type="button" onClick={() => handleAnswerOptionClick()} class="px-3 mt-3 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Next</button>

                </div >
                        </>

            )}
            </>
  )
}
