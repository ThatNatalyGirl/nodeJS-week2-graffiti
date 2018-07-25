//http://expressjs.com/en/starter/hello-world.html 
//we got this first part of the code from ^
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

//part of express so that we can keep running express stuffs. Their code!
const app = express()
//this is telling the api to answer to anyone 
app.use(cors())
//for parsing application/json
app.use(bodyParser.json())
//for parsing application/x-ww-form-urlencoded
app.use(bodyParser.urlencoded( {extended: true}))
//figure out which data goes with a post for the future

//where the tags go
let tags = []
//NOTES*******************************************************
// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function(req, res){
	res.send('Welcome to the Tag World. Add tag to the URL :D')
})

//so you can do /whatever and then when you go there you get the response given here in this section! Woah
//it can do regex too!
//if you put a ":" in it, it becomes a variable!
	//-so the person can send stuffs 

// app.get('/caterpillar', function(req, res){
// 	res.send('I will become a butterfly one day!!!')
// })
	//you can send json and other stuff too

//here's an example of the :

// app.get('/user/:name', function(req, res){
// 	res.send('I will become a ' + req.params.name + ' one day!!!')
// })
	
//NOTES*******************************************************

app.post('/tag', function(req, res){
	//req.body.tag is using the body parser going through the giant req and then finding the tag property
	console.log(req.body.tag)
	console.log("tags.array:", tags)
	console.log("object", req)
	res.send('This is how you add tags')
	var tagInfo = {
		word: req.body.tag
		// color: req.body.
	}
	tags.push(req.body.tag);
})

app.get('/tag', function(req, res) {
	res.send(tags)
	//it's encoding it in json for us.
	//this is sending the tags array so that we can see it on our localhost:####/tag
})

// app.listen(1235, () => console.log('Example app listening on port 1235!'))
app.listen(1235, function(){
	console.log('Example app listening on port 1235!')
}) 



