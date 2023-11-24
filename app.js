const express = require('express');
const fs = require("fs");
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'src' folder
app.use(express.static(path.join(__dirname, 'src')));
app.get("/quizzes",(req,res)=>{
    try{
        res.write(fs.readFileSync("src/quiz.html"));
        res.end();
    }catch{
        res.write("REFRESH");
    }
});

app.get("/home", (req, res)=>{
  try{
    res.write(fs.readFileSync("src/index.html"));
    res.end();
  }catch{
    res.write("REFRESH");
}
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
