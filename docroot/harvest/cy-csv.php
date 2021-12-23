<?php

if ($_GET["year"]) {
	$year = $_GET["year"];
} 
else {
	$year = date("Y");
}

require 'zip-csv.php';
