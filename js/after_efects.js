$("document").ready(function() {
	$.ajax({
			type: "POST",
			url: "home.php",
			data: "default=1",
			success: function(data) {
				$(".content").html(data);
			}
	});
	$(".home").click(function() {
		$(".sidebar a").css("color","#AEBF65");
		$(this).css("color","#1E90FF");
		$(this).css("tex-shadow","#25588A");
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
		$(".sidebar a").css("color","#AEBF65");
		$(this).css("color","#1E90FF");
		$(this).css("tex-shadow","#25588A");
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
		$(".sidebar a").css("color","#AEBF65");
		$(this).css("color","#1E90FF");
		$(this).css("tex-shadow","#25588A");
		$.ajax({
			type: "POST",
			url: "contact.php",
			data: "default=1",
			success: function(data) {
				$(".content").html(data);
			}
		});
	});
});
