const mongoose = require('mongoose');
const url = `mongodb://mongo_db/test?authSource=admin`;

mongoose.connect(url, {
    useNewUrlParser: true,
    user: 'homestead',
    pass: 'secret'
} ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('successfully connected to the database');
}).catch(err => {
    console.log('error connecting to the database', err);
    process.exit();
});

module.exports = mongoose;
