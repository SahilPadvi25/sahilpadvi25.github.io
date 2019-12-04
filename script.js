$(function () {
  $(window).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 50);
   	$(".navbar-brand").toggleClass('navbar-brand2',$(this).scrollTop()> 50);
  });



$(window).scroll(function() {
		
	
		$(".about-loading").toggleClass('about',$(this).scrollTop()>150);
		$(".service-loading").toggleClass('service',$(this).scrollTop()>900);
	
});















});


$(document).ready(function(){

$("a.homelink").click(function(){
	event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);

});


$("a.aboutlink").click(function(){
	event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);

});


$("a.servicelink").click(function(){
	event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);

});

$("a.contactlink").click(function(){
	event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);

});


});


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}