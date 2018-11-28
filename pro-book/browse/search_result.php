<?php require('../assets/php/checkauth.php'); ?>

<!DOCTYPE html>
<html>
<head>
    <?php require('../assets/php/head.php'); ?>
    <title>Pro-Book | Search Result</title>
    <link rel="stylesheet" type="text/css" media="screen" href="../assets/css/browse/search_result.css">
</head>
<body>
  <?php 
    require('../assets/php/header.php'); 
    require('../server/api/get_books.php');
    require('../server/api/get_average_rating.php');

    $books = getBooks();
    $books_total = mysqli_num_rows($books);
  ?>

  <div class="search-result">
    <div class="search-result__header">
      <h1 class="search-result__title orange">Search Result</h1>
      <h1 class="search-result__found">Found <?php echo $books_total; ?> result(s)</h1>
    </div>
    <div class="search-result__items">
      <?php 
        while ($row = $books->fetch_assoc()) {
          $total_rating;
          $average_rating;
          $avg = getAverageRating($row['book_id']);
          while ($rtg = $avg->fetch_assoc()) {
            $total_rating = $rtg['total_rating'];
            $average_rating = number_format($rtg['avg_rating'], 1);
          }
          echo "
            <div id='item-{$row['book_id']}' class='search-result__item'>
              <div class='search-result__item-content'>
                <img src='{$row['image']}' alt='item' class='search-result__item-img'>
                <div class='search-result__item-body'>
                  <h3 class='search-result__item-title orange'>{$row['title']}</h3>
                  <h5 class='search-result__item-subtitle'>
                    {$row['author']} - {$average_rating}/5.0 ({$total_rating} votes)
                  </h5>
                  <p class='search-result__item-desc'>{$row['synopsis']}</p>
                </div>
              </div>
              <button class='search-result__detail hover_lightBlue button_up'>
                <a href='/browse/book_details.php?book={$row['book_id']}'>Detail</a>
              </button>
            </div>
          ";
        }
      ?>
    </div>
  </div>
  <script>
    var browse_tab = document.getElementById("browse_tab");
    browse_tab.className = "header_app_content orange-background hover_lightOrange";
  </script>
</body>
</html>