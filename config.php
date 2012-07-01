<?php
//Archivo de Configuraciones de la Baripedia
session_start();
$server="localhost";
$user_db="root";
$password_db="toor";
$name_db="baripedia";

$connection=mysql_connect($server,$user_db,$password_db);
$select_db=mysql_select_db($name_db);

//Configuracion de Variables
// --- Comentarios - Sugerencias
$comment_type=array("1"=>"comentario","2"=>"sugerencia");
// --- Fotos
$type_photo=array("1"=>"perfil","2"=>"portada_album","3"=>"foto");

?>
