<?php
require_once("config.php");
session_start();
if(strlen($_POST["username"])>0) {
	$username=$_POST["username"];
	$password=md5($_POST["password"]);
	$sql="select * from bar_user where username='$username' and password='$password'";
	$result=mysql_query($sql);
	while ($row=mysql_fetch_assoc($result)) {
		$_SESSION["user"]["full_name"]=$row["full_name"];
		$_SESSION["user"]["description"]=$row["description"];
		$_SESSION["user"]["last_login"]=$row["last_login"];
		$_SESSION["user"]["username"]=$row["username"];
		$_SESSION["user"]["photo"]=$row["photo"];
	}
	setcookie("info","<strong>Welcome to Baripedia</strong><br>For more information inf <a href='config_user.php?id=23'>Config</a>",time()+1);
	header("location:index.php");
	
	
} else {
	setcookie("error","<strong>Ups, an error ocurred</strong><br>User or password incorrect!!!",time()+1);
	header("location:index.php");
}

?>

