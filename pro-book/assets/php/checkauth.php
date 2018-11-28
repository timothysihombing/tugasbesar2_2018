<?php
  // Jika cookie kosong, makan berarti belum login
  if (!isset($_COOKIE['id']) || !isset($_COOKIE['username']) || !isset($_COOKIE["accesstoken"])) {
    header("Location: /login");
  }

  $accesstoken = explode("-", $_COOKIE["accesstoken"]);

  // Jika expiry time accesstoken sudah habis, maka dipaksa logout
  if ((time() >= $accesstoken[2]) && time() >= strtotime($accesstoken[2])) {
    header("Location: /assets/php/logout.php");
  }

  // Jika id atau username tidak sesuai dengan yang tersimpan di accesstoken maka dipaksa logout
  if (sha1($_COOKIE['username'] . $_COOKIE['id']) !== $accesstoken[1]) {
    header("Location: /assets/php/logout.php");
  }
?>