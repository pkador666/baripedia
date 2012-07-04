<?php
session_start();
require_once("config.php");
//if (strlen($_POST["comment"])>0){
	print_r($_POST);
	$sql="insert into bar_app_photo_comment values('','".$_POST["id_photo"]."','".$_POST["comment"]."','".time()."','".$_SESSION["user"]["id"]."')";
	print $sql;
	$result=mysql_query($sql);
/*} else {
	header("location:index.php");
}
*/
?>
