<?php

function zipCSV($dataset, $year) {
	//var_dump($year);
	//exit;
	$zip = new ZipArchive;
	if ($zip->open('../sites/default/files/stats/' . $dataset . '/' . $year . '/' . $dataset . '-' . $year . '.zip', ZipArchive::CREATE) === TRUE){
	$path = '../sites/default/files/stats/' . $dataset . '/'.$year.'/' . $dataset . '_*.csv';
	$filenames = glob($path);
	foreach($filenames as $file) {
		$zip->addFile($file, $dataset . $year . '/' . basename($file));
	}
	$zip->close();

	header('Location: ../sites/default/files/stats/' . $dataset . '/' . $year . '/' . $dataset . '-' . $year . '.zip');
	exit;
  }
}

if (isset($year)) {
	switch ($_GET["stat"]) {
		case 1:
			zipCSV('geotemaxia_ota', $year);
			break;
		case 2:
			zipCSV('ktimatografisi_ota', $year);
			break;
		case 3:
			zipCSV('or_idioktisies_ota', $year);
			break;
		case 4:
			zipCSV('idioktites_ota', $year);
			break;
		case 5:
			zipCSV('agorapolisies_ota', $year);
			break;
		case 6:
			zipCSV('ypothikes_ota', $year);
			break;
		case 7:
			zipCSV('katasxeseis_ota', $year);
			break;
		case 8:
			zipCSV('emvado_orizontion_ota', $year);
			break;
		default:
		   echo "Not a valid dataset";
	}
}
echo "Year not provided. This script should be called by cy-csv.php or py-csv.php.";