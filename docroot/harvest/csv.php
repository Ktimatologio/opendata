<?php
$str = file_get_contents('https://maps.gov.gr/gis/map/Stats/getStat/'.$_GET["stat"]);

$array = array();
$array = preg_split('/\n|\r\n?/', $str);
array_shift($array);

// $date = preg_split('#\r?\n#', $str, 0)[0];
// $date = explode('|', $date);
// $date = date("Y-m", strtotime($date[0]));
$date = date("Y-m");
$year = date("Y");

if (!file_exists('../sites/default/files/stats')) {
  mkdir('../sites/default/files/stats', 0777, true);
}

if($_GET["stat"] == 1) {
  //geotemaxia_ota
  if (!file_exists('../sites/default/files/stats/geotemaxia_ota/'.$year.'')) {
    mkdir('../sites/default/files/stats/geotemaxia_ota/'.$year.'', 0777, true);
  }
  $fp = fopen('../sites/default/files/stats/geotemaxia_ota/'.$year.'/geotemaxia_ota_'.$date.'.csv', 'w'); 
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1]);
      fputcsv($fp, $array[$key]); 
    }

  }
  fclose($fp);
  header('Location: ../sites/default/files/stats/geotemaxia_ota/'.$year.'/geotemaxia_ota_'.$date.'.csv');
  exit;
  
} 
elseif($_GET["stat"] == 2) {
  //ktimatografisi_ota
  if (!file_exists('../sites/default/files/stats/ktimatografisi_ota/'.$year.'')) {
    mkdir('../sites/default/files/stats/ktimatografisi_ota/'.$year.'', 0777, true);
  }
  $fp = fopen('../sites/default/files/stats/ktimatografisi_ota_'.$date.'.csv', 'w'); 
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1], "Λεκτικό" => $array[$key][2]);
      fputcsv($fp, $array[$key]);
    }

  }
  fclose($fp);
  header('Location: ../sites/default/files/stats/ktimatografisi_ota_'.$date.'.csv');
  exit;
}
elseif($_GET["stat"] == 3) {
  //or_idioktisies_ota
  if (!file_exists('../sites/default/files/stats/or_idioktisies_ota/'.$year.'')) {
    mkdir('../sites/default/files/stats/or_idioktisies_ota/'.$year.'', 0777, true);
  }
  $fp = fopen('../sites/default/files/stats/or_idioktisies_ota_'.$date.'.csv', 'w'); 
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1], "Λεκτικό" => $array[$key][2]);
      fputcsv($fp, $array[$key]);
    }

  }
  fclose($fp);
  header('Location: ../sites/default/files/stats/or_idioktisies_ota_'.$date.'.csv');
  exit;
}
elseif($_GET["stat"] == 4) {
  //idioktites_ota
  if (!file_exists('../sites/default/files/stats/idioktites_ota/'.$year.'')) {
    mkdir('../sites/default/files/stats/idioktites_ota/'.$year.'', 0777, true);
  }
  $fp = fopen('../sites/default/files/stats/idioktites_ota_'.$date.'.csv', 'w'); 
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1], "Λεκτικό" => $array[$key][2]);
      fputcsv($fp, $array[$key]);
    }

  }
  fclose($fp);
  header('Location: ../sites/default/files/stats/idioktites_ota_'.$date.'.csv');
  exit;
}
elseif($_GET["stat"] == 5) {
  //agorapolisies_ota
  if (!file_exists('../sites/default/files/stats/agorapolisies_ota/'.$year.'')) {
    mkdir('../sites/default/files/stats/agorapolisies_ota/'.$year.'', 0777, true);
  }
  $fp = fopen('../sites/default/files/stats/agorapolisies_ota_'.$date.'.csv', 'w'); 
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1], "Λεκτικό" => $array[$key][2]);
      fputcsv($fp, $array[$key]);
    }

  }
  fclose($fp);
  header('Location: ../sites/default/files/stats/agorapolisies_ota_'.$date.'.csv');
  exit;
}
elseif($_GET["stat"] == 6) {
  //ypothikes_ota
  if (!file_exists('../sites/default/files/stats/ypothikes_ota/'.$year.'')) {
    mkdir('../sites/default/files/stats/ypothikes_ota/'.$year.'', 0777, true);
  }
  $fp = fopen('../sites/default/files/stats/ypothikes_ota_'.$date.'.csv', 'w'); 
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1], "Λεκτικό" => $array[$key][2]);
      fputcsv($fp, $array[$key]);
    }

  }
  fclose($fp);
  header('Location: ../sites/default/files/stats/ypothikes_ota_'.$date.'.csv');
  exit;
}
elseif($_GET["stat"] == 7) {
  //katasxeseis_ota
  if (!file_exists('../sites/default/files/stats/katasxeseis_ota/'.$year.'')) {
    mkdir('../sites/default/files/stats/katasxeseis_ota/'.$year.'', 0777, true);
  }
  $fp = fopen('../sites/default/files/stats/katasxeseis_ota_'.$date.'.csv', 'w'); 
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1], "Λεκτικό" => $array[$key][2]);
      fputcsv($fp, $array[$key]);
    }

  }
  fclose($fp);
  header('Location: ../sites/default/files/stats/katasxeseis_ota_'.$date.'.csv');
  exit;
}
elseif ($_GET["stat"] == 8) {
  //emvado_orizontion_ota
  if (!file_exists('../sites/default/files/stats/emvado_orizontion_ota/'.$year.'')) {
    mkdir('../sites/default/files/stats/emvado_orizontion_ota/'.$year.'', 0777, true);
  }
  $fp = fopen('../sites/default/files/stats/emvado_orizontion_ota_'.$date.'.csv', 'w'); 
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1], "Λεκτικό" => $array[$key][2]);
      fputcsv($fp, $array[$key]);
    }

  }
  fclose($fp);
  header('Location: ../sites/default/files/stats/emvado_orizontion_ota_'.$date.'.csv');
  exit;
}
else {
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1], "Λεκτικό" => $array[$key][2]);
      fputcsv($fp, $array[$key]);
    }

  }
  fclose($fp);
} 