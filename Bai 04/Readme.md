# BÀI 4: XÂY DỰNG WEB VỚI NỀN TẢNG EXPRESS (EPRESS FRAMEWORK)

## 3. Cài đặt và thực hiện

### Bước 1: Mở thư mục thực hành

```powershell
cd "D:\CĐ - CNTT18A\MyNodeJS\EXPRESS"
```

### Bước 2: Khởi tạo dự án

```bash
npm init -y
```

### Bước 3: Cài đặt các thư viện

```bash
npm install express
```

## 4. Nội dung thực hiện

### Ví dụ 1: Express cơ bản

Chạy chương trình:

```bash
node app.js
```

Truy cập trình duyệt:

```text
http://localhost:3000
```

### Ví dụ 2: Express Route

Chạy chương trình:

```bash
node express_route.js
```

Kiểm tra các đường dẫn:

```text
http://localhost:3000
http://localhost:3000/about
http://localhost:3000/users?name=Minh
```

### Ví dụ 3: Middleware

Chạy chương trình:

```bash
node express_middleware.js
```

Truy cập trình duyệt:

```text
http://localhost:3000
```

### Ví dụ 4: Template Engine (Pug và Handlebars)

**Phần 1: Pug**

Chạy chương trình:

```bash
node express_pug.js
```

Truy cập trình duyệt:

```text
http://localhost:3000
```

**Phần 2: Handlebars**

Chạy chương trình:

```bash
node express_handlebars.js
```

Truy cập:

```text
http://localhost:3000
```

Kết quả: Hiển thị giao diện sử dụng template Handlebars.

### Ví dụ 5: Error Handling

Chạy chương trình:

```bash
node express_errorhandling.js
```

Truy cập:

```text
http://localhost:3000
```

Thực hiện nhập dữ liệu và kiểm tra kết quả xử lý lỗi của chương trình.

### Ví dụ 6: Xây dựng dự án Express theo mô hình MVC

Di chuyển vào thư mục dự án:

```powershell
cd "D:\CĐ - CNTT18A\MyNodeJS\EXPRESS\my-express-app"
```

Chạy chương trình:

```bash
node app.js
```

Truy cập:

```text
http://localhost:3000/calculator
```

Kết quả: Hiển thị ứng dụng Calculator, cho phép nhập hai số và lựa chọn phép tính.

## 5. Kết quả thực hiện

Các ví dụ đã được thực hành trên máy tính cá nhân bằng Visual Studio Code và kiểm tra kết quả trên trình duyệt Google Chrome.

Các hình ảnh minh họa bao gồm:

- Hình ảnh mã nguồn chương trình.
- Hình ảnh lệnh chạy trên Terminal.
- Hình ảnh kết quả hiển thị trên trình duyệt.
- Hình ảnh giao diện và kết quả tính toán của ứng dụng MVC.

## 6. Cấu trúc thư mục

```text
Baitapvidu/
│
├── Bai01_Express/
│   └── app.js
│
├── Bai02_Route/
│   └── express_route.js
│
├── Bai03_Middleware/
│   └── express_middleware.js
│
├── Bai04_TemplateEngine/
│   ├── express_pug.js
│   ├── express_handlebars.js
│   └── views/
│
├── Bai05_ErrorHandling/
│   └── express_errorhandling.js
│
├── Bai06_MVC/
│   └── my-express-app/
│       ├── app.js
│       ├── controllers/
│       ├── models/
│       ├── views/
│       └── public/
│
├── Screenshots/
│
└── Readme.md
```

## 7. Kết luận

Qua bài thực hành, em đã tìm hiểu và thực hiện được các kiến thức cơ bản về Express.js, định tuyến, Middleware, Template Engine, xử lý lỗi và xây dựng ứng dụng theo mô hình MVC.

Các chương trình đã được chạy thử trên máy tính cá nhân. Mã nguồn và hình ảnh kết quả được lưu trữ trên GitHub để phục vụ việc học tập và nộp bài.
