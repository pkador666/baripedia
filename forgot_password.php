<?php
session_start();
require_once("config.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Register Account</title>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	<meta name="generator" content="Geany 0.21" />
	<link rel="stylesheet" type="text/css" media="screen" href="css/forms.css"/>
</head>
<body>
	<form 	 class="form-forgot-password">
		<span class="text-title-form">Request a new password via E-mail</span><br>
		<div class="input">
		<input type="text" class="input-email" name="email" value="Email Address"><input class="fancybox-close" onclick="parent.jQuery.fancybox.close();" type="submit" value="Done!">
		</div>
	</form>
</body>

</html>
