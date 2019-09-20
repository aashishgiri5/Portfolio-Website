



$('#image1').hover(function(){
    $('#firstProject').css('background-color','#4a6075' );
    $('.box-first').css('background-color','#4a6075');
    $('#list1').css('color','white');
}, function(){
     $('#firstProject').css('background-color','' );
       $('.box-first').css('background-color','' );
       $('#list1').css('color','');
});

$('#image2').hover(function(){
    $('#secondProject').css('background-color','#4a6075' );
      $('.box-second').css('background-color','#4a6075' );
      $('#list2').css('color','white');
}, function(){
     $('#secondProject').css('background-color','' );
       $('.box-second').css('background-color','' );
       $('#list2').css('color','');
});

$('#image3').hover(function(){
    $('#thirdProject').css('background-color','#4a6075' );
      $('.box-third').css('background-color','#4a6075' );
      $('#list3').css('color','white');
}, function(){
     $('#thirdProject').css('background-color','' );
       $('.box-third').css('background-color','' );
       $('#list3').css('color','');
});


$('.bigbtn').hover(function(){
    $('.more').css('background-color','#34495e' );
    $('.social').css('background-color','#34495e' );
}, function(){
     $('.more').css('background-color','' );
     $('.social').css('background-color','' );
});




$('.btn',).hover(function(){
    var r = Math.floor(Math.random() * 255);
                var g = Math.floor(Math.random() * 255);
                var b = Math.floor(Math.random() * 255);
                 var color = 'rgb(' + r + ',' + g + ',' + b + ')';
                 $('.social').css("background-color",color);
                 $('.more').css("background-color",color);
                 $('#last').css("background-color",color);
                 $('.navbar-expand-md').css("background-color",color);
                 $('#thirdProject').css("background-color",color);
}, function(){
     $('.social').css("background-color",'');
     $('.more').css("background-color",'');
     $('#last').css("background-color",'');
     $('.navbar-expand-md').css("background-color",'');
     $('#thirdProject').css("background-color",'');

    
     
});




//function to scroll down to the about section when clicked on the profile icon
$(document).ready(function() { 
            $("#photo,.glyphicon-user,.more").click(function() { 
                $("html, body").animate({ 
                    scrollTop: $( 
                      'html, body').get(0).scrollHeight 
                }, 1000); 
            }); 
 }); 


