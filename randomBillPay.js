var peopleName = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
var waiterSelection = Math.random();
waiterSelection = Math.floor(waiterSelection * peopleName.length);
alert(peopleName[waiterSelection] + " is going to buy lunch today!");