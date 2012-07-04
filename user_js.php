<?php
session_start();
require_once("config.php");
if($_POST["default"]>0) {
	print "<span class='comment-user'><strong>".$_SESSION["user"]["full_name"].":</strong></span>";
} else {
	header("location:index.php");
}
?>
