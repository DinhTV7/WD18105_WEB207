window.GioiThieuController = function ($scope, $routeParams, $http) {
    $scope.title = "Đây là trang giới thiệu";

    // $routeParams: để lấy dữ liệu trên url
    $scope.id = $routeParams.id;

    // Thực hiện công việc call API
    // Chúng ta cần thêm tham số $http ( là giao thức để call API )

    // Định nghĩa đường dẫn API
    const apiPosts = "http://localhost:3000/posts";

    // Tạo 1 phương thức để thực hiện việc call dữ liệu
    // Tạo 1 phương thức (hàm) có tên là getData
    $scope.getData = function () {
        // console.log(123456);
        // Sử dụng $http đi call API
        $http.get(apiPosts).then(function (response) {
            // Kiểm tra dữ liệu
            console.log(response);
            console.log(response.data);

            if (response.status == 200) { // Kiểm tra xem có call API thành công hay không
                $scope.listPosts = response.data;
            }
        })
    }

    // Gọi hàm
    $scope.getData();
}