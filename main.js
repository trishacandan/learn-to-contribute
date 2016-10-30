document.addEventListener('DOMContentLoaded', function () {
  // write your code below here
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
  
  var p = document.getElementById("first-paragraph");
  p.style.color = "red";
  
  var names = ["Dean", "Sam", "Cass"];

  names.forEach ( function ( dude ) { 
    var p = document.createElement("p");
    var text = document.createTextNode( dude );

    p.appendChild(text);

    var b = document.getElementsByTagName("body");
    b[0].appendChild(p);
  }); 
});
