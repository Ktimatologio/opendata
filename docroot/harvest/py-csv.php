<?php

$date = date("Y-m");
if ($_GET["year"]) {
  $year = $_GET["year"];
} else {
  $year = date("Y",strtotime("-1 year"));
}

if($_GET["stat"] == 1) {
  //geotemaxia_ota
  $zip = new ZipArchive;
  if ($zip->open('../sites/default/files/stats/geotemaxia_ota/'.$year.'/geotemaxia_ota-'.$year.'.zip', ZipArchive::CREATE) === TRUE)
  {

      $path = "../sites/default/files/stats/geotemaxia_ota/".$year."/geotemaxia_ota_*.csv";
      $filenames = glob($path);
      foreach($filenames as $file) {
        $zip->addFile($file, "geotemaxia_ota/".$year."/".basename($file));
      }
      $zip->close();

      header('Location: ../sites/default/files/stats/geotemaxia_ota/'.$year.'/geotemaxia_ota-'.$year.'.zip');
      exit;
  }
}
elseif($_GET["stat"] == 2) {
  //ktimatografisi_ota
  $zip = new ZipArchive;
  if ($zip->open('../sites/default/files/stats/ktimatografisi_ota/'.$year.'/ktimatografisi_ota-'.$year.'.zip', ZipArchive::CREATE) === TRUE)
  {

      $path = "../sites/default/files/stats/ktimatografisi_ota/".$year."/ktimatografisi_ota_*.csv";
      $filenames = glob($path);
      foreach($filenames as $file) {
        $zip->addFile($file, "ktimatografisi_ota/".$year."/".basename($file));
      }
      $zip->close();

      header('Location: ../sites/default/files/stats/ktimatografisi_ota/'.$year.'/ktimatografisi_ota-'.$year.'.zip');
      exit;
  }
}
elseif($_GET["stat"] == 3) {
  //or_idioktisies_ota
  $zip = new ZipArchive;
  if ($zip->open('../sites/default/files/stats/or_idioktisies_ota/'.$year.'/or_idioktisies_ota-'.$year.'.zip', ZipArchive::CREATE) === TRUE)
  {

      $path = "../sites/default/files/stats/or_idioktisies_ota/".$year."/or_idioktisies_ota_*.csv";
      $filenames = glob($path);
      foreach($filenames as $file) {
        $zip->addFile($file, "or_idioktisies_ota/".$year."/".basename($file));
      }
      $zip->close();

      header('Location: ../sites/default/files/stats/or_idioktisies_ota/'.$year.'/or_idioktisies_ota-'.$year.'.zip');
      exit;
  }
}
elseif($_GET["stat"] == 4) {
  //idioktites_ota
  $zip = new ZipArchive;
  if ($zip->open('../sites/default/files/stats/idioktites_ota/'.$year.'/idioktites_ota-'.$year.'.zip', ZipArchive::CREATE) === TRUE)
  {

      $path = "../sites/default/files/stats/idioktites_ota/".$year."/idioktites_ota_*.csv";
      $filenames = glob($path);
      foreach($filenames as $file) {
        $zip->addFile($file, "idioktites_ota/".$year."/".basename($file));
      }
      $zip->close();

      header('Location: ../sites/default/files/stats/idioktites_ota/'.$year.'/idioktites_ota-'.$year.'.zip');
      exit;
  }
}
elseif($_GET["stat"] == 5) {
  //agorapolisies_ota
  $zip = new ZipArchive;
  if ($zip->open('../sites/default/files/stats/agorapolisies_ota/'.$year.'/agorapolisies_ota-'.$year.'.zip', ZipArchive::CREATE) === TRUE)
  {

      $path = "../sites/default/files/stats/agorapolisies_ota/".$year."/agorapolisies_ota_*.csv";
      $filenames = glob($path);
      foreach($filenames as $file) {
        $zip->addFile($file, "agorapolisies_ota/".$year."/".basename($file));
      }
      $zip->close();

      header('Location: ../sites/default/files/stats/agorapolisies_ota/'.$year.'/agorapolisies_ota-'.$year.'.zip');
      exit;
  }
}
elseif($_GET["stat"] == 6) {
  //ypothikes_ota
  $zip = new ZipArchive;
  if ($zip->open('../sites/default/files/stats/ypothikes_ota/'.$year.'/ypothikes_ota-'.$year.'.zip', ZipArchive::CREATE) === TRUE)
  {

      $path = "../sites/default/files/stats/ypothikes_ota/".$year."/ypothikes_ota_*.csv";
      $filenames = glob($path);
      foreach($filenames as $file) {
        $zip->addFile($file, "ypothikes_ota/".$year."/".basename($file));
      }
      $zip->close();

      header('Location: ../sites/default/files/stats/ypothikes_ota/'.$year.'/ypothikes_ota-'.$year.'.zip');
      exit;
  }
}
elseif($_GET["stat"] == 7) {
  //katasxeseis_ota
  $zip = new ZipArchive;
  if ($zip->open('../sites/default/files/stats/katasxeseis_ota/'.$year.'/katasxeseis_ota-'.$year.'.zip', ZipArchive::CREATE) === TRUE)
  {

      $path = "../sites/default/files/stats/katasxeseis_ota/".$year."/katasxeseis_ota_*.csv";
      $filenames = glob($path);
      foreach($filenames as $file) {
        $zip->addFile($file, "katasxeseis_ota/".$year."/".basename($file));
      }
      $zip->close();

      header('Location: ../sites/default/files/stats/katasxeseis_ota/'.$year.'/katasxeseis_ota-'.$year.'.zip');
      exit;
  }
}
elseif ($_GET["stat"] == 8) {
  //emvado_orizontion_ota
  $zip = new ZipArchive;
  if ($zip->open('../sites/default/files/stats/emvado_orizontion_ota/'.$year.'/emvado_orizontion_ota-'.$year.'.zip', ZipArchive::CREATE) === TRUE)
  {

      $path = "../sites/default/files/stats/emvado_orizontion_ota/".$year."/emvado_orizontion_ota*.csv";
      $filenames = glob($path);
      foreach($filenames as $file) {
        $zip->addFile($file, "emvado_orizontion_ota/".$year."/".basename($file));
      }
      $zip->close();

      header('Location: ../sites/default/files/stats/emvado_orizontion_ota/'.$year.'/emvado_orizontion_ota-'.$year.'.zip');
      exit;
  }
}
