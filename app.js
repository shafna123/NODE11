// const http = require('http');
// const fs = require('fs')

// var app = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
    // res.write("hi")
    // res.end(" <h1>Hello</h1>")
    // console.log(req.url)





    // for(let i = 0; i < 10; i++){
    //     res.write(`<h1>${i}</h1>`);
    // }
    // res.end();



    // if(req.url == "/"){
    //     res.end("<h1>WELCOME</h1>");
    // }

    // else if(req.url == "/about"){
    //     res.end("<h1>ABOUT US</h1>");
    // }

    // else if(req.url == "/contact"){
    //     res.end("<h1>CONTACT US</h1>");
    // }




    // })

    // app.on('listening', ()=>{
    //     console.log("listening on port 5000");
    // });



    // if (req.url == "/") {
    //     res.write(`
    // <html>
    // <head>
    // <title>${req.url}</title>
    // </head>
    // <body>
    // <h1>HOME</h1>
    // </body>
    // </html>
    
    // `);
    //     res.end();
    // }





    // if(req.url == "/"){
    //     var content = fs.readFileSync('templates/index.html');
    //     res.end(content);
    // }


    // else if(req.url == "/about"){
    //     var content = fs.readFileSync('templates/about.html');
//     //     res.end(content);
//     // }


// //     let url = req.url.split('?')[0];
// //     // console.log(req.url)
// //     // console.log(url)

// //     if(url == "/login"){
// //         var content = fs.readFileSync('templates/login.html');
// //         res.end(content);
// //     }



// // })
//     app.listen(5000)