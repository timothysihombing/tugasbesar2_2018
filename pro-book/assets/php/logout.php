<?php

  setcookie("id", NULL, NULL, '/');
  setcookie("username", NULL, NULL, '/');
  setcookie("accesstoken", NULL, NULL, '/');
  header("Location: /login");

?>