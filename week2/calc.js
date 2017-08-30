/*
 * Implement all your JavaScript in this file!
 */
// Get all the keys from document
var operators = ['+', '-', 'x', '÷'];
var inputMemo = '';

// Add onclick event to all the keys and perform operations
$('button').click(function(e) {
    var btnVal = $(this).html();
    // Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
    // If clear key is pressed, erase everything
    if(btnVal == 'C') {
      $('#display').val('');
      inputMemo = '';
    }
    
    // If eval key is pressed, calculate and display the result
    else if(btnVal == '=') {
      var equation = inputMemo;
      var lastChar = equation[equation.length - 1];
      
      // Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
      equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
      
      // Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
      if(operators.indexOf(lastChar) > -1)
        equation = equation.replace(/.$/, '');
      
      if(equation) {
        console.log('The legal equation is: ' + equation + ' and the result is : ' + eval(equation) );
        inputMemo  = parseFloat(eval(equation));
        $('#display').val(eval(equation));
      }
        
    }
    
    // Basic functionality of the calculator is complete. But there are some problems like 
    // 1. No two operators should be added consecutively.
    // 2. The equation shouldn't start from an operator except minus
    // 3. not more than 1 decimal should be there in a number
    
    // We'll fix these issues using some simple checks
    
    // indexOf works only in IE9+
    else if(operators.indexOf(btnVal) > -1) {
      // Operator is clicked
      // Get the last character from the equation
      console.log('the operator pressed down is:' + btnVal);
      var lastChar = inputMemo[inputMemo.length - 1];
      
      // Only add operator if input is not empty and there is no operator at the last
      if(inputMemo != '' && operators.indexOf(lastChar) == -1) {
          inputMemo += btnVal;
        // $('#display').val(btnVal);
        }
      // Allow minus if the string is empty
      else if(inputMemo == '' && btnVal == '-') {
        inputMemo += btnVal;
        $('#display').val(btnVal);
        }
      // Replace the last operator (if exists) with the newly pressed operator
      if(operators.indexOf(lastChar) > -1 && inputMemo.length > 1) {
        // Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
        inputMemo = inputMemo.replace(/.$/, btnVal);
      }
        console.log('The input memo is: ' + inputMemo);
      // decimalAdded =false;
    }
    
    // Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
    // else if(btnVal == '.') {
    //   if(!decimalAdded) {
    //     input.innerHTML += btnVal;
    //     decimalAdded = true;
    //   }
    // }
    
    // if any other key is pressed, just append it
    else {
        inputMemo += btnVal;
        if (!isNaN(parseInt(inputMemo[inputMemo.length - 2]))) {
            var digitStart = inputMemo.length - 1;
            while (!isNaN(parseInt(inputMemo[digitStart--]))) 
                $('#display').val(inputMemo.substring(digitStart + 1,inputMemo.length));

        }
        else {
          $('#display').val(btnVal);
        }
        console.log('The input memo is:' + inputMemo);
    }
    
    // prevent page jumps
    e.preventDefault();
  }); 