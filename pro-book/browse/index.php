<?php require('../assets/php/checkauth.php'); ?>

<!DOCTYPE html>
<html>
<head>
  <title>Pro-Book | Browse</title>
  <link rel="stylesheet" type="text/css" media="screen" href="../assets/css/browse/search.css">
  <?php require('../assets/php/head.php'); ?>
</head>
<body>
  <?php require('../assets/php/header.php'); ?>

  <div class="search">
    <h1 class="search__title orange">Search Book</h1>
    <form 
      class="search__form" id="search__form" 
      method="get" action="/browse/search_result.php" onsubmit="return notEmptyValidation()"
    >
      <div class="search__form-row">
        <input 
          class="search__form-input" id="search__form-input" 
          type="text" name="search" placeholder="Input search terms..."
        >              
      </div>
      <div class="search__form-row">
        <button class="search__form-button hover_lightBlue button_up">Search</button>
      </div>
    </form>
  </div>

  <script src="../assets/js/browse/search.js"></script>
</body>
</html>