const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = 7000;
const USER = require('./mongodb/dbs');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())



// roting
app.get('/', (req, res) => {
    res.sendFile('./studentform.html', { root: __dirname });


})
app.get('/table', (req, res) => {
    res.sendFile('./table.html', { root: __dirname });

})
app.get('/dash', (req, res) => {
    res.sendFile('./dash.html', { root: __dirname });

})


app.post('/post', (req, res) => {
    var user = new USER({
        firstName: req.body.Firstname,
        age: req.body.Age,
        dep: req.body.Depart,
        sta: req.body.Stage,
        mat: req.body.Matrial,
        nam: req.body.Degre


    })
    user.save((err, ok) => {
        if (err)
            console.log('it is err');
        else {
            console.log(ok);



        }

    });


})
app.get('/get', (req, res) => {
    USER.find((err, dates) => {

        if (err)
            console.log('it is err')
        else {
            res.json(dates);

        }
    })
});


app.listen(port, () => {
    console.log("it work")


})