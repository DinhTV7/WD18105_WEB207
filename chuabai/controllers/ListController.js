window.ListController = function ($scope, $http) {
    $scope.title = "Danh sách bài viết";

    const apiPosts = "http://localhost:3000/posts";

    function getData() {
        $http.get(apiPosts).then(function (response) {
            if (response.status == 200) {
                $scope.listPosts = response.data;
            }
        })
    }
    getData();

    $scope.deletePost = function(deleteId) {
        let confirm = window.confirm("bạn có muốn xóa không ???");

        if (confirm) {
            $http.delete(
                `${apiPosts}/${deleteId}`,
            ).then(function (response) {
                if (response.status == 200) {
                    document.location = 'index.html'
                }
            })
        }
    }
}
