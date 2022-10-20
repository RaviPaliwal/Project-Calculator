// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value){
    if (state=="on"){
    if(document.getElementById("result").value == '0')
    { //if zero preceding then eval throwing error
      var k = value;
      clearScreen();
      document.getElementById("result").value +=value;
    }
    //why without this we have to press a button 2 times after zero
    else if(dis[0].style.backgroundColor =='grey')
    {
      clearScreen();
    }
  else
   {
    document.getElementById("result").value += value;
   }
  }
} 

// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
 }

function changeColor(id)
{
  document.getElementById(id).style.backgroundColor = "#ff0000"; // backcolor
  
}



var dis = document.getElementsByClassName('display-box');
function onf() {
  if (dis[0].style.backgroundColor !='greenyellow')
  {
    state ="on";
    console.log('Turning on')
    clearScreen()
    dis[0].style.backgroundColor = 'greenyellow';
  }
  else
  {
    console.log('Turning off')
    dis[0].style.backgroundColor = "grey";
    clearScreen();
  }
}