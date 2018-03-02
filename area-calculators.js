
function calculateRectangleArea(length, width){
  if (length < 0 || width < 0 ) {
    return undefined;
  } else {
    return length * width;
  }
}

function calculateTriangleArea(base, height){

  if ( base < 0 || height < 0) {
    return undefined;
  } else {
    return base * height / 2;
  }
}

function calculateCircleArea(radius){
  if ( radius < 0) {
    return undefined;
  } else {
    return (Math.pow(radius, 2) * Math.PI);
  }
}


/*

rectangle: length × width
triangle: base × height / 2
circle: π × radius2

To access the value of π in your JavaScript code, use Math.PI.

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined


*/



