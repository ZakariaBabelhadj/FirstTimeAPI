const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

let todoList = [{todo:'PlayLeagueOfLegends'}, 
                {todo:'CodeNodeJs'}, 
                {todo:'TrollForTheRestOfTheDay'}];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

app.use(express.static('./public'));

app.use(cors());

app.get('/todos',function(req, res){
    res.json(todoList);
});

app.post('/todos',function(req, res){
    todoList.push(req.body);
    res.json(todoList);
});

app.delete('/todos/:todo',function(req,res){
    todoList = todoList.filter(function(def){
        return def.todo.toLowerCase() !== req.params.todo.toLowerCase();
    });
    res.json(todoList);
});
app.listen(3000);

console.log('the app is running');

module.exports = app;
