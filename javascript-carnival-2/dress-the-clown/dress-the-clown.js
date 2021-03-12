  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

document.onkeydown = checkKey;

function checkKey (e) {
    

    if (e.keyCode == '38') {
        // up arrow
        selectParts (-1)
    }
    else if (e.keyCode == '40') {
        // down arrow
        selectParts (+1)
    }
    else if (e.keyCode == '37') {
       // left arrow
       changeLooks (-1)
    }
    else if (e.keyCode == '39') {
       // right arrow
       changeLooks (+1)
    }
  }

    var indexes = [0, 0, 0]

    var verticalIndex = 0

    var head = document.getElementById("head")
    var body = document.getElementById("body")
    var shoes = document.getElementById("shoes")
    var arrow = document.getElementById("arrow")

    var imgs = [head, body, shoes, arrow]
    var strings = ["head", "body", "shoes", "arrow"]

    //shift is the input direction of the arrow buttons
    function changeLooks (shift) {

      var index = indexes[verticalIndex]
      var image = imgs[verticalIndex]
      var str = strings[verticalIndex]
     
        index += shift

        if (index < 0) 
            index = 5

        if (index > 5) 
            index = 0
        
      indexes[verticalIndex] = index

      image.src = "./images/" + str + index + ".png"  
    }
    
    //this function selects which part of the body we're looking at
    function selectParts (shift) {
        verticalIndex += shift       

        if (verticalIndex < 0 )
            verticalIndex = 2
          
        if (verticalIndex > 2)
            verticalIndex = 0 
            
            arrow.src = "./images/arrow" + verticalIndex + ".png"  
    }
