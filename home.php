<?php
session_start();
require_once("config.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Home</title>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	<meta name="generator" content="Geany 0.21" />
	<link rel="stylesheet" media="screen" href="css/wipe.css" type="text/javascript"/>
	<link rel="stylesheet" media="screen" href="css/forms.css" type="text/javascript"/>
	<script src="js/jquery.js" type="text/javascript"></script>
	<script src="js/after_efects.js" type="text/javascript"></script>
	<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
	<?php if ($_SESSION["user"]) {?>
	<link rel="stylesheet" media="screen" href="css/bubble.css" type="text/css"/>
	<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
	<?php } else { ?><link rel="stylesheet" media="screen" href="css/navigation.css" type="text/css"/>
	
	<?php }?>
	
</head>
<body>
	<?php if ($_SESSION["user"]) {?>
	
	<div id="content">
            <div class="navigation" id="nav">
                <div class="item user">
                    <img src="img/bg_user.png" alt="" width="199" height="199" class="circle"/>
                    <a href="#" class="icon"></a>
                    <h2>User</h2>
                    <ul>
                        <li><a id="bubble-profile" href="#profile">Profile</a></li>
                        <li><a href="#">Properties</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
                <div class="item home">
                    <img src="img/bg_home.png" alt="" width="199" height="199" class="circle"/>
                    <a href="#" class="icon"></a>
                    <h2>Home</h2>
                    <ul>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="item shop">
                    <img src="img/bg_shop.png" alt="" width="199" height="199" class="circle"/>
                    <a href="#" class="icon"></a>
                    <h2>Bar Apps</h2>
                    <ul>
                        <li><a href="#">Catalogue</a></li>
                        <li><a href="#">Orders</a></li>
                        <li><a href="#">Offers</a></li>
                    </ul>
                </div>
                <div class="item camera">
                    <img src="img/bg_camera.png" alt="" width="199" height="199" class="circle"/>
                    <a href="#" class="icon"></a>
                    <h2>Photos</h2>
                    <ul>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Prints</a></li>
                        <li><a href="#">Submit</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="bubble-content">
			<span class="text-welcome-general">Welcome!!!</span><br>
			<span class="text-welcome-paragraph">begin editing your profile, update your data and adds a new wiki bar, add photos, albums and comments about this.</span>
		</div>
	</div>
	
	<?php } else { ?>
	<div class="welcome">
		Welcome to <a href="index.php" class="name-project">baripedia.pe</a> here you find <a class="click-register" href="#"><del>(if you join)</del></a> the most popular places to enjoy a weekend...
	</div>
	<form class="sign-up" method="post" action="register_account.php">
		<div class="caption">
			<span class="title">Sign-up form</span><br>
			<span class="description">Complete all form fields to complete your registration</span>
		</div>
		<div class="labels">
			<ul>
			<li><label>Name</label><br><span>Add your Name</span></li>
			<li><label>Email</label><br><span>Add a valid address</span></li>
			<li><label>Password</label><br><span>Min. size 6 chars</span></li>
			</ul>
		</div>
		<div class="inputs">
			<ul>
				<li><input id="fullname" type="text" name="full_name"></li>
				<li><input id="comida" type="text" name="username"></li>
				<li><input type="password" name="password"></li>
			</ul>
		</div>
		<div class="submits">
			<input type="submit" value="Sign - up"/>
		</div>
	</form>
	<?php } ?>
</body>

</html>
