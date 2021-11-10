<?php
$str = file_get_contents('https://maps.gov.gr/gis/map/Stats/getStat/'.$_GET["stat"]);
if($_GET["stat"] == 1) {
  $stat = "Πλήθος γεωτεμαχίων ανά ΟΤΑ";
} elseif($_GET["stat"] == 2) {
  $stat = "Κατάσταση Κτηματογράφησης ανά ΟΤΑ";
} elseif($_GET["stat"] == 3) {
  $stat = "Πλήθος οριζοντίων ιδιοκτησιών ανά ΟΤΑ";
} elseif($_GET["stat"] == 4) {
  $stat = "Πλήθος ιδιοκτητών ανά ΟΤΑ";
} elseif($_GET["stat"] == 5) {
  $stat = "Πλήθος αγοραπωλησιών ανά ΟΤΑ (Από την αρχή του έτους)";
} elseif($_GET["stat"] == 6) {
  $stat = "Πλήθος υποθηκών ανά ΟΤΑ";
} elseif($_GET["stat"] == 7) {
  $stat = "Πλήθος κατασχέσεων ανά ΟΤΑ";
} elseif($_GET["stat"] == 8) {
  $stat = "Εμβαδό οριζοντίων ανά ΟΤΑ";
}else {
  $stat = "-";
}
$array = array();
$array = preg_split('/\n|\r\n?/', $str);
array_shift($array);

if($_GET["stat"] == 1) {
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("ota" => $array[$key][0], "timi" => $array[$key][1]);
    }

  }
  $ota = array_column($array, 'ota');
  $ota = json_encode($ota);
  $timi = array_column($array, 'timi');
  $timi = json_encode($timi);
  ?>

  <!DOCTYPE html>
  <html>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
  <body>

  <canvas id="myChart" style="width:100%;"></canvas>

  <script>
  var xValues = <?php echo $ota; ?>;
  var yValues = <?php echo $timi; ?>;
  var barColors = "rgba(59, 89, 152, 0.75)";

  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "<?php echo $stat; ?>"
      },
      scales: {
        xAxes: [{
          ticks: {
              autoSkip: true,
              maxRotation: 85,
              minRotation: 85
          }
        }]
      }
    }
  });
  </script>

<?php 
} 
elseif($_GET["stat"] == 2) {
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("ota" => $array[$key][0], "timi" => $array[$key][1], "lektiko" => $array[$key][2]);
    }

  }
  $ota = array_column($array, 'ota');
  $ota = json_encode($ota);
  $lektiko = array_column($array, 'lektiko');
  $lektiko = json_encode($lektiko);
  ?>

  <!DOCTYPE html>
  <html>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
  <body>

  <canvas id="myChart" style="width:100%;"></canvas>

  <script>
  var xValues = <?php echo $lektiko; ?>;
  var yValues = <?php echo $ota; ?>;
  var barColors = "rgba(59, 89, 152, 0.75)";

  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "<?php echo $stat; ?>"
      },
      scales: {
        xAxes: [{
          ticks: {
              autoSkip: true,
              maxRotation: 85,
              minRotation: 85
          }
        }]
      }
    }
  });
  </script>

<?php 
}
elseif ($_GET["stat"] == 8) {
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("ota" => $array[$key][0], "timi" => $array[$key][1], "lektiko" => $array[$key][2]);
    }

  }
  $lektiko = array_column($array, 'lektiko');
  $lektiko = json_encode($lektiko);
  $timi = array_column($array, 'timi');
  $timi = json_encode($timi);
  ?>

  <!DOCTYPE html>
  <html>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
  <body>

  <canvas id="myChart" style="width:100%;"></canvas>

  <script>
  var xValues = <?php echo $lektiko; ?>;
  var yValues = <?php echo $timi; ?>;
  var barColors = "rgba(59, 89, 152, 0.75)";

  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "<?php echo $stat; ?>"
      },
      scales: {
        xAxes: [{
          ticks: {
              autoSkip: true,
              maxRotation: 85,
              minRotation: 85
          }
        }]
      }
    }
  });
  </script> 
<?php }
else {
  foreach($array as $key => $str)
  {
    $array[$key] = explode('~', $str);
    if(isset($array[$key][1])) {
      $array[$key] = array("ota" => $array[$key][0], "timi" => $array[$key][1], "lektiko" => $array[$key][2]);
    }

  }
  $lektiko = array_column($array, 'lektiko');
  $lektiko = json_encode($lektiko);
  $timi = array_column($array, 'timi');
  $timi = json_encode($timi);
  ?>

  <!DOCTYPE html>
  <html>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
  <body>

  <canvas id="myChart" style="width:100%;"></canvas>

  <script>
  var xValues = <?php echo $lektiko; ?>;
  var yValues = <?php echo $timi; ?>;
  var barColors = "rgba(59, 89, 152, 0.75)";

  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "<?php echo $stat; ?>"
      },
      scales: {
        xAxes: [{
          ticks: {
              autoSkip: true,
              maxRotation: 85,
              minRotation: 85
          }
        }]
      }
    }
  });
  </script>
<?php } ?>

</body>
</html>