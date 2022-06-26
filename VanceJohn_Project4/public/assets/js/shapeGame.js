

 // access the canvas element and its context
 const canvas = document.getElementById("game_canvas");
 const context = canvas.getContext("2d");
 const radius = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70];
 const tri = [50, 100, 150, 200];
 const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'cyan', 'pink'];
 const shape = ['circle', 'square', 'rectangle', 'oval', 'triangle', 'line'];
 const line_width = [5, 7, 9, 11, 13];


 // add click handler
 canvas.onclick = function (e) {
     var pos = getMousePos(canvas, e);     // get position as before
     var ran_shape = shape[Math.floor(Math.random() * shape.length)];
     context.fillStyle = colors[Math.floor(Math.random() * colors.length)]

     if (ran_shape == 'circle') {
         //fill a circle
         context.beginPath();
         var rad = radius[Math.floor(Math.random() * radius.length)]
         context.arc(pos.x, pos.y, rad, 0, 2 * Math.PI); // use pos object directly like this
         context.fill();
         context.stroke();
         return false;
     }
     else if (ran_shape == 'rectangle') {
         context.beginPath();
         var width = radius[Math.floor(Math.random() * radius.length)];
         var height = radius[Math.floor(Math.random() * radius.length)];
         context.fillRect(pos.x, pos.y, width, height);
     }
     else if (ran_shape == 'oval') {
         context.beginPath();
         var width = radius[Math.floor(Math.random() * radius.length)];
         var height = radius[Math.floor(Math.random() * radius.length)];
         context.ellipse(pos.x, pos.y, width, height, Math.PI / 4, 0, 2 * Math.PI);
         context.fill();
     }
     else if (ran_shape == 'triangle') {
         var x2 = tri[Math.floor(Math.random() * tri.length)];
         var y2 = tri[Math.floor(Math.random() * tri.length)];
         context.beginPath();
         context.moveTo(pos.x, pos.y);
         context.lineTo(pos.x, y2);
         context.lineTo(x2, y2);
         context.closePath();
         context.fill();
     }
     else {
         //context.strokeStyle = colors[Math.floor(Math.random() * colors.length];
         //context.lineWidth = line_width[Math.floor(Math.random() * line_width.length];
         var x1 = tri[Math.floor(Math.random() * tri.length)];
         var y1 = tri[Math.floor(Math.random() * tri.length)];
         context.lineWidth = 10;
         context.strokeStyle = 'red';

         context.beginPath();
         context.moveTo(pos.x, pos.y);
         context.lineTo(x1, y1);
         context.stroke();
     }
 }


 function getMousePos(canvas, evt) {
     var rect = canvas.getBoundingClientRect();
     return {
         x: evt.clientX - rect.left,
         y: evt.clientY - rect.top
     };
 }