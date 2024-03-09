import React from "react";

import "./home.css";



function Home(){
    return(
    <>

    
    <section class="section hero" id="home" aria-label="home"  >
         <div class="container">
  
        <div class="hero-content">
  

        
        <div class="middle">
            
            <div class="ANIMATION "> <h1>
                <span class="word " id="presents">ISTE PRESENTS  </span>
                <span class="word" id="Abhedya">ABHEDYA      3.0</span>
              </h1></div>
           
          </div>
          
  
          <h1 class="h1 hero-title ">
            Online <span class="span">Cryptic</span> Hunt
          </h1>
  
          <p class="hero-text">
            Embark on a cosmic adventure with Abhedya, an interstellar cryptic hunt challenging your logical, technical, and creative thinking. 
          </p>
  
          <a href="#readmore"><button class="btn skewBg">Read More</button></a>
  
        </div>
  
    
  
      </div>
    </section>

    <section class="section blog" id="readmore" aria-label="blog">
        <div class="container">

          <h2 class="h2 section-title">
            About The Event
          </h2>
          <div class="container2">
            <div class="container3">
           <p id="aboutcontent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ex nam quo eaque aut temporibus natus ratione, in architecto possimus expedita voluptates error cum laudantium porro eius voluptate illum iste reiciendis quasi iure voluptatibus minima. Vero ullam repellat laborum excepturi, iusto cupiditate veritatis minima laudantium tenetur minus a deserunt veniam.</p>

            </div>
          </div>
        </div>
      </section>
  </>




    
    );
}

export default Home;