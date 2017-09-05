$('.lf_otz').slick({
   dots: true,
  infinite: false,
  speed: 2000,
  slidesToShow: 1,
   autoplay: false,
  autoplaySpeed: 3000,
    arrows:false
});


 //OBV  
    
   $(".js-obv") .on("click" , function(e){
       
        e.preventDefault();
       
       var $this = $(this),
           text  = $this.text();
       
      if(text == "Открыть полный список +"){
          text  = $this.text("Закрыть полный список –");
      } else {
          text  = $this.text("Открыть полный список +");
      }
       
       $(this).prev("#obv-js").toggleClass("obvertaka");
  
   });
 //OBV    

//WOW
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       250,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();
//WOW


//MENU
    		var pull 		= $('#pull');
				menu 		= $('.header-menu ul');
				menuHeight	= menu.height();

			$(pull).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle();
			});

			$(window).resize(function(){
        		var w = $(window).width();
        		if(w > 320 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
    		});
//MENU

//MODALS  
    $(".js-show-modal").on("click", function(e){
        
        e.preventDefault();
        
        $(".js-modal , #js-overley").fadeIn();
        $("body").addClass("open-modal");
    });
    
    
    
    $("#js-overley ,.js-clous").on("click" , function(e){
        
        e.preventDefault();
        $(".js-modal , #js-overley").fadeOut();
        $("body").removeClass("open-modal");
    });
//MODALS   


//Fixed Header

var headerH = $('#slide-js').height(),
    navH = $('#js-header').innerHeight();
 
$(document).on('scroll', function(){
    
    var documentScroll = $(this).scrollTop();
 
    if(documentScroll > headerH){
        $("#js-header").addClass("fixsed");
        $("#slide-js").css("paddingTop" , navH); 
    } else {
        $("#js-header").removeClass("fixsed");
        $("#slide-js").removeAttr("style");
    }
    
});
//Fixed Header

//OTPAV
$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});