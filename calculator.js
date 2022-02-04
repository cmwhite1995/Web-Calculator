const awsServerlessExpress = require('aws-serverless-express');
const app = awsServerlessExpress();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
  console.log(req.body);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1+num2;
  res.send("the result is " + result);
})

app.get('/bmiCalculator', function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
})
app.post("/bmiCalculator", function(req, res) {
  console.log(req.body);
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var result = weight/Math.pow(height,2);
  res.send("the result is " + result);
})

app.listen(port, function() {
  console.log("Example app listening at port " + port);
});
