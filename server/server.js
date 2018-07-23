const express = require('express');
const app = express();
//require the router here
const messagesRouter = require('./routes/messages.route.js');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//routes
app.use('/messages', messagesRouter);

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('App is running on port:', PORT);

});