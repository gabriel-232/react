import './Home.css';
import React from 'react';

function Home (){
   return (
      <div>

         <div className="imagine">
         <img src="download.jpg"alt="Graduation pict"></img>
         <div className='get'>
            <h2>Hello,</h2><h1>Welcome to AITI-KACE Students<br/>
            Project Tracker Repository</h1> <br></br>
            <div>
                           <button>Get Started</button>


            </div>
            </div>
          </div>
            
            <div className="name">
               <h2>Our Yearly Projects</h2>
            </div>

            <div className="mine2">
               <div className='first'>
                  <div className="list">
                  <img src="\images\pexels-emily-ranquist-1205651.jpg"alt="Graduation pict" width="300px"></img>

                  <h2>2022 Cohorts</h2>
                </div>

                  <div className="list">
                  <img src="\images\pexels-feedyourvision-1184580.jpg"alt="Graduation pict" width="300px"></img>
                     <h2>2021 Class</h2>
                  </div>

                  
                  <div className="list">
                  <img src="images\pexels-joshua-mcknight-1139317.jpg"alt="Graduation pict" width="300px"></img>
                     <h2>2021 Class</h2>
                  </div>
            </div>
            
            <div className='second'>

                  <div className="list">
                  <img src="images\pexels-muhammadtaha-ibrahim-2517759.jpg"alt="Graduation pict" width="300px"></img>
                     <h2>2021 Class</h2>
                  </div>

                  <div className="list">
                  <img src="images\pexels-rodnae-productions-7713133.jpg"alt="Congratulation"width="300px"></img>
                     <h2>2020 Class</h2>
                  </div>

                  <div className="list">
                  <img src="\images\pexels-rodnae-productions-7713351.jpg"alt="co" width="300px"></img>
                     <h2>2019 Class</h2>
                  </div>

            </div>

            <div className='third'>
            <div>
                  <div className="list">
                  <img src="/images/peace.jpg"alt="do" width="300px"></img>
                     <h2>2018 Class</h2>
                  </div>


                  <div className="list">
                  <img src="/images/scaled.jpg"alt="blessed" width="300px"></img>
                     <h2>2017 Class</h2>
                  </div>

                  <div className="list">
                  <img src="/images/health.jpg"alt="baby" width="300px"></img>
                     <h2>2016 Class</h2>
                  </div>

                  </div>
                  </div>
               </div>

            </div>
   )
};
export default Home;
