const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

const url = args[0];
const path = args[1];

console.log(url, path);


request(url, (error, response, body) => {
    if (error) {


    } else {
        fs.writeFile(path, body, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Saved correctly to ${path}`);
                
            }
        });
    }

});