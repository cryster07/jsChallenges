prompt("Name of the boy");
prompt("Name Of the Girl");
var calculation = Math.random();
calculation = Math.floor(calculation * 100 + 1); 
if(calculation>70) {
    alert( "Great match");
}
else if (calculation>30 && calculation <= 70) {
    alert("GOOD MATCH")
}
// no condition is used in else statement
else {
    alert("no match");
}