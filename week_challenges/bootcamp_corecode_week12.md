**NODE JS** ⚗️

**Week challenges (Monday)** 💻

Work on my project

**Week challenges (Tuesday)** 💻

Work on my project

**Week challenges (Wednesday)**

api -> predict age!
```
import express from 'express';
import bodyParser from 'body-parser';
	
var app = express();
var app_port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.listen(app_port, function(){
	console.log('Server is running on port ' + app_port);
});

app.get('/', function (req, res) {
	const name = req.query.name;
	const edad = randomAge();
	const days = convertDays(edad);
	const result = {
		name: `${name}`,
		edad: `${edad}`,
		days: `${days}`
	};
	res.send(result);
});

const randomAge = () => { 
	return Math.floor((Math.random() * 98) + 1);
};

const convertDays = (edad) => {
	return edad * 365;
};
```

**Week challenges (Thuesday)** 💻

Work on my project
