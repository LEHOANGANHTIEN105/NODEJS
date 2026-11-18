# BÀI 3 - BÀI TẬP 04: Kết nối MongoDB và thao tác với cơ sở dữ liệu

## MÔ TẢ CÁCH CHẠY

## 1. Các bước thực hiện

**Bước 1:** Mở Terminal tại thư mục `BT 04`.

Sử dụng lệnh:

cd "D:\CĐ - CNTT18A\Bài 3 - Bài Tập 1\Node JS\Bai 03\BT 04"

**Bước 2:** Cài đặt thư viện MongoDB.

Sử dụng lệnh:

npm install mongodb

**Bước 3:** Kiểm tra thư viện MongoDB đã được cài đặt.

Sử dụng lệnh:

npm list mongodb

**Bước 4:** Chạy chương trình bằng lệnh:

node bai04.js

**Bước 5:** Chương trình kết nối đến MongoDB đang chạy trên máy và sử dụng database `qlsinhvien`, collection `students`.

**Bước 6:** Sử dụng `insertMany()` để thêm ít nhất 3 sinh viên vào collection `students`. Mỗi sinh viên gồm các thông tin:

- `masv`: Mã sinh viên.
- `hoten`: Họ tên sinh viên.
- `tuoi`: Tuổi.
- `diem`: Điểm.

**Bước 7:** Sử dụng `find()` để đọc và hiển thị danh sách sinh viên đã thêm lên Terminal.

**Bước 8:** Đóng kết nối MongoDB sau khi hoàn thành chương trình.
