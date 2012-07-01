<?php
require_once("config.php");
session_start();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Baripedia</title>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	<meta name="generator" content="Geany 0.21" />
	<link rel="stylesheet" media="screen" href="css/jquery.fancybox.css" type="text/css"/>
	<script src="js/jquery.js" type="text/javascript"></script>
	<script src="js/after_efects.js" type="text/javascript"></script>
	<script src="js/jquery.fancybox.js" type="text/javascript"></script>
	<script src="js/jquery.effects.drop.js" type="text/javascript"></script>
	<link rel="stylesheet" media="screen" href="css/basic.css" type="text/css"/>
	<?php if ($_SESSION["user"]) {?>
	<link rel="stylesheet" media="screen" href="css/bubble.css" type="text/css"/>
	<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
	<?php } else { ?><link rel="stylesheet" media="screen" href="css/navigation.css" type="text/css"/>
	
	<?php }?>
</head>
<body>
	<div class="error message"><?php if ($_COOKIE) { print $_COOKIE["error"];	}?></div>
	<div class="success message"><?php if ($_COOKIE) { print $_COOKIE["success"];	}?></div>
	<div class="info message"><?php if ($_COOKIE) { print $_COOKIE["info"];	}?></div>
	<div id="header">
		<div id="content-header">
			<?php if ($_SESSION["user"]) {?>
			<ul id="user-menu">
				<a href="#" class="link-user"><li class="list-first"><img src="img/pencilstraight.png" title="Configure the [username] settings."><span><?php print $_SESSION["user"]["username"]; ?></span></li></a>
				<a href="#" class="link-app"><li><img src="img/lightbulb.png" title="Add new bar."><span>new bar</span></li></a>
				<a href="#" class="link-explore"><li><img src="img/magnifyingglass.png" title="Explore by baripedia."><span>explore</span></li></a>
				<a href="logout.php" class="link-logout" id="logout"><li class="list-last"><img src="img/reload.png" title="Close your account."><span>logout</span></li></a>
			</ul>
			<?php } else {?>
			<ul id="nav">
				<a href="#" class="home"><li class="list-first">Home</li></a>
				<a href="#" class="about"><li>About</li></a>
				<a href="#" class="contact"><li>Contact</li></a>
				<a href="#" id="form-login"><li class="list-last">Login</li></a>
			</ul>
			<div class="form-login">
				<form method="post" action="verify_account.php">
					<label>Username</label>
					<input type="text" name="username"/><br>
					<label>Password</label>
					<input type="password" name="password"/><br>
					<a id="fancy-page" class="link-forgot" href="forgot_password.php" title="Request a new password via e-mail.">Forgot password?</a><input type="submit" value="Login!">
				</form>
			</div>
			<?php }?>
		</div>
	</div>
	<div id="container">
	<div id="content">
		<div class="content"></div>
		<div id="push"></div>
	</div>
	</div>
	
	
</body>

</html>
