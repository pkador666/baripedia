<?php
require_once("config.php");
session_start();
if (strlen($_POST["email"])>0) {
	setcookie("success","<strong>Congrats, you did it!</strong><br>Send a mail to your e-mail!!!",time()+1);
	print "hola";
	//header("location:index.php");
}

?>

