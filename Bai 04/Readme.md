# BÀI 4: XÂY DỰNG WEB VỚI NỀN TẢNG EXPRESS (EPRESS FRAMEWORK)

## Cài đặt và thực hiện

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

## Nội dung thực hiện

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
