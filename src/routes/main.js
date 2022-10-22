const bookRouter = require('../routes/book');
const userRouter = require('../routes/user');
const homeRouter = require('../routes/home');
function route(app) {
    app.use('/book', bookRouter);
    app.use('/user', userRouter);
    app.use('/', homeRouter);
}

module.exports = route;
