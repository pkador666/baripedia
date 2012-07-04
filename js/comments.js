$("document").ready(function() {
	$("#new_comment").keyup(function() {
		$.ajax({
			type: "POST",
			url: "user_js.php",
			data: "default=1",
			success: function(data) {
				user=data;
				
			}
		});
		$(".js-new-comment").delay(2000).html(user+$("#new_comment").val());
		
		if ($(this).val().length==0){
			$(".js-new-comment").html("<br>");
		}
	})
	$("#new_comment").keypress(function(e) {
		if (e.which==13) {
			date_published="<span class='comment-date'>Comentado hace unos momentos</span>";
			$(".js-new-comment").html(user+$("#new_comment").val()+"<br>"+date_published);
			//insertando comentario en bd
			$.ajax({
				type: "POST",
				url: "insert_comment.php",
				data: "comment="+$("#new_comment").val()+"&id_photo="+$("#new_comment").attr("id_photo"),
				success: function(data) {
					done=data;
				}
			});
			$(".js-new-comment").addClass("comments");
			$(".comments").css({
				"border": "1px solid #1C6CBA",
				"-webkit-border-radius": "5px",
				"-moz-border-radius": "5px",
				"-o-border-radius": "5px",
				"border-radius": "5px",
				"margin-bottom": "5px",
				"padding": "5px"
			});
			$(".list-comment .comments").removeClass("js-new-comment");
			$(".list-comment").append("<li class='js-new-comment'></li>");
			$("#new_comment").val(null);
			$("#new_comment").focus();
			return false;
		}
	});
});
