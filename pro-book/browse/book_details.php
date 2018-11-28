<?php require('../assets/php/checkauth.php'); ?>

<!DOCTYPE html>
<html>
<head>
    <?php require("../assets/php/head.php"); ?>
    <title>Pro-Book | Search Result</title>
    <link rel="stylesheet" type="text/css" media="screen" href="../assets/css/browse/detail.css">
</head>
<body>
  <?php 
    require('../assets/php/header.php'); 
    require('../server/api/get_book.php');
    require('../server/api/get_average_rating.php');
    require('../server/api/get_reviews.php');

    $book_id = $_GET["book"];
    $book = getBook($book_id);
    $book_reviews = getBookReviews($book_id);

    $average_rating;
    $book_rating = getAverageRating($book_id);
    while($row = $book_rating->fetch_assoc()) {
      $average_rating = number_format($row["avg_rating"], 1);
    }
  ?>

  <div class="detail">
    <?php
      while($row = $book->fetch_assoc()) {
        echo "
        <div class='detail__book'>
          <div class='detail__book-text'>
            <h1 class='detail__book-title orange'>{$row['title']}</h1>
            <h4 class='detail__book-author'>{$row['author']}</h4>
            <p class='detail__book-desc'>{$row['synopsis']}</p>
          </div>
          <div class='detail__book-imgrating'>
            <img src='{$row['image']}' class='detail__image'/>
            <div class='detail__rating'>
              <div class='detail__rating-star'>
                <span title='five stars'>★</span>
                <span title='four stars'>★</span>
                <span title='three stars'>★</span>
                <span title='two stars'>★</span>
                <span title='one star'>★</span>
              </div>
              <p class='detail__rating-number'>{$average_rating} / 5.0</p>
            </div>
          </div>
        </div>  
        ";
      }
    ?>
    <div class="detail__order">
      <h1 class="detail__order-title blue-dark">Order</h1>
      <div class="detail__order-number">
        <p class="">Jumlah : </p>
        <select id="total-order">
          <?php 
            for($i = 1; $i <= 5; $i++) { echo "<option value='{$i}'>{$i}</option>"; }
          ?>
        </select>
      </div>
      <div class="detail__order-button">
        <button 
          class="blue-medium-background hover_lightBlue button_up" 
          onclick="orderBook(<?php echo $_COOKIE['id'] ?>, <?php echo $book_id ?>)">Order</button>
      </div>
    </div>
    <div class="detail__reviews">
      <h1 class="detail__reviews-title blue-dark">Reviews</h1>
      <?php
        while($row = $book_reviews->fetch_assoc()) {
          if ($row['rating'] <= 0) { continue; }

          $rating = number_format($row['rating'], 1);
          echo "
            <div class='detail__review'>
              <div class='detail__img-reviewer'>
                <img src='{$row['image']}' />
              </div>
              <div class='detail__text-reviewer'>
                <div class='detail__username-reviewer'> 
                  <h1>@{$row['username']}</h1>
                </div>
                <div class='detail__comment-reviewer'>
                  <p>{$row['comment']}</p> 
                </div>
              </div>
              <div class='detail__rating-reviewer'>
                <p class='detail__rating-reviewer-star'>★</p>
                <p class='detail__rating-reviewer-number'>{$rating} / 5.0</p>
              </div>
            </div>
          ";
        }
      ?>
    </div>
  </div>

  <?php 
    require('../assets/php/modal.php');
  ?>

  <script src="../assets/js/browse/modal.js"></script>
  <script src="../assets/js/browse/book_details.js"></script>
</body>
</html>