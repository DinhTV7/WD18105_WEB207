window.EditController = function ($scope, $http, $routeParams) {
    $scope.title = "Sửa thông tin bài viết";

    let editId = $routeParams.id;

    const apiPosts = "http://localhost:3000/posts";

    // gọi api lấy thông tin chi tiết bài viết
    if (editId) {
        $http.get(`${apiPosts}/${editId}`).then(function(response){
            if(response.status == 200){
                $scope.inputValue = {
                    title: response.data.title,
                    author: response.data.author
                }
            }
        })
    }
    
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
            let updateItem  = {
                title: $scope.inputValue.title,
                author: $scope.inputValue.author
            }
            $http.put(
                `${apiPosts}/${editId}`,
                updateItem
            ).then(function(response){
                if(response.status == 200) {
                    document.location = 'index.html'
                }
            })
        }
    }
}