<?php
  // if (!isset($_REQUEST['search'])) {
  //   require '../browse/search_result.php';
  // } else {
  // Mendapatkan kumpulan buku saat dilakukan pencarian
  $wsdl ="http://localhost:7000/ws/bookservice?wsdl";
  $client = new SoapClient($wsdl, array('trace'=>1));
  
  $category = explode(",", $_REQUEST["search"]);
  // $id = "-56xtgEACAAJ";
 // $categories = array("gore", "tps", "mature");
  $request_param = $category;
  //specific service call
  try {
    // $response = $client->detailBook($request_param);
    $response = $client->recommendBook($request_param);

    // $response = $client->searchBook($request_param);
    if (is_null($response)) {
      $response = $client->recommendBook($request_param[0]);
    } else {
      $books = json_decode($response);     
    }
    // print_r($books);

    echo ($response);
  } 
  catch (Exception $e) {
    // if (!is_null($response)) {
    echo "<h2>Exception Error!</h2>"; 
    // }
    echo $e->getMessage(); 
    }
  // }
?>
