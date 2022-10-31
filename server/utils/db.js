const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Pelajar', {
    useNewUrlParser:true,
    useUnifiedTopology :true,
});

let db = mongoose.connection;
db.on('error',console.error.bind(console,'database conect eror'));
db.once('open',() => {
    console.log('database connected');
})
