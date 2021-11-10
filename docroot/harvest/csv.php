<?php
$str = file_get_contents('https://maps.gov.gr/gis/map/Stats/getStat/'.$_GET["stat"]);

$array = array();
$array = preg_split('/\n|\r\n?/', $str);
array_shift($array);

$date = preg_split('#\r?\n#', $str, 0)[0];
$date = explode('|', $date);
$date = date("m-Y", strtotime($date[0]));

if($_GET["stat"] == 1) {
  $fp = fopen('stats/geotemaxia_ota_'.$date.'.csv', 'w'); 
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1]);
      fputcsv($fp, $array[$key]); 
    }

  }
  fclose($fp);
  header('Location: stats/geotemaxia_ota_'.$date.'.csv');
  exit;
  
} 
elseif($_GET["stat"] == 2) {
  $fp = fopen('stats/ktimatografisi_ota_'.$date.'.csv', 'w'); 
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1], "Λεκτικό" => $array[$key][2]);
      fputcsv($fp, $array[$key]);
    }

  }
  fclose($fp);
  header('Location: stats/ktimatografisi_ota_'.$date.'.csv');
  exit;
}
elseif($_GET["stat"] == 3) {
  $fp = fopen('stats/or_idioktisies_ota_'.$date.'.csv', 'w'); 
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1], "Λεκτικό" => $array[$key][2]);
      fputcsv($fp, $array[$key]);
    }

  }
  fclose($fp);
  header('Location: stats/or_idioktisies_ota_'.$date.'.csv');
  exit;
}
elseif($_GET["stat"] == 4) {
  $fp = fopen('stats/idioktites_ota_'.$date.'.csv', 'w'); 
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1], "Λεκτικό" => $array[$key][2]);
      fputcsv($fp, $array[$key]);
    }

  }
  fclose($fp);
  header('Location: stats/idioktites_ota_'.$date.'.csv');
  exit;
}
elseif($_GET["stat"] == 5) {
  $fp = fopen('stats/agorapolisies_ota_'.$date.'.csv', 'w'); 
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1], "Λεκτικό" => $array[$key][2]);
      fputcsv($fp, $array[$key]);
    }

  }
  fclose($fp);
  header('Location: stats/agorapolisies_ota_'.$date.'.csv');
  exit;
}
elseif($_GET["stat"] == 6) {
  $fp = fopen('stats/ypothikes_ota_'.$date.'.csv', 'w'); 
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1], "Λεκτικό" => $array[$key][2]);
      fputcsv($fp, $array[$key]);
    }

  }
  fclose($fp);
  header('Location: stats/ypothikes_ota_'.$date.'.csv');
  exit;
}
elseif($_GET["stat"] == 7) {
  $fp = fopen('stats/katasxeseis_ota_'.$date.'.csv', 'w'); 
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1], "Λεκτικό" => $array[$key][2]);
      fputcsv($fp, $array[$key]);
    }

  }
  fclose($fp);
  header('Location: stats/katasxeseis_ota_'.$date.'.csv');
  exit;
}
elseif ($_GET["stat"] == 8) {
  $fp = fopen('stats/emvado_orizontion_ota_'.$date.'.csv', 'w'); 
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1], "Λεκτικό" => $array[$key][2]);
      fputcsv($fp, $array[$key]);
    }

  }
  fclose($fp);
  header('Location: stats/emvado_orizontion_ota_'.$date.'.csv');
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