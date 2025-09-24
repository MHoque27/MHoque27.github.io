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
  bg.graphics.beginFill("rgba(0, 98, 255, 1)").drawCircle(350, 350, 375);
    
  // CREATE A CIRCLE //
  const eyeContainer = new createjs.Container();
  const eyebrowContainer = new createjs.Container();

  const lTear = new createjs.Shape();
  const rTear = new createjs.Shape();
  const rEyebrow = new createjs.Shape();
  const lEyebrow = new createjs.Shape();
  const lSad = new createjs.Shape();
  const rSad = new createjs.Shape();
  
  
  lTear.graphics.beginFill("blue").drawCircle(600, 175, 50); //x,y, w, h 
  rTear.graphics.beginFill("blue").drawCircle(300, 175, 50);
  lTear.scaleY = 1.5;
  rTear.scaleY = 1.5
  lTear.scaleX = 0.75;
  rTear.scaleX = 0.75;

  lEyebrow.graphics.beginFill("black").drawCircle(225, 200, 75);
  rEyebrow.graphics.beginFill("black").drawCircle(450, 200, 75);

  lSad.graphics.beginFill("rgba(0, 98, 255, 1)").drawCircle(175, 110, 75);
  rSad.graphics.beginFill("rgba(0, 98, 255, 1)").drawCircle(500, 110, 75);

  // ADD DISPLAY OBJECTS TO STAGE //
  eyeContainer.addChild(lTear, rTear);
  eyebrowContainer.addChild(rEyebrow, lEyebrow);
  stage.addChild(bg);
  stage.addChild(eyeContainer);
  stage.addChild(eyebrowContainer);
  stage.addChild(lSad, rSad);


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
    lTear.y = lTear.y + 4;
    if (lTear.y > 500) {
      lTear.y = 0;
    }
    rTear.y = rTear.y + 3;
    if (rTear.y > 500) {
      rTear.y = 0;
    }
    
    

    stage.update();
  }
}(window, window.createjs));
