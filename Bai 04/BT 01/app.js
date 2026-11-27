const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

function renderPage(title, content) {
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
            <h1>WEBSITE CÁ NHÂN</h1>
            <nav>
                <a href="/">Trang chủ</a>
                <a href="/about">Giới thiệu</a>
                <a href="/skills">Kỹ năng</a>
                <a href="/hobbies">Sở thích</a>
                <a href="/contact">Liên hệ</a>
            </nav>
        </header>

        <main>
            ${content}
        </main>

        <footer>
            <p>© 2026 - Website giới thiệu cá nhân</p>
        </footer>
    </body>
    </html>
    `;
}

app.get('/', (req, res) => {
    res.send(renderPage('Trang chủ', `
        <section class="hero">
            <h2>Xin chào! Mình là Anh Tiên</h2>
            <p>Chào mừng bạn đến với website giới thiệu cá nhân của mình.</p>
            <p>Mình là sinh viên ngành Công nghệ thông tin.</p>
            <a class="btn" href="/about">Tìm hiểu về mình</a>
        </section>
    `));
});

app.get('/about', (req, res) => {
    res.send(renderPage('Giới thiệu', `
        <section>
            <h2>Giới thiệu bản thân</h2>
            <p><strong>Họ tên:</strong> Lê Hoàng Anh Tiên</p>
            <p><strong>Ngành học:</strong> Công nghệ thông tin</p>
            <p><strong>Lớp:</strong> CĐ - CNTT18A</p>
            <p>Mình là người yêu thích công nghệ, thích học hỏi
            và khám phá những kiến thức mới.</p>
        </section>
    `));
});


app.get('/skills', (req, res) => {
    res.send(renderPage('Kỹ năng', `
        <section class="skills-section">
            <h2>Những kỹ năng của mình</h2>
            <p class="skills-intro">
                Một số kiến thức và công nghệ mình đang học tập, phát triển.
            </p>

            <div class="skills-grid">

                <div class="skill-card">
                    <h3>HTML & CSS</h3>
                    <p>Thiết kế cấu trúc và giao diện website.</p>
                    <span class="level">Cơ bản - Khá</span>
                </div>

                <div class="skill-card">
                    <h3>JavaScript</h3>
                    <p>Xây dựng chức năng và tương tác cho website.</p>
                    <span class="level">Cơ bản</span>
                </div>

                <div class="skill-card">
                    <h3>Node.js</h3>
                    <p>Xây dựng ứng dụng phía máy chủ.</p>
                    <span class="level">Đang học</span>
                </div>

                <div class="skill-card">
                    <h3>React Native</h3>
                    <p>Phát triển giao diện ứng dụng di động.</p>
                    <span class="level">Đang học</span>
                </div>

                <div class="skill-card">
                    <h3>Cơ sở dữ liệu</h3>
                    <p>Làm quen với lưu trữ và quản lý dữ liệu.</p>
                    <span class="level">Cơ bản</span>
                </div>

                <div class="skill-card">
                    <h3>Thiết kế giao diện</h3>
                    <p>Sắp xếp bố cục và lựa chọn màu sắc UI.</p>
                    <span class="level">Đang phát triển</span>
                </div>

            </div>
        </section>
    `));
});

app.get('/hobbies', (req, res) => {
    res.send(renderPage('Sở thích', `
        <section>
            <h2>Sở thích của mình</h2>
            <div class="hobby-list">
                <div class="hobby">Nghe nhạc</div>
                <div class="hobby">Xem phim</div>
                <div class="hobby">Lập trình</div>
                <div class="hobby">Du lịch</div>
                <div class="hobby">Chụp ảnh</div>
            </div>
        </section>
    `));
});

app.get('/contact', (req, res) => {
    res.send(renderPage('Liên hệ', `
        <section>
            <h2>Thông tin liên hệ</h2>
            <p><strong>Họ tên:</strong> Lê Hoàng Anh Tiên</p>
            <p><strong>Email:</strong> anhient15@gmail.com</p>
            <p><strong>Số điện thoại:</strong> 0347827054</p>
            <p>Cảm ơn bạn đã ghé thăm website của mình!</p>
        </section>
    `));
});

app.use((req, res) => {
    res.status(404).send(renderPage('404 - Không tìm thấy', `
        <section class="error">
            <h2>404</h2>
            <h3>Không tìm thấy trang!</h3>
            <p>Đường dẫn bạn truy cập không tồn tại.</p>
            <a class="btn" href="/">Quay về trang chủ</a>
        </section>
    `));
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
