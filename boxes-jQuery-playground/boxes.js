//Exercise #1: DOM Ready
//Add a callback function to ready that alerts a message saying, ready for DOM //manipulation. Try using both styles of callbacks.
//ANSWER:
$(document).ready(function() {
  console.log("Hello world");

//Exercise #2:  Selectors, CSS, Attributes

// #1 Find the secretBox on the page. Set the background color to white.
// Add an h1 tag that says, "secret box!"
//ANSWER:
//$('#secretBox').css('background','white');
//$('#secretBox').append('<h1>Secret Box</h1>');

//#2 Find all child divs of the first row. Set the class for each div to //boxType3.
//ANSWER:
//$('#row1').children().removeClass(" boxType1 boxType2").addClass( "boxType3" );

//3 Make the last box in the last row disappear. (Hint, look into the dispaly
// style. Also, you should only get back one element from your selector.).
//ANSWER:
//$('#row4 div:last-child').css('visibility', 'hidden');

//4 Change all red boxes to white.
//ANSWER:
//$( "div[class|='box boxType1']" ).css('background', 'white');

//5Get the first two divs in the second row. Take away all styling from the //divs.
//ANSWER:
//$('#row2 div:lt(2)').removeClass('boxType2 boxType3');

//6. Get all divs inside the container that are not row divs and are not the secret //box div. Set the width of the divs to 2 pixels.
//ANSWER:
//$("div:not(.row #secretBox)").css('width', '2px');


//Exercise 3 - Events
//1. Add an on click handler to the container div. ...
//    Console log the x and y position of the click.
//ANSWER:
// $( "#container" ).click(function(e) {
//   //alert( "Handler for .click() called." );
//   var offset = $(this).offset();
//     console.log("X-Coordinate of click: " + (e.pageX - offset.left));
//     console.log("Y-Coordinate of click: " + (e.pageY - offset.top));
// });

//2.  Add links inside all red box divs that take the user to galvanize. Then //add an on click handler that alerts the user that you can never leave the //page. Make sure the user won't leave the page after the alert!
//ANSWER:
// $( "div[class|='box boxType1']" ).html('<a href="#">Galvanize Website</a>').bind("click", function(e) {
//   alert("You can never leave the page. Boohahaa!!!");
// });

//3.For all box divs, add a click handler that adds an image of a cute puppy to //the box. If the image is clicked again, remove the cute puppy.
//ANSWER:
// jQuery(function($){
//   $('body').click(function(e){
//     var clickedOn = $(e.target);
//     $(clickedOn).html('<img src="./puppy.jpeg" alt="cute puppy"style="width:140px;height:140px;">');
//         $("div.box").one('click',function(e) {
//           $("div.box").html('');
//         });
//   });
// });

// 4.Write a click handler on the container div. The click handler should turn the container background to black and the background of the original div that was clicked to white. If the user original div that was clicked happened to be the container div, change the background of the container div to lime green. You should not use any selectors for this exercise. You can do it completely with what is given to you in the event callback.
//ANSWER:
// jQuery(function($) {
//   $('body').click(function(e){
//   var clicklocal = $(e.target);
//     if (e.target.id == "container") {
//       //alert("You clicked on container");
//       $(clicklocal).css('background', '#32CD32');
//     } else {
//       //alert("You clicked on a div");
//       $(clicklocal).parentsUntil().css('background', 'black');
//       $(clicklocal).css('background', 'white');
//     }
//   })
// });

});
