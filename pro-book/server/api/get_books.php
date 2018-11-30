<?php
  // Mendapatkan kumpulan buku saat dilakukan pencarian
  function getBooks() {
    $wsdl ="http://localhost:7000/ws/bookservice?wsdl";
    $client = new SoapClient($wsdl, array('trace'=>1));
    
    $title = $_GET["search"];
    $id = "-56xtgEACAAJ";
    $categories = array("gore", "tps", "mature");
    $request_param = $title;
    //specific service call
    try {
      $response = $client->searchBook($request_param);
      $books = json_decode($response);

      return $books;
    } 
    catch (Exception $e) { 
      echo "<h2>Exception Error!</h2>"; 
      echo $e->getMessage(); 
    }
  }
?>
