const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb+srv://zaki:BestZaki2001@cluster0-zd364.mongodb.net/test?retryWrites=true&w=majority');

let todoSchema = new mongoose.Schema({
    todo: String
});

let Todo = mongoose.model('Todo', todoSchema);

//let todoList = [{todo:'PlayLeagueOfLegends'}, {todo:'CodeNodeJs'}, {todo:'TrollForTheRestOfTheDay'}];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

app.use(express.static('./public'));

app.use(cors());

app.get('/todos',function(req, res){
    Todo.find({}, function(err,data){
        if (err) throw err;
        res.json(data);
    });
    
});

app.post('/todos',function(req, res){
    Todo(req.body).save(function(err, data){
        if (err) throw err;
        res.json(data);
    })
});

app.delete('/todos/:todo',function(req,res){
    Todo.find({todo: req.params.todo}).remove(function(err,data){
        if(err) throw err;
        res.json(data);
    });
});
app.listen(3000);

console.log('the app is running');

module.exports = app;
