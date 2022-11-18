const http = require('http');
const fs = require('fs');
const url = require('url');

var server = http.createServer(function (req,res) {
    res.setHeader('Content-Type', 'text/html');

    let address = url.parse(req.url, true);
    let query = address.query;
let path = address.pathname;


if(path == "/login"){
    var content = fs.readFileSync('templates/login.html', 'utf8');
    res.end(content);
}

else if(path == "/register"){
    var content = fs.readFileSync('templates/register.html', 'utf8');
    res.end(content);
}




else if (path == "/result"){
    console.log(query);
    res.write(`First Name:${query.firstname}`);
    res.write(`<h3>Last Name:${query.lastname}</h3>`);
    res.write(`<h3> Email:${query.email}</h3>`);
    res.write(`<h3> Password:${query.password}</h3>`);
    res.write(`<h3> Gender:${query.gender}</h3>`);
    res.end(`<h3> Mobile:${query.mobile}</h3>`);
}
    
});

server.listen(4500);