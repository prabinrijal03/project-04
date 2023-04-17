const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017/project04').on('open',()=>{
    console.log('Mongodb connected successfully');
}).on('error', ()=>{
    console.log('Mongodb connection failed');
});
module.exports = connection;