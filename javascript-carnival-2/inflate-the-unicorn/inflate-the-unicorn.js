  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

var uni0 = document.getElementById("uni0").onclick = clicked
var uni1 = document.getElementById("uni1").onclick = clicked
var uni2 = document.getElementById("uni2").onclick = clicked

var inflation = [0, 0, 0]

function clicked(event) {
    var unicorn = event.target
    var id = unicorn.id[3]        //gets the number of the unicorn, 3 refers to the 4th character in unicorn id which is the number of the unicorn.
    var idNumber = Number(id)   
        inflation[id]++

        if (inflation[id] < 4) {
        var audio = new Audio("sounds/inflate.mp3");
        audio.play(); 
        }

        if (inflation[id] == 4){         
        alert("Unicorn Number " + (idNumber + 1) + " Says Thank You!");
        inflation[id] = 0
        var audio = new Audio("sounds/pop.mp3");
        audio.play();         
        }

        unicorn.src = "./images/unicorn-" + inflation[id] + ".png"  
}
//
