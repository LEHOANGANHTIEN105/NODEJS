# BÀI TẬP 07 - Xử lý tham số URL trên Web Server

## Các bước thực hiện

### Bước 1: Tạo tập tin bai07.js

Tạo tập tin `bai07.js` trong thư mục Bt07.

Sử dụng module `http` và đối tượng `URL` để xây dựng Web Server.

### Bước 2: Khởi động Web Server

Mở Terminal tại thư mục Bt07 và nhập lệnh:

-- cd "D:\CĐ - CNTT18A\Bài 3 - Bài Tập 1\Node JS\Bai 03\BT 07"

-- node bai07.js

Kết quả:

Web Server đang chạy tại http://localhost:3001

### Bước 3: Kiểm tra chức năng chào hỏi

Truy cập địa chỉ:

http://localhost:3001/hello?name=Minh

Kết quả:

Xin chào Minh

### Bước 4: Kiểm tra chức năng tính tổng

Truy cập địa chỉ:

http://localhost:3001/sum?a=10&b=20

Kết quả:

Tổng = 30

### Bước 5: Kiểm tra xử lý lỗi

Trường hợp thiếu tham số:

http://localhost:3001/hello

Kết quả:

Lỗi: Thiếu tham số name!

Trường hợp nhập giá trị không hợp lệ:

http://localhost:3001/sum?a=abc&b=20

Kết quả:

Lỗi: Giá trị a và b phải là số hợp lệ!