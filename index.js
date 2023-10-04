
$(document).ready(function() {
  var buttonArray = $("button").length;

  for (var ab = 0; ab < buttonArray; ab++) {
    console.log("Adding keydown event listener to button " + ab);
    $("button").eq(ab).on("keydown", function(event) {
      console.log("Keydown event triggered.");
      var buttonInnerHtml = event.key;
      makesound(buttonInnerHtml);
      addAnimation(buttonInnerHtml);
    });
  }

  for (var ab = 0; ab < buttonArray; ab++) {
    console.log("Adding click event listener to button " + ab);
    $("button").eq(ab).on("click", function() {
      console.log("Click event triggered.");
      var buttonInnerHtml = $(this).text();
      makesound(buttonInnerHtml);
      addAnimation(buttonInnerHtml);
    });
  }
});

  function makesound(buttonInnerHtml){  
   switch (buttonInnerHtml) {
    case "w":
        var audio=new Audio("./sounds/crash.mp3")
        audio.play();        
        break;
   
        case "a":
            var audio=new Audio("./sounds/kick-bass.mp3")
            audio.play();        
            break;

        case "s":
            var audio=new Audio("./sounds/snare.mp3")
            audio.play();        
            break;
         case "d":
                var audio=new Audio("./sounds/tom-1.mp3")
                audio.play();        
                break;
         case "j":
                    var audio=new Audio("./sounds/tom-2.mp3")
                    audio.play();        
                    break;
         case "k":
                var audio=new Audio("./sounds/tom-3.mp3")
                audio.play();        
                break;
        case "l":
                    var audio=new Audio("./sounds/tom-4.mp3")
                    audio.play();        
                    break;
       default:var audio=new Audio()
       audio.play();        
       break;
   }
   
   
}


function addAnimation(keyPressed){
    var currentKey=document.querySelector("."+keyPressed);
    currentKey.classList.add("pressed");
    setTimeout(function(){currentKey.classList.remove("pressed");},500)
        
}