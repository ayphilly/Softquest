var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var http = require('http');
var mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require ('cors');
const bodyParser = require('body-parser');
const {ContactValidation} = require('./validations');
const Contact = require('./model/contact');


const app = new express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
port = process.env.PORT || 4000;


app.use(morgan('short'));
app.use(
    cors ({
        credentials : true,
        origin:true
    })
);

//middleware
app.use(express.json())
app.options('*', cors());

dotenv.config();

//connect to db
mongoose.connect(
    process.env.DB_CONNECT,
{ useNewUrlParser: true }
).catch(err => {
    console.log(err);
});

db = mongoose.connection;
db.on('open', ()=> {
    console.log('db connected')
})
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('./contact-me/build'))
}
app.post('/api/contact', async (req, res)=> {
    params = req.body;
    var {firstname, lastname, email, number, need} = req.body;
    const {error} = ContactValidation(req.body);

    if(error) {
        return res.status(400).send(error.message);
    }

    //Contact.insertOne({params})    
    var createContact = new Contact({
        firstname : firstname,
        lastname: lastname,
        email: email,
        number: number,
        need : need
    });

    createContact.save().then( response => {
        res.status(200).send('contact saved successfully')
    }).catch( err => {
        res.status(400).send(`Error ${err}`)
    })

});

app.get('/api/contacts', (req, res)=> {
    
    Contact.find().then( response => {
        res.status(200).send(response);
    }).catch(err => {
        res.status(400).send(err)
    })
})

app.listen(port, () => {
    console.log(`the server running at port ${port}`);
})
