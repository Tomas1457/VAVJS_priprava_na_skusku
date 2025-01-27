//Objects I.
var a = {};
var a = new Object();

var a = new Object({"key": "value"});
var a = Object.create(protoObject);
var a = {"key": "value"};

//Objects II.
var User = function({name, password, email, score, level}){ 
    this.name = name ? name : null;
    this.password = password ? password : null;
    this.email = email ? email : null;
    this.level = level ? level : null;
    this.score = score ? score : null;
};

var us = new User({name: "Jose", password: "12345"});

User.prototype.hashName = function() {
    const crypto = require("crypto");
    return crypto.createHash('md5').update(this.name)
                                    .digest('hex');
};
for (var key in us) { console.log(key); }
Object.keys(us);