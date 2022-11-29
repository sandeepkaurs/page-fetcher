const request = require('request');
const fs = require('fs');

// You need to make an http request and wait for the response.
// const filepath = 'Some content!';
// const fileDomain = 

// fs.writeFile('/Users/joe/test.txt', content, err => {
//   if (err) {
//     console.error(err);
//   }
//   // file written successfully
// });


console.log(process.argv.slice(2));
request(process.argv.slice(2)[0], (error, response, body) => {
  if (error) {
    console.error('error:', error); // Print the error if one occurred
  }
  fs.writeFile(process.argv.slice(2)[1], body, error => {
    if (error) {
    console.log(error);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${process.argv.slice(2)[1]} `)
    }
});
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
});

