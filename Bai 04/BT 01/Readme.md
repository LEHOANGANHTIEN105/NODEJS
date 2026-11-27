
# BÀI 01 - XÂY DỰNG WEBSITE GIỚI THIỆU CÁ NHÂN

## 1. Giới thiệu

Xây dựng website cá nhân bằng Node.js và Express.js.

Website gồm các trang:
- Trang chủ
- Giới thiệu
- Kỹ năng
- Sở thích
- Liên hệ
- Trang lỗi 404

Giao diện được thiết kế bằng HTML và CSS, có menu điều hướng giữa các trang.

## 2. Thực hiện và chạy trên máy cá nhân (localhost)

### Bước 1: Khởi tạo thư mục dự án

Mở Terminal trong Visual Studio Code và di chuyển đến thư mục Bt01:

```powershell
cd "D:\MyNodeJS\Bai 04\BT 01"
```

### Bước 2: Khởi tạo dự án Node.js

```powershell
npm init -y
```

### Bước 3: Cài đặt Express.js

```powershell
npm install express
```

### Bước 4: Tạo chương trình

Tạo các tập tin:
- app.js: xử lý server và các đường dẫn.
- public/style.css: thiết kế giao diện website.

### Bước 5: Khởi chạy website

```powershell
node app.js
```

Kết quả hiển thị trong Terminal:

```text
Website đang chạy tại http://localhost:3000
```

### Bước 6: Kiểm tra các trang

- Trang chủ: http://localhost:3000
- Giới thiệu: http://localhost:3000/about
- Kỹ năng: http://localhost:3000/skills
- Sở thích: http://localhost:3000/hobbies
- Liên hệ: http://localhost:3000/contact
- Lỗi 404: http://localhost:3000/404

### Bước 7: Hình ảnh kết quả

Các ảnh minh chứng được lưu trong thư mục screenshots.

1. 01_TrangChu.png
2. 02_GioiThieu.png
3. 03_KyNang.png
4. 04_SoThich.png
5. 05_LienHe.png
6. 06_Loi404.png
