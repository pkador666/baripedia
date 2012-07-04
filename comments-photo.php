<?php
session_start();
require_once("config.php");
if (strlen($_SESSION["user"]["full_name"])>0) {
	$id=$_GET["id"];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>comments</title>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	<meta name="generator" content="Geany 0.21" />
	<link media="screen" href="css/comments.css" rel="stylesheet" type="text/css"/>
	<script src="js/jquery.js" type="text/javascript"></script>
	<script src="js/comments.js" type="text/javascript"></script>
	
</head>
<body>
	
	<?php 
	$sql="select * from bar_app_photo where id=$id";
	$result=mysql_query($sql);
	while ($row=mysql_fetch_assoc($result)){
	?>
		<div class="comment-img">
		<img src="<?php print $row["photo"];?>"/>
		</div>
		<div class="comment-description">
		<span class="descrip"><?php print $row["description"];?></span><br>
		<span class="date"><?php print date('d/m/Y',$row["date_upload"]);?></span><br>
	<?php 
	}
	?>
	<hr>
	<img src="img/comments.png">Comments:
	<ul class="list-comment">
	<?php
	$sql="select bar_app_photo_comment.content, bar_app_photo_comment.date, bar_user.full_name from bar_app_photo_comment inner join bar_user on bar_app_photo_comment.id_user= bar_user.id where id_app_photo=$id";
	$result=mysql_query($sql);
	while ($row=mysql_fetch_assoc($result))
		#validar por sexo xD
	{?>
		<li class="comments">
			<span class="comment-user"><strong><?php print $row["full_name"];?>:</strong></span><span class="comment-content"><?php print $row["content"];?></span><br>
			<span class="comment-date">Comentado el <?php print date('d/m/Y',$row["date"]);?></span>
		</li>
		
	<?php }?>
		<li class="js-new-comment"></li>
	</ul>
	<ul id="insert-comment">
		<li class="insert-comment"><img src="img/insert_comment.png"><textarea id_photo="<?php print $id; ?>" id="new_comment"></textarea></li>
	</ul>
	</div>
	
</body>

</html>
<?php
} else {
	setcookie("error","<strong>Ups, an error ocurred</strong><br>User or password incorrect!!!",time()+1);
	header("location:index.php");
}
?>
