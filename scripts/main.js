
$(document).ready(function () {

var initDisplay = 0; // default value of display
var numbers = []; // array receiving the operation

$(".buttons").click(function(){ // function running on button click

  var buttonValue = $(this).attr("value"); // grab the "value" of the button clicked
  var lastValue = numbers[numbers.length - 1]; // grab the last value of the array "numbers"

  if (buttonValue === "AC"){  // resets the display and the array "numbers"
    numbers = [];
    $(".view").html(initDisplay);
  }

  else if (buttonValue === "CE"){ // delete the last element of the array "numbers"
    numbers.pop();
    if (numbers.length === 0 ){ // reset like AC if line 17 makes the array empty
      $(".view").html(initDisplay)
    }
    else $(".view").html(numbers);
  }

  else if ($(this).hasClass("operator")){ // prevents from enering two or more operators / decimal dot
    if (lastValue == "-" || lastValue == "+" || lastValue == "*" || lastValue == "/" || lastValue == "."){
      $(".view").html(numbers);
    }
    else if (numbers.length === 0 && buttonValue != "-"){ // prevents entering an operator before a number (unless it's "-", ie negative number)
      return;
    }
    else {
      numbers.push(buttonValue);
      $(".view").html(numbers);
      }
  }

  else if (buttonValue != "="){ // displays the operations
    numbers.push(buttonValue);
    $(".view").html(numbers);
  }

  else { // return the result of the operation when pressing "="
    $(".view").html(eval(numbers.join("")));
    numbers = [];
  }

})

})
