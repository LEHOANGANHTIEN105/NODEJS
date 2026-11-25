const fs = require('fs');
const path = require('path');

const folder = './data';

if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
    console.log('1. Tạo thư mục data thành công!');
} else {
    console.log('1. Thư mục data đã tồn tại!');
}

const fileCu = path.join(folder, 'ghichu.txt');

const noiDung = `Dong 1: Hoc lap trinh Node.js
Dong 2: Tim hieu module File System
Dong 3: Thuc hanh doc va ghi file`;

fs.writeFileSync(fileCu, noiDung, 'utf8');
console.log('2. Tạo và ghi nội dung vào ghichu.txt thành công!');

const fileMoi = path.join(folder, 'ghichu_moi.txt');

fs.renameSync(fileCu, fileMoi);
console.log('3. Đổi tên file thành ghichu_moi.txt thành công!');

const duLieu = fs.readFileSync(fileMoi, 'utf8');

console.log('\n4. Nội dung file ghichu_moi.txt:');
console.log('-----------------------------');
console.log(duLieu);
console.log('-----------------------------');

const fileTam = path.join(folder, 'tam.txt');

fs.writeFileSync(fileTam, 'Day la file tam de thuc hanh xoa file.');
console.log('\n5. Tạo tập tin tam.txt thành công!');

fs.unlinkSync(fileTam);
console.log('6. Xóa tập tin tam.txt thành công!');

console.log('\n===== HOÀN THÀNH BÀI TẬP 08 =====');