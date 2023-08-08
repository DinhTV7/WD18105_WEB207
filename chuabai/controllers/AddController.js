window.AddController = function ($scope, $http) {
    $scope.title = "Thêm bài viết mới";

    const apiPosts = "http://localhost:3000/posts";
    
    $scope.kiemTraDuLieu = {
        title:false,
        author:false
    }

    $scope.onSubmitForm = function () {
        let flag = true;
        if(!$scope.inputValue || !$scope.inputValue.title) {
            $scope.kiemTraDuLieu.title = true;
            flag = false;
        }
        
        if(!$scope.inputValue || !$scope.inputValue.author) {
            $scope.kiemTraDuLieu.author = true;
            flag = false;
        }
        if (flag) {
            let newItem = {
                title: $scope.inputValue.title,
                author: $scope.inputValue.author 
            }
            console.log(newItem);
            $http.post(
                apiPosts, 
                newItem 
            ).then(function (response){
                document.location = "index.html"
            })
        }
    }
}