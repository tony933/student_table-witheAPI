const mongo = require('mongoose'),
    schama = mongo.Schema;
mongo.connect('mongodb://127.0.0.1:27017/enjas1', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true });
const user_schama = {

    firstName: { type: String, require: true },
    age: { type: String, require: true },
    dep: { type: String, require: true },
    sta: { type: String, require: true },
    mat: { type: String, require: true },
    nam: { type: Number, require: true }
}
var USER = mongo.model('USER', user_schama);
module.exports = USER;