document.addEventListener('DOMContentLoaded', function () {
  // write your code below here
  var x = 53;
  var name="Dean"; 
  console.log(name)
  var fruit= ["apple", "banana", "orange"]
  console.log(fruit);
  
  function add2numbers ( first, second ) {
    return first + second;
  }
  
  console.log( add2numbers( 3, 6 ) );
  
  fruit.forEach( function (element){

  console.log( element + " taste pretty good ");
  
  });
  
});
