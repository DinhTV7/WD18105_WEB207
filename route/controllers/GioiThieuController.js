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
            // console.log(response);
            // console.log(response.data);

            if (response.status == 200) { // Kiểm tra xem có call API thành công hay không
                $scope.listPosts = response.data;
            }
        })
    }

    // Gọi hàm
    $scope.getData();

    // Kiểm tra dữ liệu đã điền hay chưa
    $scope.kiemTraDuLieu = {
        title: false,
        description: false,
        author: false,
    }

    // Tạo phương thức để cập nhật dữ liệu
    $scope.onSubmitForm = function () {
        // console.log($scope.inputValue);

        // Đặt 1 biến để kiểm tra
        let flag = true;

        // Kiểm tra title có bỏ trống không
        if (!$scope.inputValue || !$scope.inputValue.title) {
            $scope.kiemTraDuLieu.title = true;
            flag = false;
        }
        // Kiểm tra description có bỏ trống không
        if (!$scope.inputValue || !$scope.inputValue.description) {
            $scope.kiemTraDuLieu.description = true;
            flag = false;
        }
        // Kiểm tra author có bỏ trống không
        if (!$scope.inputValue || !$scope.inputValue.author) {
            $scope.kiemTraDuLieu.author = true;
            flag = false;
        }

        // Nếu như không có lỗi gì xảy ra thì flag mặc định vẫn là true
        if (flag) {
            // Xử lý sửa thông tin
            let id = $scope.editId;
            if (id) {
                // Lấy dữ liệu từ input
                let updatePost = {
                    title: $scope.inputValue.title,
                    description: $scope.inputValue.description,
                    author: $scope.inputValue.author,
                }
                // Call api để cập nhật dữ liệu
                $http.put(
                    `${apiPosts}/${id}`, // Đường dẫn API
                    updatePost // Dữ liệu mới nhập từ input
                ).then(function(response) {
                    if (response.status == 200) {
                        $scope.getData();
                    }
                });
                return;
            }

            // Xử lý thêm dữ liệu
            // Lấy dữ liệu nhập vào từ ô input
            let newPost = {
                title: $scope.inputValue.title,
                description: $scope.inputValue.description,
                author: $scope.inputValue.author,
            }
            $http.post(
                apiPosts,   // Đường dẫn link API
                newPost     // Dữ liệu cần thêm
            ).then(function (response) {
                $scope.getData();
            })
        }
    }

    // Nút sửa
    $scope.editPost = function (postId) {
        $scope.editId = postId;
        
        // Lấy thông tin chi tiết của bài viết
        $http.get(`${apiPosts}/${postId}`)
        .then(function (response) {
            console.log(response.data);
            if (response.status == 200) {
                // Đưa dữ thông tin vào ô input
                $scope.inputValue = {
                    title: response.data.title,
                    description: response.data.description,
                    author: response.data.author
                }
            }
        })
    }

    // Nút xóa
    $scope.deletePost = function (deleteID) {
        let confirm = window.confirm("Bạn có đồng ý xóa hay không?");

        if (confirm) {
            // Call api xóa dữ liệu
            $http.delete(
                `${apiPosts}/${deleteID}` // Đường dẫn API
            ).then(function (response) {
                if (response.status == 200) {
                    $scope.getData();
                }
            })
        }
    }
}