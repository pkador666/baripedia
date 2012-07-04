<?php
require_once("config.php");
session_start();
if (strlen($_SESSION["user"]["full_name"])>0) {
	$parameter=$_POST["parameter"];
	$sql="select  bar_app.id, bar_app.photo, bar_app.full_name, bar_app.description , bar_app.address , bar_city.name, bar_user.full_name as user_registered from bar_app inner join bar_city on bar_app.id_city=bar_city.id inner join bar_user on bar_app.id_user=bar_user.id where bar_app.full_name like '%$parameter%' or bar_app.description like '%$parameter%' or bar_app.address like '%$parameter%' or bar_city.name like '%$parameter%' or bar_user.full_name like '%$parameter%'";
	$result=mysql_query($sql);
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Search in Baripedia</title>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	<meta name="generator" content="Geany 0.21" />
</head>
<body>
	<hr>
	<ul class="list-result">
	<?php
	while ($row=mysql_fetch_assoc($result)){?>
		<li>
			<div class="data-info">
				<div class="data-photo">
				<img src="<?php print $row["photo"];?>" title="<?php print $row["full_name"];?>"/>
				</div>
				<div class="data-text">
				<span class="data-full_name"><?php print $row["full_name"];?></span><br>
				<span class="data-address"><?php print $row["address"];?></span><br>
				<p class="data-description"><?php print $row["description"];?></p>
				<span class="data-city"><strong>City:</strong> <?php print $row["name"];?></span><br>
				<span class="data-user_registered"><strong>Register by:</strong> <a href="#"><?php print $row["user_registered"];?></a></span><br>
				</div>
			</div>
			<div class="data-album">
				<span class="data-title-photos">Fotos</span><br>
				<ul>
				<?php 
				$sql_aux="select bar_app_photo.id, bar_app_photo.photo from bar_app_photo where id_app=".$row["id"];
				$result_aux=mysql_query($sql_aux);
				while ($row_aux=mysql_fetch_assoc($result_aux)){
				?>
					<a href="comments-photo.php?id=<?php print $row_aux["id"]; ?>" class="comments-photo" ><li class="album-img"><img src="<?php print $row_aux["photo"]; ?>" title="<?php print $row["full_name"];?>"/></li></a>
				<?php 
				}
				?>
				<a href="#" id="add-photo"><li class="album-add">Add photo's</li></a>
				</ul>
			</div>
		</li>
	<?php }
	?>
	</ul>
	<div class="path">busquedas</div>
</body>
</html>

<?php 

} else {
	setcookie("error","<strong>Ups, an error ocurred</strong><br>Username and password not admitted!!!",time()+1);
	header("location:index.php");
}?>


