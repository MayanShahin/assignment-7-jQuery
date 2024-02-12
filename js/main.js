"use strict"

$(".slider").on("click", function(){
  $(".details").slideToggle(1000)
  });



  $("#setting i").on("click", function () {
    let gearWidth = $(".gear-box").innerWidth();
    $("#setting").animate({ left: `-${gearWidth}` }, 1000)
})
$("#setting span").on("click", function () {
    $("#setting").animate({ left: '0px' }, 1000)
})
$(".gear-box [href='#']").on("click", function (e) {
    let click = $(e.target).attr("href");
    let topElement = $(click).offset().top;
    $("html,body").animate({ scrollTop: topElement }, 2000)
})
$(".comb-content:first").css("display", "block")
$(".item").on("click", function () {
    $(".comb-content").slideUp()
    $(this).next(".comb-content").slideDown()
})



  function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
      var endTime = new Date("17 april 2021 9:56:00 GMT+01:00");			
        endTime = (Date.parse(endTime) / 1000);
  
        var now = new Date();
        now = (Date.parse(now) / 1000);
  
        var timeLeft = endTime - now;
  
        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
  
        $("#days").html(days + "<span> D</span>");
        $("#hours").html(hours + "<span> h</span>");
        $("#mins").html(minutes + "<span> m</span>");
        $("#seconds").html(seconds + "<span> sec</span>");		
  
    }
    setInterval(function() { makeTimer(); }, 1000);

    let textarea = $("textarea").attr("maxlength")
    $(".text").html(`<span class='text-danger'>${textarea}</span> Character Reamining`)
    $("textarea").on("keyup", function () {
        let key = $(this).val().length;
        console.log(key);
        let final = textarea - key
        $(".text").html(`<span class='text-danger'>${final}</span> Characyer Reamining`)
    })
    