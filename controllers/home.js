function index(req, res) {
    res.render('home', {title: 'Home page'})
}

module.exports = {index}