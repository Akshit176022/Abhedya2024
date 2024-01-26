import React from "react";



function Home(){
    return(
    <>
        <article>

      

<section class="section hero" id="home" aria-label="home"> 
 <div class="container">

    <div class="hero-content">

      <p class="hero-subtitle">Abhedya 3.0</p>

      <h1 class="h1 hero-title">
        Online <span class="span">Cryptic</span> Hunt
      </h1>

      <p class="hero-text">
        Embark on a cosmic adventure with Abhedya, an interstellar cryptic hunt challenging your logical, technical, and creative thinking. 
      </p>

      <button class="btn skewBg">{/*<a  href="#readmore">*/}Read More</button>

    </div>

    <figure class="hero-banner img-holder" style={{width: 700, height: 700}}>
       <img src="../../../../React_folder/public/hero2.png" width="700" height="700" alt="hero banner" class="w-100"/> 
    </figure>

  </div>
</section>
</article>

    </>



    
    );
}

export default Home;