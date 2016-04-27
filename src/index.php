<?php

error_reporting(0);
$page = $_GET['p'];

require 'template/header.php'; 

if(!$page){
	include 'pages/home.php';
}else{
	include 'pages/'.$page.'.php';
}

require 'template/footer.php';
?>
