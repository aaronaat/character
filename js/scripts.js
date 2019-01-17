// $(document).ready(function() {
//
//   $.each(".fruit").click(function() {
//     if ($(".fruit").attr("id") === "banana") {
//       console.log("banana");
//     }
//
//     if ($(".fruit").attr("id") === "apple") {
//       console.log("apple");
//     }
//
//
//
//       // else if ($(".fruit").attr("id") === "apple") {
//       //   sentence = sentence + " apple";
//       //   console.log(sentence);
//       // }
//       //
//       // else if ($(".fruit").attr("id") === "kiwi") {
//       //   sentence = sentence + " kiwi";
//       //   console.log(sentence);
//       // }
//       //
//       // else {
//       //   prompt("please pick a fruit");
//       // }
//   });
//
//
// });

$(document).ready(function() {
    $('img#banana').click(function() {
        if($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            $(this).addClass('selected');
        }
    });
    $('img#apple').click(function() {
        if($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            $(this).addClass('selected');
        }
    });
    $('img#kiwi').click(function() {
        if($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            $(this).addClass('selected');
        }
    });


    $('img#crunch').click(function() {
        if($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            $(this).addClass('selected');
        }
    });
    $('img#life').click(function() {
        if($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            $(this).addClass('selected');
        }
    });
    $('img#count').click(function() {
        if($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            $(this).addClass('selected');
        }
    });



    $('img#cream').click(function() {
        if($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            $(this).addClass('selected');
        }
    });
    $('img#brownie').click(function() {
        if($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            $(this).addClass('selected');
        }
    });
    $('img#cake').click(function() {
        if($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            $(this).addClass('selected');
        }
    });

    $('button#results-button').click(function() {
      if('img').hasClass('selected')){
        $('#result').append('<p>yay<p>');
      }
    }




});
