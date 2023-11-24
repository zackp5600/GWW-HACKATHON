//EXPRESS//

const express = require('express');
const app = express();

//FILE SYSTEM//
const fs = require('fs');

//IMPLEMENT STATIC SOURCES//
app.use(express.static('src'));

app.get('/', (req, res)=>{
    try{
        res.write(fs.readFileSync('src/index.html'));
    }catch{
        res.write('REFRESH PAGE.');
    }
});

//LISTEN ON PORT 80//
app.listen(80,()=>{
    console.log('listening on port 80');
});
