const searchInput = document.getElementById('search__form-input')
searchInput.addEventListener('input', () => searchInput.style.color = 'black');

function notEmptyValidation() {
  return searchInput.value.trim() !== '';
}
var browse_tab = document.getElementById("browse_tab");
browse_tab.className = "header_app_content orange-background hover_lightOrange";

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

// var app = angular.module('searchbook', []);
// app.controller('searchcon', function($scope) {
//     console.log("fungsi jalan");
//     var result = this;
//     console.log(result);
//     result.books = [];
//     result.keyword = "";
//     $scope.x = "FUCK";
//     // $scope.y = $books[1]->id;

//     result.search = function()
//     {
//         console.log(result.books);
//     	while(result.books.length > 0)
//     	{
//     	 	result.books.pop();
//     	}
//     	// document.getElementById('loader').style.display = "block";
//         // document.getElementById("test").style.display = "none";
//     	var xhttp = new XMLHttpRequest();
//     	xhttp.onreadystatechange = function()
//     	{
//     		if(this.readyState == 4 && this.status == 200)
//     		{
//         		var json = JSON.parse(this.responseText);
//           //    console.log(this.responseText);
//         		angular.forEach (json.item, function(book)
//                 {
//         		 	result.books.push(book);
//         		});
//         		$scope.$apply();
//     		// 	console.log(result.books);
//     		// document.getElementById('loader').style.display = "none";
//             // document.getElementById("test").style.display = "flex";
//             //result.books = this.responseText;
//             //console.log(result.books);   		
//             }
//         };  
//     	// console.log(result.keyword);
//     	xhttp.open("POST", "http://localhost:7777/server/api/get_books.php?search=" + result.keyword, true);
//     	// xhttp.open("POST", "./index.php", true);
//     	// xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     	xhttp.send("keyword="+result.keyword);
//     }
// });