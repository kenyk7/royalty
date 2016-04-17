<?php

error_reporting(0);

require 'template/header.php'; 

$page = $_GET['p'];

if(!$page){
	include 'pages/home.php';
}else{
	include 'pages/'.$page.'.php';
}

require 'template/footer.php';

?>