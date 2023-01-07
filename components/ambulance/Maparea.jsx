import { Map, GoogleApiWrapper, Marker, Polyline } from "google-maps-react";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";


const mapStyles = {
    
  width: "100%",
    height: "80%",
    
  
};

//firebase real-time

const firebaseConfig = {
  apiKey: "AIzaSyC-n0tIhPNZ3IqS3ygmKJ9Y80EWHp7yyFM",
//   authDomain: "ambulance-tracking-fc20c.firebaseapp.com",
//   projectId: "ambulance-tracking-fc20c",
//   storageBucket: "ambulance-tracking-fc20c.appspot.com",
//   messagingSenderId: "9526106287",
//   appId: "1:95510651477:web:829569f6e488e0950caadc",
//   measurementId: "G-E9MQ5NXQ2E",
//   databaseURL: "https://ambulance-tracking-fc20c-default-rtdb.asia-southeast1.firebasedatabase.app/",
};


const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

function Maparea(props) {
   const lat1= 10.0261;
  const lng1= 76.3125;
  const lat2= 10.0279;
  const lng2= 76.3078;
  
  const [curLatLng, setCurLatLng] = useState({ lat: 0.0, lng: 0.0 });
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [driverName, setDrivername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [pathCoordinates1, setCoordinates1] = useState([                      
    { lat : lat1, lng : lng1 },
    { lat: lat1, lng: lng1 },
  ])
  
  const [pathCoordinates2, setCoordinates2] = useState([
    { lat : lat2, lng : lng2 },
    { lat: lat2, lng: lng2 },
  ])
  
  const [pathCoordinates3, setCoordinates3] = useState([
    { lat : 10.0317, lng : 76.3087},
    { lat : 10.0317, lng : 76.3087},
  ])

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        // console.log(pos.coords)
        setCoordinates1([ { lat: lat1, lng: lng1 } , pathCoordinates1[1]])
        setCoordinates2([ { lat: lat1, lng: lng1 }  , pathCoordinates2[1]])
        setCoordinates3([ { lat: lat1, lng: lng1 }  , pathCoordinates3[1]])
        setCurLatLng({ lat: lat1, lng: lng1 });
        setLoading(false);
      });
    }
  }, [loading]);

  wait(5000).then(() => 
  {
    let i = 0.001
  
    var p1Lat = pathCoordinates1[1].lat
    var p2Lat = pathCoordinates2[1].lat
    var p3Lat = pathCoordinates3[1].lat
  
    var p1Lng = pathCoordinates1[1].lng
    var p2Lng = pathCoordinates2[1].lng
    var p3Lng = pathCoordinates3[1].lng
  
    var p1 = { lat: (p1Lat + i), lng: (p1Lng + i) }
    var p2 = { lat: (p2Lat + i), lng: (p2Lng + i) }
    var p3 = { lat: (p3Lat + i), lng: (p3Lng + i) }
  
    setCoordinates1([ { lat : lat1, lng : lng1} , p1])
    setCoordinates2([ { lat : lat1, lng : lng1} , p2])
    setCoordinates3([ { lat : lat1, lng : lng1} , p3])
  });
  

  return loading ? (
    <div>Loading...</div>
  ) : (
          <>
    <div className="bg-blue-200 rounded-sm w-full py-3 px-9">         
    <div style={{}}><span className="font-lg font-bold ">{name}</span></div>
    <div style={{}}>{driverName}</div>
                  <div style={{}}>{phoneNumber}</div>
                  </div> 
   
    <Map google={props.google} style={mapStyles} initialCenter={curLatLng} zoom={15.5}>
      <Marker />
      <Polyline
        path={pathCoordinates1}
        geodesic={true}
        options={{
            strokeColor: "#ff2527",
            strokeOpacity: 0.75,
            strokeWeight: 2,
        }}
      />
      <Polyline
        path={pathCoordinates2}
        geodesic={true}
        options={{
            strokeColor: "#0000FF",
            strokeOpacity: 0.75,
            strokeWeight: 2,
        }}
      />
      <Polyline
        path={pathCoordinates3}
        geodesic={true}
        options={{
            strokeColor: "#000000",
            strokeOpacity: 0.75,
            strokeWeight: 2,
        }}
      />

        <Marker
        onClick={()=>{
          setName("Ambulance 1")
          setDrivername("Mr Sundar")
          setPhoneNumber("+91-78343452310")
        }}
        icon={{
          url: "https://img.icons8.com/emoji/48/null/ambulance-emoji.png",
          anchor: new google.maps.Point(32, 32),
          scaledSize: new google.maps.Size(64, 64),
        }}
        position={pathCoordinates1[1]}
        />

        <Marker
          onClick={()=>{
            setName("Ambulance 2")
            setDrivername("Mr Ram")
            setPhoneNumber("+91-789787896")
          }}
          icon={{
            url: "https://img.icons8.com/emoji/48/null/ambulance-emoji.png",
            anchor: new google.maps.Point(32, 32),
            scaledSize: new google.maps.Size(64, 64),
          }}
          position={pathCoordinates2[1]}
        />

        <Marker
          onClick={()=>{
            setName("Ambulance 3")
            setDrivername("Mr Shaam")
            setPhoneNumber("+91-8989879760")
          }}
          icon={{
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAImklEQVR4nO1X+VPUyRUn+Q+S/TVlVSRbqxzCwMxwg8uNnAoiiIAi6rrllY0noutyGLkEURQBRbkFPBCFYQCFWWU4lEOIKIJQriWRQ0bwAEzySb3GmR2YGWYmRlOpoqs+xRT9Xr/Pp9/r/r7W0VkYC2NhLIyFsTAWxv/RePny5Z6y3rFfdjZNTDtWjED/Qh8MTrbC8GgdBgYGPhv6+/snOjs7GxsbG33+Y/JDQ0ORJX0TWN80CRehBMtyB2CQ1gHDYyLYxFR+VgEDAwPo6uqCWCyeAPBbrckPDg7qj4yMTA8NDeHFixd49uzZZyc8oERAQ0MDqqurv9JawLvis0Mfzh7FdOwOTO3yx/ug5XgfaIN3a6zxzt8a71Zb4a2vFd6ussSblZZ4422BCS8LTHiaY8LdDOMrzDDuysdrFz5eO/Pw2pEHiQMXEnsuxpabYszOBGO2JnhlzcErKw5GLYwxam6METMjjPCWYYS7DE+N9dGmvwStu3Y5akV+/NrF7/6Rm4Lp4wcwFRGGyfAVM+QD5Mj7yZH3scCbueTd5Mg7qSFvOUN+lMjzjRj5YVNDPF2mj1a9b9C+c2eYVgJGR0ebh4eHMTg4iOfPn3/x0hmYU0I1NTWeGpMvLi3bePvnu/8qq6hC9W3RrNq/LfoZyWlnkXjy9AxS05Bw4hQSUk4iPuUkikquyGz7+vrQ1tbGQL81Jd0n59fe3s4ECIXCDRoLSCrrmk6pGUTktV8QsC8V3Y8esYXbOx7APiwSq051wTe9RylcIi/jctl1Zt/a2orxyfcM9+/f11hAW1ubzK++vp4JqKqq+kEj8jHZgugztc8RVdaPbTmPsHFvjGzhg0cT4XGsHt4nOuZFdFwisyfSw2/GGZQJkDjzGJQJkPrJCYjRSMCx4ubp+PI+7M5/iDVH8lEhrGGLOq4MhIG1M9zjGtUi6liCTIBk8zq83hyitQDJRz+pAIFAkKaW/E8Z16NSbvQgsrALm0+3YJPc7pvau0HPzBYuUbfVQiqASmjMw4pBWwFjH/3kMpCvVkBsjmgqpvgBtmc0YeW+DFRW17IFxU3NMgEOByvUQiqgt7cX9+7dY6Df8qQlKjDXT+4QV8xL/vDZskMJpe3YfU6MkMRabNzzk2xHtkVEyQTY7b48P/5SigM/Rqk8oBINBCi7RquqqhrmF5AhmDp0UYxNKbVw35Ei2/36Ow0wD9wPrv0K6JvbwWp7nkrwg2PhunYrCi4Va3TbSFSQViGgSzX5tKIDsbkN2JFaA//Dpfh+/6+7//2eCPD8fgDXyQf6Nm4w25ypAG5QLBz9v0NO4SXqINHY2PhfFyAQCPpUCog4dW1q7+lqhMRchXv4fjQ232POtXUi8J28wPXZBtOQVAWYBETDZtUWnMnKRt/Tp7Kgn0nAc6XkD6Zc3P9jZjW2HLsC361HUF5ZJXMO37kHPCcPmHhtAWdtIjhBxxmMVx+Grd9WZF7IU/qF1VTAgBatRGVl5YhSAXuTCif/HF+AHYfiUX/nLisBKbLzixAR/VdEJyR/xHFExSch40IOnjzpnWUrD7FYrHKuX0t0dnbi7t27JGBCgfzp7MLg45n5KBcI8aS3Fz09PQog9Y8fP1Y6pwoUUBv7nnlA35K6ujpcdLWCggBJbuqzD8n7MRWxAZOb3DAZZIv3a21Z2/w+YE7fT62zryXeSltnb7n22WN2C83eAB9baPk3gORb09mttM1MK/3K8te3gKydln8PGCyBIMhPUUBT0pF/3ju0HS27QtC1wV09ebmHy7zklTxgFMmbKDxk5pJn7wGjmQdNuvMiRQGt3U/w9t1bvMrjoLt4M+7cuYOWlpZZuHXrFmprayESidjhnDuvDGSviV2LBqDyKS8vR+mm3ysXMN5fh5GMP6AiN5bVO4GI0iecboCHDx8y0G+pIFpUaqsM1dXV8843NDSgqakJHR0dbG1pvXd3d+PBgwdobm6etdbVq1eR7v2VooD7D59grG4f/l7iiStXrrDGichLHxOq8PHLyISQz1wIBAKl/yeIRCK2EUR0PpAN2VZUVKC4uBjnz59XkoG/deNlqSeKzyewtNPtQQII5BQaGgo9PT1wOByEh4ejpKRENk/lVllZyfzmgoIq+z9lTywWsx2mDFy6dAnBwcEwNDRkCAsLQ2lpKZsnkO2NGzdQWFiIzMxMRQEXc3LYJBGpqalhO0pBgoKCoKu7GHw+H46Ojgx8Pg+6uroICQmRlRH5XL9+ndXoXFAW5oL8RCIR8w0MDFQZg+JLs0UCcnJycObMmdkC7FetnXD0C4KD31rY+awB39kLZq7esLCxw9KlS+Hp6YmAgAAEB69joN/0v6VLl7AAVEJCoZClm2pXHciO6lkoFMLX11dtjJV+/jBz9oLJclcYWTtA39x2tgAzF28QqE0mkACvNTM7T4ts2LAeBQUFyM3NRXZ2NrKyMrF+fSibo13KyMhgu09CVNW7PMiO7FNTUzWOEbA+HPrmNljCtcDXxry5ArzauQ7uMLZ1Av0lAVwzc5ZS2omCgnz2BS4qKkJeXh47uGlpp9gcpdrf35+dE6rZmzdvqgXZkb2Li4vGMTy8fPAnIx4WG3DwRz2j2QJ4Th6RHDsXGFp+C56TJ/jOnli0aBGrRUon1R0FpFuHDm1WVhZOnDjB5hwcHNjhpp2jwHQY1YFsac1FWsTQNzAYdlu5+sOaoNCnTq4r1s0SYGjt/ju+vVsb1RbP0YNlYLGurmzxc+fOIT8/n90WdJjS09ORlJTE5sjGYJkR9MxstMbX3yzRNMYbHR2d3+hoO2xtbW5TCqke6Rqj+5fqnW6WuLg4ll47O9tarRf+UjE4HI4nHSI6TFSPycnJSExMRHx8HEJDQ9gBMzU1df8UAZzPHYPHM41VdcVxudzoTyH/xWKYmJh42NnZ3HJ2dp4gUEo/def/FzEWxsLQURz/BjNeGLUWmljKAAAAAElFTkSuQmCC",
            anchor: new google.maps.Point(32, 32),
            scaledSize: new google.maps.Size(64, 64),
          }}
          position={pathCoordinates3[1]}
        />
    </Map>

    </>
    
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCK0y5Dmu-kpFGQ-wvT3i7zDUCd6iyj_n4",
})(Maparea);
