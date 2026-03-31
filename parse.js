const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('C:/Users/LENOVO/Downloads/Portfolio/Resume_Ammar_Saifee.pdf');

pdf(dataBuffer).then(function (data) {
    fs.writeFileSync('C:/Users/LENOVO/Downloads/Portfolio/resume_parsed.txt', data.text);
    console.log("Successfully parsed PDF into resume_parsed.txt");
}).catch(err => {
    console.error(err);
});
