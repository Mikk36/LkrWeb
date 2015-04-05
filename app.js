var util = require("util");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var _publicPath = "public/polymer";

var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

var allowCrossDomain = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(allowCrossDomain);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, _publicPath)));

//var api = require("./routes/api");
//app.use("/", api);

//var debug = require("debug")("aurelia-node");

app.set("port", process.env.PORT || 9000);

var server = http.listen(app.get("port"), () => {
  util.log("Express server listening on port " + server.address().port);
});

io.on("connection", (socket) => {
  util.log("a user connected");
  socket.on("disconnect", function () {
    util.log("a user disconnected");
  });
  socket.on("welcome", function () {
    util.log("Welcome!");
  });
});

module.exports = app;
