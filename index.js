
const http = require('http');

const { readFileSync } = require('fs');


const pageOne = readFileSync('app/style.css', 'utf8');
const pageTwo = readFileSync('app/registrationForm2.html', 'utf8');




const server = http.createServer((req, res) => {
    //console.log('request made');
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/HTML',
                    'host: 3000');
    res.write('<p style="text-align:center;">4th Branch</p>');
    res.write('<p style="color:green; font-size:22px;">hello </p>');
    res.write('<p style="color:blue; font-size:22px;">world</p>');
    
    res.write(pageOne);
    res.write(pageTwo);
     
    res.end();

    
});


server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
}) ;
