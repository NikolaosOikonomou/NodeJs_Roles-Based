


exports.register = async (req, res) => {
    const {username, password, role} = req.body;
    res.send('User registered');
};

exports.login = async (req, res) => {
    // Login logic here
    res.send('User logged in');
};