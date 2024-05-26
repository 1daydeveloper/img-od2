exports.index = (req, res) => {
    res.render('index', { title: 'Home' });
};

exports.comeingsoon = (req, res) => {
    res.render('devscreen', { title: 'Home' });
};