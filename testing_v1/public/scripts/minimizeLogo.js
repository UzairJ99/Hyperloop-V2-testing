//Script to minimize logo in navbar on scroll
//2019-08-05

$(window).on('scroll', function () 
		{
			 var scrollTop = $(window).scrollTop();
			 if (scrollTop > 4) 
			 {
					$('#logo').stop().animate({height: "65px", paddingLeft: "15px"},50);
			 }
			 else 
			 {
					$('#logo').stop().animate({height: "130px", paddingLeft: "0px"},50);  
			 }
		});