$("document").ready(function() {
	
	$(function() {
                $('#nav > div').hover(
                function () {
                    var $this = $(this);
                    $this.find('img').stop().animate({
                        'width'     :'199px',
                        'height'    :'199px',
                        'top'       :'-25px',
                        'left'      :'-25px',
                        'opacity'   :'1.0'
                    },500,'easeOutBack',function(){
                        $(this).parent().find('ul').fadeIn(700);
                    });

                    $this.find('a:first,h2').addClass('active');
                },
                function () {
                    var $this = $(this);
                    $this.find('ul').fadeOut(500);
                    $this.find('img').stop().animate({
                        'width'     :'52px',
                        'height'    :'52px',
                        'top'       :'0px',
                        'left'      :'0px',
                        'opacity'   :'0.1'
                    },5000,'easeOutBack');

                    $this.find('a:first,h2').removeClass('active');
                }
            );
            });
	
	
	
	
	// javascript of fancybox
		$("#fancy-page").fancybox({
				'autoScale'     : false,  
				'transitionIn'      : 'none',  
				'transitionOut'     : 'none',  
				'width'         : 500,  
				'height'        : 100,  
				'type'          : 'iframe'
			});
	
	// javascript de lo demas
	$(".fancybox-close").click(function() {
		alert($(".input-email").text());
		/*$.ajax({
			type: "POST",
			url: "request_password.php",
			data: "email="+$(".input-email").text(),
			success: function(data) {
				$(".success").html(data);
			}
		});
		$(".success").slideDown("slow",function() {
				$(".success").css("height","30px");
				$(".success").show();
		}).delay(8000).slideUp("slow");
		*/
	});
	
	$(".message").hide();
	if ($(".error").text().length>0) {
		$(".error").slideDown("slow",function() {
			$(".error").css("height","30px");
			$(".error").show();
		}).delay(8000).slideUp("slow");
	} else {
		if ($(".success").text().length>0) {
			$(".success").slideDown("slow",function() {
				$(".success").css("height","30px");
				$(".success").show();
			}).delay(8000).slideUp("slow");
		} else {
			if ($(".info").text().length>0) {
				$(".info").slideDown("slow",function() {
					$(".info").css("height","30px");
					$(".info").show();
				}).delay(8000).slideUp("slow");
			}
		}
	}
	$(".form-login").hide();
	$("#form-login").click(function() {
		$(".form-login").slideToggle("slow",function() {
		});
	});
	
	$("#field-username").focusout(function() {
				alert("deje la casilla!!!");
	});
	
	$("#comida").keypress(function() {
		
		alert($("#comida").text());
	})
	
	$("#nav a").css("color","#FFF");
	$(".home li").css("background-color","#FFA500");
	$(".home li").css("border","1px solid #E4A93D");
	$(".home").css("text-shadow","1px 1px 1px #4D4D4D");
	$.ajax({
			type: "POST",
			url: "home.php",
			data: "default=1",
			success: function(data) {
				$(".content").html(data);
			}
	});
	
	$(".home").click(function() {
		$("#nav li").css("background-color","#1E90FF");
		$("#nav li").css("border","1px solid #1E90FF");
		$(".home li").css("background-color","#FFA500");
		$(".home li").css("border","1px solid #E4A93D");
		$(".home").css("text-shadow","1px 1px 1px #4D4D4D");
		$.ajax({
			type: "POST",
			url: "home.php",
			data: "default=1",
			success: function(data) {
				$(".content").html(data);
			}
		});
	});
	$(".about").click(function() {
		$("#nav li").css("background-color","#1E90FF");
		$("#nav li").css("border","1px solid #1E90FF");
		$(".about li").css("background-color","#FFA500");
		$(".about li").css("border","1px solid #E4A93D");
		$(".about").css("text-shadow","1px 1px 1px #4D4D4D");
		$.ajax({
			type: "POST",
			url: "about.php",
			data: "default=1",
			success: function(data) {
				$(".content").html(data);
			}
		});
	});
	$(".contact").click(function() {
		$("#nav li").css("background-color","#1E90FF");
		$("#nav li").css("border","1px solid #1E90FF");
		$(".contact li").css("background-color","#FFA500");
		$(".contact li").css("border","1px solid #E4A93D");
		$(".contact").css("text-shadow","1px 1px 1px #4D4D4D");
		$.ajax({
			type: "POST",
			url: "contact.php",
			data: "default=1",
			success: function(data) {
				$(".content").html(data);
			}
		});
	});
	
	
	
	// Js for bubble actions
	
	$("#bubble-profile").click(function() {
		$.ajax({
			type: "POST",
			url: "profile.php",
			data: "default=1",
			success: function(data) {
				$("#bubble-content").html(data);
			}
		});
	});
	
	// Js for menu user loged
	
	$("#user-menu li span").hide();
	$("#user-menu").mouseleave(function() {
		$("#user-menu li span").show("slow").delay(6000).hide("slow");
	});
	
	
});
