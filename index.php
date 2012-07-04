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
		<?php if ($_SESSION["user"]) {?>
		<div id="menu-bar-app">
			<ul>
				<a href="#" class="init-home"><li class="bar-home">Home</li></a>
				<a href="#"><li class="bar-user">User</li></a>
					<ul id="bar-user">
						<a href="#" class="profile"><li>Profile</li></a>
						<a href="#" class="config"><li>Config</li></a>
						<a href="#" class="security"><li>Security</li></a>
					</ul>
				<a href="#"><li class="bar-photos">Photos</li></a>
					<ul id="bar-photos">
						<a href="#" class="explore"><li>Explore</li></a>
						<a href="#" class="galery"><li>Galery</li></a>
						<a href="#" class="views"><li>Views</li></a>
					</ul>
				<a href="#"><li class="bar-apps">Bar Apps</li></a>
					<ul id="bar-apps">
						<a href="#" class="new-bar"><li>New Bar</li></a>
						<a href="#" class="offers"><li>Offers</li></a>
					</ul>
			</ul>
		</div>
		<div class="content-home-loged">
				<div id="bubble-content">
					<div id="home">
						<span class="text-general">Welcome!!!</span><br>
						<span class="text-paragraph">begin editing your profile, update your data and adds a new wiki bar, add photos, albums and comments about this.</span>
					</div>
					<div id="profile">
						<span class="text-general">Edit your profile</span><br>
						<form method="post" action="edit-profile.php" enctype="multipart/form-data">
							<a href="#" id="done-edit"><img src="img/lock.png"/></a>
							<div id="edit-photo">
								<img src="<?php print $_SESSION["user"]["photo"];?>" alt="<?php print $_SESSION["user"]["username"]?>"/><br>
								<input type="file" name="photo">
							</div>
							<div id="edit-labels">
								<label class="text-paragraph">Username</label><br><span class="text-reference">The name as you will see your followers</span><br>
								<label class="text-paragraph">Full Name</label><br><span class="text-reference">Your name complete</span><br>
								<label class="text-paragraph">Description</label><br><span class="text-reference">A brief description of you</span><br>
							</div>
							<div id="edit-inputs">
								<input type="text" disabled name="username" value="<?php print $_SESSION["user"]["username"];?>"><br>
								<input type="text" name="full_name" value="<?php print $_SESSION["user"]["full_name"];?>"><br>
								<textarea name="description"><?php print $_SESSION["user"]["description"];?></textarea><br>
							</div>
							<div id="edit-button-submit">
								<input type="submit" value="Done!">
							</div>
						</form>
					</div>
					<div id="config">
						<span class="text-general">Application settings</span><br>
						<form method="post" action="settings-app.php">
							<span class="text-paragraph">Titles</span><br>
							<ul class="title-types">
								<li><input type="radio" name="title-type" value="apogee"><span title="apogee" class="apogee">some title</span></li>
								<li><input type="radio" name="title-type" value="delicious"><span title="delicious" class="delicious">some title</span></li>
								<li><input type="radio" name="title-type" value="forum"><span title="forum" class="forum">some title</span></li>
								<li><input type="radio" name="title-type" value="intro_inline"><span title="intro_inline" class="intro_inline">some title</span></li>
								<li><input type="radio" name="title-type" value="junction"><span title="junction" class="junction">some title</span></li>
								<li><input type="radio" name="title-type" value="metropolis"><span title="metropolis" class="metropolis">some title</span></li>
								<li><input type="radio" name="title-type" value="origram"><span title="origram" class="origram">some title</span></li>
								<li><input type="radio" name="title-type" checked value="rex_bold"><span title="rex_bold" class="rex_bold">some title</span></li>
								<li><input type="radio" name="title-type" value="rex_bold_inline"><span title="rex_bold_inline" class="rex_bold_inline">some title</span></li>
								<li><input type="radio" name="title-type" value="rex_light"><span title="rex_light" class="rex_light">some title</span></li>
								<li><input type="radio" name="title-type" value="urbe"><span title="urbe" class="urbe">some title</span></li>
							</ul>
							<span class="text-paragraph">Paragraph</span><br>
							<ul class="paragraph-types">
								<li><input type="radio" name="paragraph-type" value="apogee"><span title="apogee" class="apogee">some text</span></li>
								<li><input type="radio" name="paragraph-type" value="delicious"><span title="delicious" class="delicious">some text</span></li>
								<li><input type="radio" name="paragraph-type" value="forum"><span title="forum" class="forum">some text</span></li>
								<li><input type="radio" name="paragraph-type" value="intro_inline"><span title="intro_inline" class="intro_inline">some text</span></li>
								<li><input type="radio" name="paragraph-type" checked value="junction"><span title="junction" class="junction">some text</span></li>
								<li><input type="radio" name="paragraph-type" value="metropolis"><span title="metropolis" class="metropolis">some text</span></li>
								<li><input type="radio" name="paragraph-type" value="origram"><span title="origram" class="origram">some text</span></li>
								<li><input type="radio" name="paragraph-type" value="rex_bold"><span title="rex_bold" class="rex_bold">some text</span></li>
								<li><input type="radio" name="paragraph-type" value="rex_bold_inline"><span title="rex_bold_inline" class="rex_bold_inline">some text</span></li>
								<li><input type="radio" name="paragraph-type" value="rex_light"><span title="rex_light" class="rex_light">some text</span></li>
								<li><input type="radio" name="paragraph-type" value="urbe"><span title="urbe" class="urbe">some text</span></li>
							</ul>
							<span class="text-paragraph">Themes</span><br>
							<ul class="theme-types">
								<li title="sky" class="sky"><input type="radio" name="paragraph-type" value="sky"><span class="left"></span><span class="center"></span><span class="right"></span></li>
								<li title="forrest" class="forrest"><input type="radio" name="paragraph-type" value="forrest"><span class="left"></span><span class="center"></span><span class="right"></span></li>
								<li title="wind" class="wind"><input type="radio" name="paragraph-type" value="wind"><span class="left"></span><span class="center"></span><span class="right"></span></li>
							</ul>
							<input type="submit" class="button-done" value="Done!"/>
						</form>
					</div>
					<div id="security">
						<span class="text-general">Security</span><br>
						<span class="text-paragraph">Disable account</span><br>
						<form method="post" action="disable_account.php">
						<span><em>password is required</em></span><br>
						<input type="password" name="password"><br>
						<span><em>Re-type your password</em></span><br>
						<input type="password" name="retype_password">
						<input type="submit" value="Done!"/>
						</form>
					</div>
					<div id="explore">
						<span class="text-general">Search in Baripedia</span><br>
						<div class="input-img-text">
							<img id="explore-img" src="img/magnifyingglass.png">
							<input type="text" name="s" id="parameter"/>
						</div>
						<div id="result-query"></div>
					</div>
					<div id="galery">galery</div>
					<div id="views">views</div>
					<div id="new-bar">new bar</div>
					<div id="offers">offers</div>			
				</div>
			
		</div>
		<?php }?>
		<div class="content"></div>
		<div id="push"></div>
	</div>
	</div>
	
	
</body>

</html>
