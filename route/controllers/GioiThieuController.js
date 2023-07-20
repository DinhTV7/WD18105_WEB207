window.GioiThieuController = function ($scope, $routeParams) {
    $scope.title = "Đây là trang giới thiệu";

    // $routeParams: để lấy dữ liệu trên url
    $scope.id = $routeParams.id;
}