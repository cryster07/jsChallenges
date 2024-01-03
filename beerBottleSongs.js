// for and while is used for iterration 
// for is generally prefferd because while run till infinity if error occur
/* 99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.
    
98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.

97 bottles of beer on the wall, 97 bottles of beer.
Take one down and pass it around, 96 bottles of beer on the wall. */
var num = 99 ;
while(num>0) {
    console.log(num +" bottles of beer on the wall, " + num +" bottles of beer.");
    num--;
    console.log("Take one down and pass it around, "+ num +" bottles of beer on the wall." );
}
