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
			
		$("a[rel=group]").fancybox({
			'autoScale'     : false,  
			'transitionIn'      : 'elastic',  
			'transitionOut'     : 'elastic', 
			'width'         : 800,  
			'height'        : 700,  
			'type'          : 'iframe',
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

	
	// Js for menu user loged
	
	$("#user-menu li span").hide();
	$("#user-menu").mouseleave(function() {
		$("#user-menu li span").show("slow").delay(6000).hide("slow");
	});
	
	// Js for bubble actions
		
	$("#home").show("slow");	
	
	$(".bar-user").click(function() {
		$(".bar-user").css({
			"color": "#ffffff",
			"text-shadow": "1px 1px 2px #4B1D18",
			"border": "1px solid #D21600",
			"background-color": "#D21600",
			"padding": "5px 20px",
			"-webkit-border-top-left-radius": "50px",
			"-webkit-border-top-right-radius": "10px",
			"-webkit-border-bottom-left-radius": "10px",
			"-webkit-border-bottom-right-radius": "50px"
		});
		
		$(".bar-photos").css({
			"padding": "5px 22px",
			"color": "#ffffff",
			"text-shadow": "1px 1px 2px #000",
			"background-color":"#fff",
			"border-color":"#fff",
			"-webkit-transform": "rotate(-2deg) scale(1)",
			"-moz-transform": "rotate(-0.5deg) scale(1)",
			"-o-transform": "rotate(-0.5deg) scale(1)",	
			"-webkit-transition": "all 2s ease-in-out",
			"transition": "all 2s ease-in-out"
		});
		$(".bar-home").css({
			"padding": "5px 22px",
			"color": "#ffffff",
			"text-shadow": "1px 1px 2px #000",
			"background-color":"#fff",
			"border-color":"#fff",
			"-webkit-transform": "rotate(-2deg) scale(1)",
			"-moz-transform": "rotate(-0.5deg) scale(1)",
			"-o-transform": "rotate(-0.5deg) scale(1)",	
			"-webkit-transition": "all 2s ease-in-out",
			"transition": "all 2s ease-in-out"
		});
		$(".bar-apps").css({
			"padding": "5px 22px",
			"color": "#ffffff",
			"text-shadow": "1px 1px 2px #000",
			"background-color":"#fff",
			"border-color":"#fff",
			"-webkit-transform": "rotate(-2deg) scale(1)",
			"-moz-transform": "rotate(-0.5deg) scale(1)",
			"-o-transform": "rotate(-0.5deg) scale(1)",	
			"-webkit-transition": "all 2s ease-in-out",
			"transition": "all 2s ease-in-out"
		});
		//hide
		$("#bar-user").show("slow");
		$("#bar-photos").hide("slow");
		$("#bar-apps").hide("slow");
	});
	$("#profile").hide();
	$("#config").hide();
	$("#security").hide();
	$("#explore").hide();
	$("#galery").hide();
	$("#views").hide();
	$("#new-bar").hide();
	$("#offers").hide();
	//click menu user
	$(".profile").click(function() {
		$("#profile").fadeIn("slow");
		$("#home").hide();
		$("#config").hide();
		$("#security").hide();
		$("#explore").hide();
		$("#galery").hide();
		$("#views").hide();
		$("#new-bar").hide();
		$("#offers").hide();
	});
	$(".init-home").click(function() {
		$("#home").fadeIn("slow");
		$("#profile").hide();
		$("#config").hide();
		$("#security").hide();
		$("#explore").hide();
		$("#galery").hide();
		$("#views").hide();
		$("#new-bar").hide();
		$("#offers").hide();
	});
	$(".config").click(function() {
		$("#config").fadeIn("slow");
		$("#home").hide();
		$("#profile").hide();
		$("#security").hide();
		$("#explore").hide();
		$("#galery").hide();
		$("#views").hide();
		$("#new-bar").hide();
		$("#offers").hide();
	});
	$(".security").click(function() {
		$("#security").fadeIn("slow");
		$("#home").hide();
		$("#profile").hide();
		$("#config").hide();
		$("#explore").hide();
		$("#galery").hide();
		$("#views").hide();
		$("#new-bar").hide();
		$("#offers").hide();
	});
	$(".galery").click(function() {
		$("#galery").fadeIn("slow");
		$("#home").hide();
		$("#profile").hide();
		$("#security").hide();
		$("#explore").hide();
		$("#config").hide();
		$("#views").hide();
		$("#new-bar").hide();
		$("#offers").hide();
	});
	$(".explore").click(function() {
		$("#explore").fadeIn("slow");
		$("#home").hide();
		$("#profile").hide();
		$("#security").hide();
		$("#config").hide();
		$("#galery").hide();
		$("#views").hide();
		$("#new-bar").hide();
		$("#offers").hide();
	});
	$(".new-bar").click(function() {
		$("#new-bar").fadeIn("slow");
		$("#home").hide();
		$("#profile").hide();
		$("#security").hide();
		$("#explore").hide();
		$("#galery").hide();
		$("#views").hide();
		$("#config").hide();
		$("#offers").hide();
	});
	$(".offers").click(function() {
		$("#offers").fadeIn("slow");
		$("#home").hide();
		$("#profile").hide();
		$("#security").hide();
		$("#explore").hide();
		$("#galery").hide();
		$("#views").hide();
		$("#config").hide();
		$("#new-bar").hide();
	});
	$(".views").click(function() {
		$("#views").fadeIn("slow");
		$("#home").hide();
		$("#profile").hide();
		$("#security").hide();
		$("#explore").hide();
		$("#galery").hide();
		$("#offers").hide();
		$("#config").hide();
		$("#new-bar").hide();
	});
	
	
	$(".bar-photos").click(function() {
		$(".bar-photos").css({
			"color": "#ffffff",
			"text-shadow": "1px 1px 2px #17530F",
			"border": "1px solid #36842C",
			"background-color": "#36842C",
			"padding": "5px 20px",
			"-webkit-border-top-left-radius": "50px",
			"-webkit-border-top-right-radius": "10px",
			"-webkit-border-bottom-left-radius": "10px",
			"-webkit-border-bottom-right-radius": "50px"
		});
		$(".bar-user").css({
			"padding": "5px 22px",
			"color": "#ffffff",
			"text-shadow": "1px 1px 2px #000",
			"background-color":"#fff",
			"border-color":"#fff",
			"-webkit-transform": "rotate(-2deg) scale(1)",
			"-moz-transform": "rotate(-0.5deg) scale(1)",
			"-o-transform": "rotate(-0.5deg) scale(1)",	
			"-webkit-transition": "all 2s ease-in-out",
			"transition": "all 2s ease-in-out"
		});
		$(".bar-home").css({
			"padding": "5px 22px",
			"color": "#ffffff",
			"text-shadow": "1px 1px 2px #000",
			"background-color":"#fff",
			"border-color":"#fff",
			"-webkit-transform": "rotate(-2deg) scale(1)",
			"-moz-transform": "rotate(-0.5deg) scale(1)",
			"-o-transform": "rotate(-0.5deg) scale(1)",	
			"-webkit-transition": "all 2s ease-in-out",
			"transition": "all 2s ease-in-out"
		});
		$(".bar-apps").css({
			"padding": "5px 22px",
			"color": "#ffffff",
			"text-shadow": "1px 1px 2px #000",
			"background-color":"#fff",
			"border-color":"#fff",
			"-webkit-transform": "rotate(-2deg) scale(1)",
			"-moz-transform": "rotate(-0.5deg) scale(1)",
			"-o-transform": "rotate(-0.5deg) scale(1)",	
			"-webkit-transition": "all 2s ease-in-out",
			"transition": "all 2s ease-in-out"
		});
		$("#bar-user").hide("slow");
		$("#bar-apps").hide("slow");
		$("#bar-photos").show("slow");
	});
	$(".bar-apps").click(function() {
		
		$(".bar-apps").css({
			"color": "#ffffff",
			"text-shadow": "1px 1px 2px #8A7222",
			"border": "1px solid #D7A400",
			"background-color": "#D7A400",
			"padding": "5px 20px",
			"-webkit-border-top-left-radius": "50px",
			"-webkit-border-top-right-radius": "10px",
			"-webkit-border-bottom-left-radius": "10px",
			"-webkit-border-bottom-right-radius": "50px"
		});
		$(".bar-user").css({
			"padding": "5px 22px",
			"color": "#ffffff",
			"text-shadow": "1px 1px 2px #000",
			"background-color":"#fff",
			"border-color":"#fff",
			"-webkit-transform": "rotate(-2deg) scale(1)",
			"-moz-transform": "rotate(-0.5deg) scale(1)",
			"-o-transform": "rotate(-0.5deg) scale(1)",	
			"-webkit-transition": "all 2s ease-in-out",
			"transition": "all 2s ease-in-out"
		});
		$(".bar-home").css({
			"padding": "5px 22px",
			"color": "#ffffff",
			"text-shadow": "1px 1px 2px #000",
			"background-color":"#fff",
			"border-color":"#fff",
			"-webkit-transform": "rotate(-2deg) scale(1)",
			"-moz-transform": "rotate(-0.5deg) scale(1)",
			"-o-transform": "rotate(-0.5deg) scale(1)",	
			"-webkit-transition": "all 2s ease-in-out",
			"transition": "all 2s ease-in-out"
		});
		$(".bar-photos").css({
			"padding": "5px 22px",
			"color": "#ffffff",
			"text-shadow": "1px 1px 2px #000",
			"background-color":"#fff",
			"border-color":"#fff",
			"-webkit-transform": "rotate(-2deg) scale(1)",
			"-moz-transform": "rotate(-0.5deg) scale(1)",
			"-o-transform": "rotate(-0.5deg) scale(1)",	
			"-webkit-transition": "all 2s ease-in-out",
			"transition": "all 2s ease-in-out"
		});
		
		$("#bar-user").hide("slow");
		$("#bar-photos").hide("slow");
		$("#bar-apps").show("slow");
	});
	$(".bar-home").click(function() {
		$(".bar-home").css({
			"color": "#ffffff",
			"text-shadow": "1px 1px 2px #447180",
			"border": "1px solid #8BC9DD",
			"background-color": "#8BC9DD",
			"padding": "5px 20px",
			"-webkit-border-top-left-radius": "50px",
			"-webkit-border-top-right-radius": "10px",
			"-webkit-border-bottom-left-radius": "10px",
			"-webkit-border-bottom-right-radius": "50px"
		});
		$(".bar-user").css({
			"padding": "5px 22px",
			"color": "#ffffff",
			"text-shadow": "1px 1px 2px #000",
			"background-color":"#fff",
			"border-color":"#fff",
			"-webkit-transform": "rotate(-2deg) scale(1)",
			"-moz-transform": "rotate(-0.5deg) scale(1)",
			"-o-transform": "rotate(-0.5deg) scale(1)",	
			"-webkit-transition": "all 2s ease-in-out",
			"transition": "all 2s ease-in-out"
		});
		$(".bar-apps").css({
			"padding": "5px 22px",
			"color": "#ffffff",
			"text-shadow": "1px 1px 2px #000",
			"background-color":"#fff",
			"border-color":"#fff",
			"-webkit-transform": "rotate(-2deg) scale(1)",
			"-moz-transform": "rotate(-0.5deg) scale(1)",
			"-o-transform": "rotate(-0.5deg) scale(1)",	
			"-webkit-transition": "all 2s ease-in-out",
			"transition": "all 2s ease-in-out"
		});
		$(".bar-photos").css({
			"padding": "5px 22px",
			"color": "#ffffff",
			"text-shadow": "1px 1px 2px #000",
			"background-color":"#fff",
			"border-color":"#fff",
			"-webkit-transform": "rotate(-2deg) scale(1)",
			"-moz-transform": "rotate(-0.5deg) scale(1)",
			"-o-transform": "rotate(-0.5deg) scale(1)",	
			"-webkit-transition": "all 2s ease-in-out",
			"transition": "all 2s ease-in-out"
		});
		// Hide divs
		$("#bar-user").hide("slow");
		$("#bar-photos").hide("slow");
		$("#bar-apps").hide("slow");
		//Show divs
		$("#home").show("slow");
	});
	
	$("#edit-button-submit").hide();
	$("#edit-photo input[type='file']").hide();
	
	$("#done-edit").toggle(function() {
		$(this).html("<img src='img/unlock.png'>");
		$("#edit-inputs input, #edit-inputs textarea").css({
			"border":"1px solid #7E2115",
			"background-color":"#FFFFFF",
			"-webkit-border-radius":"5px",
			"-moz-border-radius":"5px",
			"border-radius":"5px"
		});
		$("#edit-button-submit").show("slow");
		$("#edit-photo input[type='file']").show("slow");
		$("#edit-photo").css("text-align","center");
	}, function() {
		$("#done-edit").html("<img src='img/lock.png'>");
		$("#edit-inputs input, #edit-inputs textarea").css({	
			"background-color":"transparent",
			"border":"none"
		});	
		$("#edit-button-submit").hide("slow");
		$("#edit-photo input[type='file']").hide("slow");
	});
	
	
	// js for config
	
	
	
	$("#parameter").keypress(function() {
		if ($("#parameter").val().length>4){
				var parameter=$("#parameter").val();
				$.ajax({
					type: "POST",
					url: "search.php",
					data: "parameter="+parameter,
					success: function(data) {
						$("#result-query").html(data);
					}
				});
		}
	});
	
});
