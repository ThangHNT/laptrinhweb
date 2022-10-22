const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3500;
const route = require('./routes/main');

app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// connect to db
const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/book_library');
        console.log('Connect database successfully');
    } catch (error) {
        console.log('connection database failed');
    }
}
connect();

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
