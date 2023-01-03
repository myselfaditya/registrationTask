const express = require('express');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());

mongoose.connect("mongodb+srv://iamaditya:gbCsJkKLQc8U2oyp@cluster0.brptf5o.mongodb.net/FrequentreTask?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then(() => console.log("MongoDb is connected .."))
.catch((err) => console.log(err));

app.use('/', route);

app.listen(PORT, function () {
    console.log('Express app running on port ' + PORT)
});