const searchInput = document.getElementById('search__form-input')
searchInput.addEventListener('input', () => searchInput.style.color = 'black');

function notEmptyValidation() {
  return searchInput.value.trim() !== '';
}
var browse_tab = document.getElementById("browse_tab");
browse_tab.className = "header_app_content orange-background hover_lightOrange";

document.getElementById('search-result').style.display = 'none'

//tambah
var app = angular.module('searchbook',[]);
app.controller('searchcon', function($scope, $http){
  console.log("PATEN");
  $scope.searchvalue = null;
  $scope.search = function(){
    //showResult();
    $scope.books = null;
    value = $scope.searchvalue.replace(/\s+/g, '+');
    //showLoader();
    url = "../server/api/get_books.php?search=" + value;
    console.log("test");
    $http.get(url)
      .then(function (response) {
        document.getElementById('search-result').style.display = 'block'
        //hideLoader();
        console.log($scope.books);
        if ($scope.books == null) {
          console.log("MASOKKKK PAK EKOOO!!!");
          //showNoResult();
        }
        $scope.books = response.data;
      })
  };
});