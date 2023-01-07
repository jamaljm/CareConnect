import React from 'react';
import Tesseract from 'tesseract.js';
import Image from 'next/image';

function check(text) {
  const p = "para";
  const v = text.toLowerCase()
  const a = "ventolin"
  const h = "hydroc"

  if (v.includes(p)) {
    return (
    <div class="card">
        <div className="imgBx">
            <img src="https://img.freepik.com/premium-vector/tablet-capsule-medicine-icon-illustration-healthcare-medical-icon-concept-isolated_138676-882.jpg?w=2000" alt='where are you'/>
        </div>
        <div className="content">
        <div className="details">
            <h2>
                Paracetamol<br></br><span>treat fever and mild pain </span>
            </h2>
            <div className="data">
                An analgesic and antipyretic drug that is used to temporarily relieve mild-to-moderate pain and fever. It is commonly included as an ingredient in cold and flu medications and is also used on its own.


            </div>

            <div className="actionBtn">
                <button>Buy Now</button>
                <button>Know more</button>
            </div>
        </div>

        </div>


    </div>
    )
  }

  else if (v.includes(a)) {
    return (
      <div class="card">
          <div className="imgBx">
              <img src="https://img.freepik.com/premium-vector/tablet-capsule-medicine-icon-illustration-healthcare-medical-icon-concept-isolated_138676-882.jpg?w=2000" alt='where are you'/>
          </div>
          <div className="content">
          <div className="details">
              <h2>
                  ventolin<br></br><span>treat fever and mild pain </span>
              </h2>
              <div className="data">
                  An analgesic and antipyretic drug that is used to temporarily relieve mild-to-moderate pain and fever. It is commonly included as an ingredient in cold and flu medications and is also used on its own.
  
  
              </div>
  
              <div className="actionBtn">
                  <button>Buy Now</button>
                  <button>Know more</button>
              </div>
          </div>
  
          </div>
  
  
      </div>
      )
  }
  else if (v.includes(a)) {
    return (
      <div class="card">
          <div className="imgBx">
              <img src="https://img.freepik.com/premium-vector/tablet-capsule-medicine-icon-illustration-healthcare-medical-icon-concept-isolated_138676-882.jpg?w=2000" alt='where are you'/>
          </div>
          <div className="content">
          <div className="details">
              <h2>
                  ventolin<br></br><span>treat fever and mild pain </span>
              </h2>
              <div className="data">
                  An analgesic and antipyretic drug that is used to temporarily relieve mild-to-moderate pain and fever. It is commonly included as an ingredient in cold and flu medications and is also used on its own.
  
  
              </div>
  
              <div className="actionBtn">
                  <button>Buy Now</button>
                  <button>Know more</button>
              </div>
          </div>
  
          </div>
  
  
      </div>
      )
  }

  else {
    return (
      <div class="card">
          <div className="imgBx">
              <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg" alt='where are you'/>
          </div>
          <div className="content">
          <div className="details">
              <h2>
                  Sorry<br></br><span>We dont have that one yet </span>
              </h2>
              <div className="data">
                Your input is noted and our team will be working on it soon
  
              </div>
  
              {/* <div className="actionBtn">
                  <button>Buy Now</button>
                  <button>Know more</button>
              </div> */}
          </div>
  
          </div>
  
  
      </div>
      )

 
}
}


const Medicinfinder = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [image, setImage] = React.useState('');
  const [text, setText] = React.useState('');
  const [progress, setProgress] = React.useState(0);
  console.log(text)


  const handleSubmit = () => {
    setIsLoading(true);
    Tesseract.recognize(image, 'eng', {
      logger: (m) => {
        console.log(m);
        if (m.status === 'recognizing text') {
          setProgress(parseInt(m.progress * 100));
        }
      },
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        console.log(result.data);
        setText(result.data.text);
        setIsLoading(false);
      });
  };

  return (
    
    
        <div className="col">
          {!isLoading && (
            <h1 className="text">Medicine finder</h1>
          )}
          {isLoading && (
            <>
              <progress className="form-control" value={progress} max="100">
                {progress}%{' '}
              </progress>{' '}
              <p className="textloading">Converting:- {progress} %</p>
            </>
          )}
          {!isLoading && !text && (
            <>
              
             <label className='labelforinput'> <input
                type="file"
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
                className="form"/>
                Upload
                </label>
              <input
                type="button"
                onClick={handleSubmit}
                className="btn"
                value="Find"
              />
              <div className='imagebox2'>
              <img src="https://img.freepik.com/premium-vector/tablet-capsule-medicine-icon-illustration-healthcare-medical-icon-concept-isolated_138676-882.jpg?w=2000" alt='where are you'/>
              </div>
              
            </>
          )}
          {!isLoading && text && (
            <>
           <div>
              {check(text)}
            </div>
             
            </>
          )}
        </div>
  
    
  );
};

export default Medicinfinder;
