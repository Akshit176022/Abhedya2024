import React from "react";
import "./game.css";

function game (){
    return(
        <>
<div className="gamecont">
<div class="level-1">

  <div class="game-container">
    <div className="level1">LEVEL1</div>
    <div class="question-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta numquam ullam laboriosam culpa est expedita cupiditate dolorum a, delectus quidem doloribus iusto distinctio exercitationem molestiae possimus fugiat consequatur, obcaecati nihil vitae nemo omnis in assumenda. Omnis tempora expedita repudiandae suscipit dolores possimus architecto placeat ab error, illum molestiae modi voluptas.</div>
    <input type="text" placeholder="Type your answer"/>
    <button disabled>Submit Answer</button>
  </div>
</div>
</div>



      

        </>

    );
}

export default game;