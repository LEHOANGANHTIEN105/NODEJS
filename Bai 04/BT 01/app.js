const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Menu
const menu = [
    { name: 'Trang chủ', url: '/' },
    { name: 'Giới thiệu', url: '/about' },
    { name: 'Kỹ năng', url: '/skills' },
    { name: 'Sở thích', url: '/hobbies' },
    { name: 'Liên hệ', url: '/contact' }
];

// Giao dien chung
function layout(title, content, active) {
    return `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <header>
            <h2>My Website</h2>
            <nav>
                ${menu.map(item => `
                    <a href="${item.url}" class="${active === item.url ? 'active' : ''}">
                        ${item.name}
                    </a>
                `).join('')}
            </nav>
        </header>

        <main>
            ${content}
        </main>

        <footer>
            <p>© 2026 - Lê Hoàng Anh Tiên</p>
        </footer>
    </body>
    </html>
    `;
}

app.get('/', (req, res) => {
    res.send(layout('Trang chủ', `
        <h1>Xin chào!</h1>
        <h2>Mình là Anh Tiên</h2>
        <p>Chào mừng bạn đến với website cá nhân của mình.</p>
        <p>Mình là sinh viên ngành Công nghệ thông tin.</p>
    `, '/'));
});

app.get('/about', (req, res) => {
    res.send(layout('Giới thiệu', `
        <h1>Giới thiệu bản thân</h1>
        <p>Họ tên: Lê Hoàng Anh Tiên</p>
        <p>Lớp: CĐ - CNTT18A</p>
        <p>Ngành học: Công nghệ thông tin</p>
        <p>Địa chỉ: Khánh Hòa</p>
    `, '/about'));
});

app.get('/skills', (req, res) => {
    res.send(layout('Kỹ năng', `
        <h1>Kỹ năng</h1>
        <p>HTML và CSS</p>
        <p>JavaScript</p>
        <p>Node.js và Express</p>
        <p>MongoDB cơ bản</p>
    `, '/skills'));
});

app.get('/hobbies', (req, res) => {
    res.send(layout('Sở thích', `
        <h1>Sở thích</h1>
        <p>Nghe nhạc</p>
        <p>Xem phim</p>
        <p>Đi du lịch</p>
        <p>Tìm hiểu công nghệ</p>
    `, '/hobbies'));
});

app.get('/contact', (req, res) => {
    res.send(layout('Liên hệ', `
        <h1>Liên hệ</h1>
        <p>Họ tên: Lê Hoàng Anh Tiên</p>
        <p>Email: anhient15@gmail.com</p>
        <p>Địa chỉ: Khánh Hòa</p>
    `, '/contact'));
});

app.use((req, res) => {
    res.status(404).send(layout('Lỗi 404', `
        <h1>404 - Không tìm thấy trang!</h1>
        <p>Đường dẫn không tồn tại.</p>
        <a href="/">Quay lại trang chủ</a>
    `, ''));
});

app.listen(PORT, () => {
    console.log('Server đang chạy tại http://localhost:' + PORT);
});
