/*
 * TODO 4: Create a modularized index.js, 
 * pass in window and createjs
 */
(function(window, createjs) {
  // TODO 5: Initialize CreateJS //
  const canvas = document.getElementById("canvas");
  const stage = new createjs.Stage(canvas);

  // TODO 6: Set the framerate of the Ticker
  createjs.Ticker.framerate = 60;


  /*
   * TODO 7:CREATE AND CONFIGURE ANY DISPLAY 
   * OBJECTS AND ADD THEM TO THE DISPLAY LIST HERE
   */
  
  // INIT CREATEJS //

  

    
  // CREATE A BACKGROUND //
  const bg = new createjs.Shape();
  console.log(bg);
  bg.graphics.beginFill("rgba(255, 116, 116, 1)").drawCircle(350, 350, 375);
    
  // CREATE A CIRCLE //
  const eyeContainer = new createjs.Container();

  const leftEye = new createjs.Shape();
  const rightEye = new createjs.Shape();
  
  leftEye.graphics.beginFill("blue").drawRect(20, 20, 60, 10);

  rightEye.graphics.beginFill("#FFBF00").drawCircle(150, 20, 25);

  // ADD DISPLAY OBJECTS TO STAGE //
  eyeContainer.addChild(leftEye, rightEye);
  stage.addChild(bg, eyeContainer);


  stage.update();

  // TODO 8: Listen to the 'tick' event  //
  let tickHandler = createjs.Ticker.on("tick", onTick); // action/event, eventHandler/callback function
  

  // TODO 9: Handle the 'tick' event //
  function onTick(event) {
    update(event);
  }
  

  /*
   * TODO 10: Implement an update Function, after making 
   * changes to assets, it must call stage.update(); 
   */
  function update(event) {
    leftEye.x++;
    rightEye.x--;
    stage.update();
  }
}(window, window.createjs));
