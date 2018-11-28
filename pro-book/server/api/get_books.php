<?php
  // Mendapatkan kumpulan buku saat dilakukan pencarian
  function getBooks() {
    require(dirname(__FILE__)."/../server.php");
    $search_query = $_GET["search"];

    $get_books_query = "SELECT * FROM books WHERE title LIKE '%{$search_query}%'";
    return $link->query($get_books_query);
  }
?>
