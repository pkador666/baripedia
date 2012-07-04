<?php
session_start();
require_once("config.php");
if (strlen($_POST["username"])>0){
	$full_name=$_POST["full_name"];
	$username=$_POST["username"];
	$password=md5($_POST["password"]);
	$last_login=time();
	$date_update=time();
	$sql="insert into bar_user values('','$username','$password','$full_name','','$last_login','img/default_user.png','$date_update')";
	$result=mysql_query($sql);
	print $sql;
	setcookie("success","<strong>Congrats, you did it!</strong><br>He sent an email to activate your account",time()+1);
	header("location:index.php");
} else {
	setcookie("error","<strong>Ups, an error ocurred</strong><br>User or password incorrect!!!",time()+1);
	header("location:index.php");
}
?>

