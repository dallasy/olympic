$(document).ready(function() {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

var tool = new Tool();

var c = Shape.Circle(200,200,80);
c.fillColor = 'block';
var text = new PointText(200,200);
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = 20;
text.content = 'hello world';
 
tool.onMouseDown = function(event) {
  var c =Shape.Circle(event.point.x, event.point.y, 20);
  var a =Shape.Circle(event.point.x-45, event.point.y, 20);
  var b =Shape.Circle(event.point.x+45, event.point.y, 20);
  var d =Shape.Circle(event.point.x-22.5, event.point.y+22.5, 20);
  var e =Shape.Circle(event.point.x+22.5, event.point.y+22.5, 20);
  c.strokeColor='black';
  a.strokeColor='blue';
  b.strokeColor='red';
  d.strokeColor='yellow';
  e.strokeColor='green';

};


  paper.view.draw();
  //console.log(shape) ;
});
