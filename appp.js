const http = require('http');
const qs = require('querystring');
const url = require('url');

var server = http.createServer(function (req,res) {
    res.setHeader('Content-Type', 'application/json');

    const link = url.parse(req.url, true);
    let path = link.pathname;

    if (path == "/"){
        res.end("WELCOME");

    }
    
    else if(path == "/api/users"){ 
        let users = getUsers();

        let itemsPerPage = 2
        let totalPages = Math.ceil(users.length / itemsPerPage);
        let pageNumber = 1;

        let requestedPage = parseInt(link.query.page);
        if(!isNaN(requestedPage))
        {
            pageNumber = requestedPage;
        }
       
        
        let startIndex = ((pageNumber - 1)* itemsPerPage);
        let endIndex = pageNumber * itemsPerPage;

        // let totalPages = users.length / itemsPerPage;
        // let pageNumber = 1;

        let response = {
            itemsPerPage: itemsPerPage,
            totalPages: totalPages,
            pageNumber: pageNumber,
            data: users.slice(startIndex,endIndex)

        }
        let json = JSON.stringify(response);
        res.end(json);
    }

});
server.listen(80);








function getUsers(){
    let id = 1;
    return[
        {
          id: id++,  name: 'john', email: 'john@gmail.com'
        },
        {
            id: id++, name: 'jane', email: 'jane@gmail.com'
        },
        {
            id: id++, name: 'janet', email: 'janet@gmail.com'
        },
        {
            id: id++, name: 'joe', email: 'joe@gmail.com'
        }
    ]
}
  
