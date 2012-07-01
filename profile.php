<?php
session_start();
require_once("config.php");
if ($_SESSION["user"]) {
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Profile</title>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	<meta name="generator" content="Geany 0.21" />
</head>

<body>
	<form method="post" action="edit_user.php">
		<div class="button-change">
			<a href="#" id="done-edit"><img src="img/lock.png"</a>
		</div>
		<div class="caption">
			<span class="title">Edit field for User basic Settings!!!</span><br>
			<span class="description">These fields will be displayed in your personal information!!!</span>
		</div>
		<div class="fields-edit">
			<input type="text" name="full_name" value="">
			<input type="password" name="password" value="">
			<input type="password" name="retype-password" value="">
			<textarea name="user_description">Edit this field with your staff appreciation!!!</textarea>
		</div>
		<div class="foto-edit">
			<img src="img/users/123456789654321213_n.jpg" title="this is [username]"/><br>
			<input class="field-photo-user" type="file" name="photo">
		</div>
		<input type="submit" value="Save Changes!">
	</form>
</body>

</html>
<?php } else {
	setcookie("error","<strong>Ups, an error ocurred</strong><br>Page not Found!!!",time()+1);
	header("location:index.php");
}?>
