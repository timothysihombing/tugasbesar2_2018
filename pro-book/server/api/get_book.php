<?php

  function getBook($book_id) {
    require(dirname(__FILE__)."/../server.php");

    $get_book_query = "SELECT * FROM books WHERE book_id = {$book_id}";
    return $link->query($get_book_query);
  }

?>