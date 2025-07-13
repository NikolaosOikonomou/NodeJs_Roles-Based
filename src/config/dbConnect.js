const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.DATABASE_URL);
        console.log(`Database connected: ${connect.connection.host}, ${connect.connection.name}`);
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1);
    }
}

module.exports = dbConnect;