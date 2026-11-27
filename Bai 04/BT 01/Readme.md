# BÀI 01 - XÂY DỰNG WEBSITE GIỚI THIỆU CÁ NHÂN

## 1. Giới thiệu

Xây dựng website giới thiệu cá nhân bằng Node.js và Express.js.

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

Mở Terminal trong Visual Studio Code và di chuyển đến thư mục BT 01:

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

- `app.js`: Xử lý server và các đường dẫn.
- `public/style.css`: Thiết kế giao diện website.
- `package.json`: Quản lý thông tin và thư viện của dự án.

### Bước 5: Khởi chạy website

Chạy lệnh:

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

Các ảnh minh chứng được lưu trong thư mục `screenshots`.

1. `01_TrangChu.png`
2. `02_GioiThieu.png`
3. `03_KyNang.png`
4. `04_SoThich.png`
5. `05_LienHe.png`
6. `06_Loi404.png`

## 3. Khảo sát các dịch vụ Hosting miễn phí

3 dịch vụ Hosting hỗ trợ triển khai ứng dụng Node.js:

### 3.1. Render

- Hỗ trợ Node.js và Express.js.
- Có gói miễn phí.
- Có thể kết nối trực tiếp với GitHub.
- Hỗ trợ triển khai website thông qua Web Service.

Website: https://render.com/

### 3.2. Koyeb

- Hỗ trợ triển khai ứng dụng Node.js.
- Có gói miễn phí với giới hạn tài nguyên.
- Có thể triển khai ứng dụng từ GitHub.

Website: https://www.koyeb.com/

### 3.3. Vercel

- Hỗ trợ triển khai ứng dụng Express.js.
- Có thể kết nối với GitHub.
- Phù hợp với các ứng dụng web sử dụng kiến trúc serverless.

Website: https://vercel.com/

## 4. Lựa chọn Hosting và triển khai website

Sau khi khảo sát, em lựa chọn **Render** để triển khai website cá nhân.

### 4.1. Lý do lựa chọn

- Dễ sử dụng.
- Hỗ trợ Node.js và Express.js.
- Có gói miễn phí.
- Có thể kết nối với GitHub để triển khai dự án.

### 4.2. Cấu hình triển khai

- Hosting: Render
- Loại dịch vụ: Web Service
- Git Repository: LEHOANGANHTIEN105/NODEJS
- Branch: main
- Root Directory: `Bai 04/BT 01`
- Build Command: `npm install`
- Start Command: `npm start`
- Instance Type: Free

### 4.3. Kết quả triển khai

Website đã được triển khai thành công trên Render.

**Link website:**

https://nodejs-5a5g.onrender.com/

Ảnh minh chứng triển khai thành công được lưu trong thư mục `screenshots` với tên:

`07_RenderDeploySuccess.png`
