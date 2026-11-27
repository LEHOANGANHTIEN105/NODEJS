const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const menu = [
    { url: '/', name: 'Trang chủ' },
    { url: '/about', name: 'Giới thiệu' },
    { url: '/skills', name: 'Kỹ năng' },
    { url: '/hobbies', name: 'Sở thích' },
    { url: '/contact', name: 'Liên hệ' }
];

function layout(title, content, active) {
    return `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title} | Anh Tiên</title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>

        <header class="header">
            <a href="/" class="logo">ANH TIÊN<span>.</span></a>

            <nav>
                ${menu.map(item => `
                    <a href="${item.url}"
                       class="${active === item.url ? 'active' : ''}">
                        ${item.name}
                    </a>
                `).join('')}
            </nav>
        </header>

        <main>
            ${content}
        </main>

        <footer>
            <h3>ANH TIÊN.</h3>
            <p>Không ngừng học hỏi và phát triển bản thân.</p>
            <p>© 2026 LÊ HOÀNG ANH TIÊN</p>
        </footer>

    </body>
    </html>
    `;
}

app.get('/', (req, res) => {
    res.send(layout('Trang chủ', `
        <section class="home">
            <div class="home-text">
                <span class="tag">WELCOME TO MY WEBSITE</span>

                <h1>Xin chào!<br>
                    Mình là <span>Anh Tiên</span>
                </h1>

                <h2>Sinh viên Công nghệ thông tin</h2>

                <p>
                    Mình yêu thích công nghệ, lập trình và sáng tạo.
                    Đây là website cá nhân nơi mình chia sẻ
                    những thông tin về bản thân.
                </p>

                <a href="/about" class="button">Khám phá thêm →</a>
            </div>

            <div class="profile-box">
                <div class="avatar">AT</div>
                <h2>LÊ HOÀNG ANH TIÊN</h2>
                <p>IT Student | Developer in Training</p>
                <div class="profile-line"></div>
                <p>📍 Khánh Hòa, Việt Nam</p>
                <p>🎓 Công nghệ thông tin</p>
            </div>
        </section>
    `, '/'));
});

app.get('/about', (req, res) => {
    res.send(layout('Giới thiệu', `
        <section class="page">
            <span class="tag">ABOUT ME</span>
            <h1>Giới thiệu bản thân</h1>

            <div class="about-box">
                <div class="avatar large">AT</div>

                <div>
                    <h2>LÊ HOÀNG ANH TIÊN</h2>
                    <p>Sinh viên ngành Công nghệ thông tin</p>
                    <p>Mình hiện đang học tập tại:</p>
                    <p><strong>Cao đẳng Kỹ thuật Công nghệ Nha Trang</strong></p>
                </div>
            </div>

            <div class="info-box">
                <h2>Thông tin cá nhân</h2>
                <p><strong>Họ và tên:</strong> Lê Hoàng Anh Tiên</p>
                <p><strong>Lớp:</strong> CĐ - CNTT18A</p>
                <p><strong>Mã sinh viên:</strong> CDCNTT18A26</p>
                <p><strong>Ngành học:</strong> Công nghệ thông tin</p>
                <p><strong>Địa chỉ:</strong> Khánh Hòa</p>
            </div>

            <div class="info-box">
                <h2>Mục tiêu của mình</h2>
                <p>
                    Không ngừng học hỏi, nâng cao kiến thức chuyên môn,
                    rèn luyện kỹ năng lập trình và tích lũy kinh nghiệm
                    để phát triển trong lĩnh vực công nghệ thông tin.
                </p>
            </div>
        </section>
    `, '/about'));
});

app.get('/skills', (req, res) => {
    const skills = [
        ['HTML & CSS', 75],
        ['JavaScript', 65],
        ['Node.js & Express', 60],
        ['React Native', 60],
        ['MongoDB', 55],
        ['SQL Server', 55]
    ];

    res.send(layout('Kỹ năng', `
        <section class="page">
            <span class="tag">MY SKILLS</span>
            <h1>Kỹ năng của mình</h1>
            <p class="subtitle">
                Những công nghệ mình đang tìm hiểu và học tập.
            </p>

            <div class="skill-container">
                ${skills.map(skill => `
                    <div class="skill-card">
                        <div class="skill-title">
                            <h3>${skill[0]}</h3>
                            <span>${skill[1]}%</span>
                        </div>
                        <div class="progress">
                            <div style="width: ${skill[1]}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="info-box">
                <h2>Kỹ năng mềm</h2>
                <p>✓ Tự học và tìm kiếm thông tin</p>
                <p>✓ Làm việc nhóm</p>
                <p>✓ Giải quyết vấn đề</p>
                <p>✓ Quản lý thời gian</p>
            </div>
        </section>
    `, '/skills'));
});

// SỞ THÍCH
app.get('/hobbies', (req, res) => {
    const hobbies = [
        ['💻', 'Công nghệ', 'Tìm hiểu công nghệ mới và học lập trình.'],
        ['🎵', 'Âm nhạc', 'Nghe nhạc để thư giãn sau giờ học.'],
        ['⚽', 'Thể thao', 'Yêu thích bóng đá và hoạt động thể thao.'],
        ['✈️', 'Du lịch', 'Khám phá những địa điểm mới.'],
        ['📚', 'Đọc sách', 'Tìm hiểu kiến thức và phát triển bản thân.'],
        ['📸', 'Chụp ảnh', 'Lưu giữ những khoảnh khắc đẹp.']
    ];

    res.send(layout('Sở thích', `
        <section class="page">
            <span class="tag">MY HOBBIES</span>
            <h1>Sở thích cá nhân</h1>
            <p class="subtitle">
                Những điều mình yêu thích trong cuộc sống.
            </p>

            <div class="cards">
                ${hobbies.map(hobby => `
                    <div class="card hobby-card">
                        <div class="hobby-icon">${hobby[0]}</div>
                        <h3>${hobby[1]}</h3>
                        <p>${hobby[2]}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `, '/hobbies'));
});

app.get('/contact', (req, res) => {
    res.send(layout('Liên hệ', `
        <section class="page">
            <span class="tag">CONTACT ME</span>
            <h1>Liên hệ với mình</h1>
            <p class="subtitle">
                Cảm ơn bạn đã ghé thăm website cá nhân của mình.
            </p>

            <div class="info-box">
                <h2>Thông tin liên hệ</h2>
                <p><strong>Họ tên:</strong> Lê Hoàng Anh Tiên</p>
                <p><strong>Lớp:</strong> CĐ - CNTT18A</p>
                <p><strong>Số điện thoại:</strong> 0347827054</p>
                <p><strong>Trường:</strong> Cao đẳng Kỹ thuật Công nghệ Nha Trang</p>
                <p><strong>Địa chỉ:</strong> Khánh Hòa, Việt Nam</p>
            </div>

            <div class="info-box">
                <h2>Gửi lời nhắn</h2>

                <form>
                    <input type="text" placeholder="Họ và tên" required>
                    <input type="email" placeholder="Email" required>
                    <textarea rows="5" placeholder="Nội dung liên hệ" required></textarea>
                    <button type="submit" class="button">Gửi lời nhắn</button>
                </form>

                <p class="note">
                    Biểu mẫu minh họa, chưa kết nối xử lý dữ liệu.
                </p>
            </div>
        </section>
    `, '/contact'));
});

app.use((req, res) => {
    res.status(404).send(layout('404', `
        <section class="page error">
            <h1>404</h1>
            <h2>Oops! Không tìm thấy trang.</h2>
            <p>Đường dẫn bạn truy cập không tồn tại.</p>
            <a href="/" class="button">Quay về trang chủ</a>
        </section>
    `, ''));
});

app.listen(PORT, () => {
    console.log(`Website đang chạy tại http://localhost:${PORT}`);
});

app.use((req, res) => {
    res.status(404).send(layout('404 - Không tìm thấy trang', `
        <section class="page error">
            <h1>404</h1>
            <h2>Oops! Không tìm thấy trang.</h2>
            <p>
                Xin lỗi! Đường dẫn bạn truy cập không tồn tại
                hoặc đã bị thay đổi.
            </p>
            <a href="/" class="button">Quay về trang chủ</a>
        </section>
    `, ''));
});