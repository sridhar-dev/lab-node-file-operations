const datas=require('./data');
const os=require('os');
const fs=require('fs');
const crypto = require('crypto');

const getos=os.userInfo();

fs.writeFileSync('message.txt',' message.txt')
const userdatas=datas(4675,"Prograd",2021,"B.E");
const password = crypto.createHmac('sha256','a secret').update('Prograd').digest('hex');
fs.appendFileSync('message.txt',`\n Prograd Details
    UserId ->        ${userdatas.id},   
    Name ->          ${userdatas.name},
    Year ->          ${userdatas.year},
    Qualification -> ${userdatas.qualification},
    Username ->      ${getos.username},
    Password ->      ${password}`)