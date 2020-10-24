$(window).scroll(function() {
	var $height = $(window).scrollTop();
  if($height > 100) {
		$('#navbar').addClass('active');
	} else {
		$('#navbar').removeClass('active');
	}
});

// var tl = new TimelineMax({onUpdate:updatepercentage});
// const controller = new ScrollMagic.Controller();
// tl.from(".second-title", .1, { x:-100 ,opacity:0});
// tl.from(".itemimg", .1, {x:50, opacity:0});
// const scene = new ScrollMagic.Scene({
// 	triggerElement:".secondpart",
// 	triggerHook:0,
// 	offset:'30',
// 	duration:"100%"
// })
// .setPin(".secondpart")
// .setTween(tl)
// .addTo(controller);

// function updatepercentage(){
// 	tl.progress();
// 	console.log(tl.progress())
// }
// When the user scrolls down 50px from the top of the document, resize the header's font size
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("navbar").style.height = "50px";
//   } else if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
//     document.getElementById("navbar").style.height = "60px";
//   }
//   else {
//     document.getElementById("navbar").style.height ="100px";
//   }
// }