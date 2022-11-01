const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dedesyarifudin:alhadid070405@cluster0.vjcnbn6.mongodb.net/blogdb?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology :true,
});

let db = mongoose.connection;
db.on('error',console.error.bind(console,'database conect eror'));
db.once('open',() => {
    console.log('database connected');
})
