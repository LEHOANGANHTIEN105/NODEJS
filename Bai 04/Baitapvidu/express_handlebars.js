const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine({
    layoutsDir: 'views',
    defaultLayout: false
}));

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Express Handlebars',
        message: 'Xin chào! Đây là ví dụ Handlebars.'
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
