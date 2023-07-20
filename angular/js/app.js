var myApp = angular.module('myApp', []);

// Viết tắt
myApp.controller('infoController', function($scope) {
    $scope.xinchao = "Hello world";

    // Khai báo 1 mảng
    $scope.phones = ["Samsung", "Apple", "Oppo", "Xiaomi"];

    // Khai báo 1 mảng gồm 3 đối tượng là nyc 
    // (họ tên, năm sinh, ngày chia tay, số điện thoại)
    // In ra view các thông tin dưới dạng bảng

    $scope.nyc = [
        {
            name: "Ngọc Trinh",
            since: 2010,
            date: "13-2-2023",
            phone: "0987654321"
        },
        {
            name: "Ngọc Trinh 2",
            since: 1995,
            date: "13-2-2023",
            phone: "0987654321"
        },
        {
            name: "Ngọc Trinh 3",
            since: 1995,
            date: "13-2-2023",
            phone: "0987654321"
        },
        // tenmang[vị trí].thuộc tính
    ];

    // Khai báo hàm
    // Cú pháp: $scope.ten_ham = function () { công việc }
    $scope.tenHam = function ($number) { // tham số truyền vào đc ghi ở trong khe ngoặc tròn
        alert("aaaa đau quá !" + $number);
    }

    // tạo thêm 1 cột là action
    // tạo 1 nút Xin chào 
    // Sau khi ấn vào thì sẽ hiển thị thông báo "Xin chào cục cưng + name"

    $scope.sayHello = function ($name) {
        alert("Xin chào cục cưng " + $name)
    }

    $scope.dungdoi = function () {
        alert("Mãi bên nhau bạn nhé");
    }

    // Tạo 1 sự kiện đưa chuột
    // Khi đưa chuột vào nyc có tuổi < 18 thì hiển thông báo "Đi tù"
    // > 18 hiển thị thông báo "Chuẩn bị 100 mâm"
    // tuoi = năm hiện tại - năm sinh
    // get current year in javascript
    $scope.year = new Date().getFullYear();
    $scope.nyc1 = ($nam_sinh) =>{
        if($scope.year - $nam_sinh <= 18){
            alert("Đi tù");
        }else{
            alert("Cưới")
        }
    }

    $scope.themMoi = function () {
        console.log($scope.name);
        console.log($scope.address);
    }

    // Tạo 1 vùng controller mới. Nhập vào 2 số và 1 button có sự kiện ng-click
    // Sau khi click thì gọi đến 1 phương thức thực hiện việc cộng 2 số

    // Tạo 1 form đăng nhập (tên đăng nhập và mật khẩu).
    // Nếu nhập vào mật khẩu là "thaydinhdeptrai"
    // thì hiển thị ở trang html (trong thẻ) chào mừng + tên đăng nhâp (ng-show)
    // Ngược lại thì sẽ hiển thị alert("Nhập sai mật khẩu")

    // Tạo 1 button có sự kiện onclick.
    // Sau mỗi lần ấn thì sẽ tăng thêm 1 đơn vị
    // Nếu > 5 thì hiển thị cảnh báo ở trang html (trong thẻ) (ng-if)
});