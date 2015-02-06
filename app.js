var initX, initY;

bglayer = new Layer({width:644, height:1000, blur:50, image:"images/newBG.png"})

iconlayer = new Layer({x: 220, y:400,  width:189, height:189, image:"images/newIcon.png"})




iconlayer.draggable.enabled = true;

iconlayer.draggable.speedX = 0;

initX = iconlayer.x;

initY = iconlayer.y;


iconlayer.on(Events.DragMove, function() {
	iconlayer.animate({
	 properties: { opacity:0 },
	 time:.03,
  });
  return bglayer.animate({
    properties: { blur:0 },
    time:.1,
  });
});

iconlayer.on(Events.TouchEnd, function() {
  return bglayer.animate({
    properties: { blur:50 },
    time:.3,
  });
});

iconlayer.on(Events.DragEnd, function() {
  iconlayer.animate({
	 properties: { opacity:100 },
	 time:.3,
  });
  return iconlayer.animate({
    properties: {
      x: initX,
      y: initY
    },
    curve: "spring(300,18,10)"
  });
});


// Welcome to Framer

/*
imageLayer = new Layer({x:0, y:0, width:128, height:128, blur:2, image:"images/icon.png"})
imageLayer.center()
*/

// Define a set of states with names (the original state is 'default')
/*
imageLayer.states.add({
	second: {y:100, scale:0.6, rotationZ:100, blur:0},
	third:  {y:300, scale:1.3},
	fourth:	{y:200, scale:0.9, rotationZ:200},
	fifth: { y:200, scale:0.8, rotationZ:200, blur:2 }
})
*/

// Set the default animation options
/*
imageLayer.states.animationOptions = {
	curve: "spring(500,12,0)"
}
*/

// On a click, go to the next state
/*
imageLayer.on(Events.Click, function() {
	imageLayer.states.next()
})
*/