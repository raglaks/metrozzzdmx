
	(function() {
    var canvas = document.getElementById('view'),
            context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
             */
            drawStuff(); 
    }
    resizeCanvas();

    function drawStuff() {
            // do your drawing stuff here

	// zdog-demo.js

	// create illo
	let illo = new Zdog.Illustration({
	  // set canvas with selector
	  element: '.zdog-canvas',
	  dragRotate: true,
	});

for(let j = 0; j < 20; j++){
for(let i = 0; i < 20; i++){
  Object.assign({}, new Zdog.Box({
    addTo: illo,
    stroke: false,
    frontFace: "#D04B8C",
    rearFace: '#C25',
    topFace: '#EA0',
    bottomFace: "EA0",
    width: 30,
    height: 30,
    depth: 30,
    translate: {x : i*50, y : j*50},
	rotate: { x : Zdog.TAU / 8, y : Zdog.TAU / 8}
  }))
}
}

	// update & render
	illo.updateRenderGraph();

	function animate() {
	  // rotate illo each frame
	  //illo.rotate.z += 0.03;
	  illo.updateRenderGraph();
	  // animate next frame
	  requestAnimationFrame( animate );
	}
	// start animation
	animate();

    }
})();