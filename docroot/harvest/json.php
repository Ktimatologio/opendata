<?php
$str = file_get_contents('https://maps.gov.gr/gis/map/Stats/getStat/'.$_GET["stat"]);

$array = array();
$array = preg_split('/\n|\r\n?/', $str);
$date = preg_split('#\r?\n#', $str, 0)[0];
array_shift($array);

if($_GET["stat"] == 1) {
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1]);
    }
  }
  $date = explode('|', $date);
  $date = array("Τελ. ενημέρωση" => $date[0]);
  echo json_encode(array_merge($array, $date));
  
} 
elseif($_GET["stat"] == 2) {
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1], "Λεκτικό" => $array[$key][2]);
    }

  }
  echo json_encode($array);
}
elseif ($_GET["stat"] == 8) {
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1], "Λεκτικό" => $array[$key][2]);
    }

  }
  echo json_encode($array);
}
else {
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("κωδικός ΟΤΑ" => $array[$key][0], "τιμή" => $array[$key][1], "Λεκτικό" => $array[$key][2]);
    }

  }
  echo json_encode($array);
} 