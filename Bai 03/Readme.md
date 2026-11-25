## 3. Các lệnh thực hiện

**Bước 1: Mở Terminal (PowerShell) và di chuyển đến thư mục bài 09**

```powershell
cd "D:\CĐ - CNTT18A\Bài 3 - Bài Tập 1\Node JS\Bai 03\BT 09"
```

**Bước 2: Cài đặt thư viện MongoDB**

```bash
npm install mongodb
```

**Bước 3: Chạy chương trình**

```bash
node bai09.js
```

**Bước 4: Kiểm tra dữ liệu trong MongoDB**

Mở MongoDB Compass, chọn tab MONGOSH và thực hiện:

```javascript
use qlsinhvien

db.students_test.find()
```

Kiểm tra tổng số sinh viên còn lại:

```javascript
db.students_test.countDocuments()
```
