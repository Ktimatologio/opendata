<?php

if ($_GET["year"]) {
	$year = $_GET["year"];
} 
else {
	$year = date("Y",strtotime("-1 year"));
}

require 'zip-csv.php';
