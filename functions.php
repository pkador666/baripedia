<?php
require_once("config.php");
//Archivo de Funciones en PHP
//Conexion con mysql
$conection=mysql_connect($server,$user_db,$password_bd) or die("No conection DB - Error 1");
$select_db=mysql_select_db($name_db) or die("No object found - No DB");




?>
